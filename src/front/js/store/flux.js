const getState = ({ getStore, getPrivate, getActions, setStore }) => {
	return {
		store: {
			message: null,
			user_public_id: null,
			// se crean arrays de objetos
			favoritos: [],
			fav_bbdd: false

		},
		actions: {
			// Use getActions to call a function within a fuction
			dataFromAPI: async (url, destino) => {
				// para meter los datos de la API
				const store = getStore()
				if (!store.hasOwnProperty(destino)) {
					try {
						const resp = await fetch(process.env.BACKEND_URL + url)
						const data = await resp.json()
						let llenar = {}
						llenar[destino] = data
						setStore(llenar)
						return data
					} catch (error) {
						return false
					}
				} else {
					return store[destino]
				}

			},

			solicitudesAPI: async (url, meth, head, bod) => {

				const body = JSON.stringify(bod)
				const store = getStore()
				//console.log(body)
				if (url === '/api/logout') {
					const token = localStorage.removeItem('jwt-token')
				}

				//console.log(url, meth, head, body);
				await fetch(process.env.BACKEND_URL + url, {
					method: meth,
					headers: head,
					body: body
				}).then((resp) => resp.json()).then((data) => {
					//console.log(data[1])
					if (data.token) {
						localStorage.setItem("jwt-token", data.token)
						setStore({ user_public_id: data.user_public_id })
						return data
					}
					let datos_bbdd = data[1]
					if (datos_bbdd) {
						//console.log(datos_bbdd)
						if (Object.keys(store.favoritos).length !== 0) {
							//filtrar un array con otro
							let ids = new Set(store.favoritos.map(d => d.encuentra))
							let merged = [...store.favoritos, ...datos_bbdd.filter(d => !ids.has(d.encuentra))]
							//console.log(merged)
							setStore({ favoritos: merged })
							return store.favoritos

						} else {
							setStore({ favoritos: datos_bbdd })
							return data
						}

					} else {

						return data
					}


				}).catch((error) => {
					return 'Hubo un problema con la petición Fetch:' + error.message
				})
			},
			logOut: () => {
				setStore({ user_public_id: null })
				setStore({ favoritos: [] })
				return true
			},

			addFavorite: (secc, uid, atitle) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === secc + uid) { esta = true } })
				}
				if (!esta) {
					const newFav = { id: uid, clase: secc, title: atitle, encuentra: secc + uid }
					const result = store.favoritos.concat(newFav)
					setStore({ favoritos: result })
				}
			},
			delFavorite: (index) => {
				const store = getStore()
				const result = store.favoritos.filter(dato => dato.encuentra !== index);
				setStore({ favoritos: result })
			},
			esFavorite: (index) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === index) { esta = true } })
				}
				return esta
			},
		}
	};
};
export default getState;
