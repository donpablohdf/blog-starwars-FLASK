--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO forgeeks;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: films; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.films (
    id integer NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    producer character varying(255) DEFAULT NULL::character varying,
    title character varying(255) DEFAULT NULL::character varying,
    episode_id character varying(255) DEFAULT NULL::character varying,
    director character varying(255) DEFAULT NULL::character varying,
    opening_crawl text,
    characters text,
    planets text,
    starships text,
    vehicles text,
    species text
);


ALTER TABLE public.films OWNER TO forgeeks;

--
-- Name: films_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.films_detail_id_seq
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.films_detail_id_seq OWNER TO forgeeks;

--
-- Name: films_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.films_id_seq
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.films_id_seq OWNER TO forgeeks;

--
-- Name: films_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.films ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.films_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: people; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.people (
    id integer NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    height character varying(255) DEFAULT NULL::character varying,
    mass character varying(255) DEFAULT NULL::character varying,
    hair_color character varying(255) DEFAULT NULL::character varying,
    skin_color character varying(255) DEFAULT NULL::character varying,
    eye_color character varying(255) DEFAULT NULL::character varying,
    birth_year character varying(255) DEFAULT NULL::character varying,
    gender character varying(255) DEFAULT NULL::character varying,
    name character varying(255) DEFAULT NULL::character varying,
    homeworld character varying(255) DEFAULT NULL::character varying,
    url character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.people OWNER TO forgeeks;

--
-- Name: people_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.people_detail_id_seq
    START WITH 83
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.people_detail_id_seq OWNER TO forgeeks;

--
-- Name: people_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.people_id_seq
    START WITH 84
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.people_id_seq OWNER TO forgeeks;

--
-- Name: people_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.people ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.people_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: planets; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.planets (
    id integer NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    diameter character varying(255) DEFAULT NULL::character varying,
    rotation_period character varying(255) DEFAULT NULL::character varying,
    orbital_period character varying(255) DEFAULT NULL::character varying,
    gravity character varying(255) DEFAULT NULL::character varying,
    population character varying(255) DEFAULT NULL::character varying,
    climate character varying(255) DEFAULT NULL::character varying,
    terrain character varying(255) DEFAULT NULL::character varying,
    surface_water character varying(255) DEFAULT NULL::character varying,
    name character varying(255) DEFAULT NULL::character varying,
    url character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.planets OWNER TO forgeeks;

--
-- Name: planets_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.planets_detail_id_seq
    START WITH 61
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planets_detail_id_seq OWNER TO forgeeks;

--
-- Name: planets_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.planets_id_seq
    START WITH 61
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planets_id_seq OWNER TO forgeeks;

--
-- Name: planets_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.planets ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.planets_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: sections; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.sections (
    id integer NOT NULL,
    section character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.sections OWNER TO forgeeks;

--
-- Name: sections_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.sections_id_seq
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sections_id_seq OWNER TO forgeeks;

--
-- Name: sections_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.sections ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.sections_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: species; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.species (
    id integer NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    classification character varying(255) DEFAULT NULL::character varying,
    designation character varying(255) DEFAULT NULL::character varying,
    average_height character varying(255) DEFAULT NULL::character varying,
    average_lifespan character varying(255) DEFAULT NULL::character varying,
    hair_colors character varying(255) DEFAULT NULL::character varying,
    skin_colors character varying(255) DEFAULT NULL::character varying,
    eye_colors character varying(255) DEFAULT NULL::character varying,
    language character varying(255) DEFAULT NULL::character varying,
    name character varying(255) DEFAULT NULL::character varying,
    homeworld character varying(255) DEFAULT NULL::character varying,
    people character varying(255) DEFAULT NULL::character varying,
    url character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.species OWNER TO forgeeks;

--
-- Name: species_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.species_detail_id_seq
    START WITH 38
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_detail_id_seq OWNER TO forgeeks;

--
-- Name: species_detail_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.species ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.species_detail_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.species_id_seq
    START WITH 38
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO forgeeks;

--
-- Name: starships; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.starships (
    id integer NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    model character varying(255) DEFAULT NULL::character varying,
    starship_class character varying(255) DEFAULT NULL::character varying,
    manufacturer character varying(255) DEFAULT NULL::character varying,
    cost_in_credits character varying(255) DEFAULT NULL::character varying,
    length character varying(255) DEFAULT NULL::character varying,
    crew character varying(255) DEFAULT NULL::character varying,
    passengers character varying(255) DEFAULT NULL::character varying,
    max_atmosphering_speed character varying(255) DEFAULT NULL::character varying,
    hyperdrive_rating character varying(255) DEFAULT NULL::character varying,
    mglt character varying(255) DEFAULT NULL::character varying,
    cargo_capacity character varying(255) DEFAULT NULL::character varying,
    consumables character varying(255) DEFAULT NULL::character varying,
    pilots character varying(255) DEFAULT NULL::character varying,
    name character varying(255) DEFAULT NULL::character varying,
    url character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.starships OWNER TO forgeeks;

--
-- Name: starships_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.starships_detail_id_seq
    START WITH 76
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.starships_detail_id_seq OWNER TO forgeeks;

--
-- Name: starships_detail_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.starships ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.starships_detail_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: starships_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.starships_id_seq
    START WITH 76
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.starships_id_seq OWNER TO forgeeks;

--
-- Name: users; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) DEFAULT NULL::character varying,
    username character varying(255) DEFAULT NULL::character varying,
    password character varying(255) DEFAULT NULL::character varying,
    firstname character varying(255) DEFAULT NULL::character varying,
    lastname character varying(255) DEFAULT NULL::character varying,
    email character varying(255) DEFAULT NULL::character varying,
    is_active boolean,
    rol integer,
    public_id character varying(100)
);


ALTER TABLE public.users OWNER TO forgeeks;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO forgeeks;

--
-- Name: users_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: vechicles; Type: TABLE; Schema: public; Owner: forgeeks
--

CREATE TABLE public.vechicles (
    id integer NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    model character varying(255) DEFAULT NULL::character varying,
    vehicle_class character varying(255) DEFAULT NULL::character varying,
    manufacturer character varying(255) DEFAULT NULL::character varying,
    cost_in_credits character varying(255) DEFAULT NULL::character varying,
    length character varying(255) DEFAULT NULL::character varying,
    crew character varying(255) DEFAULT NULL::character varying,
    passengers character varying(255) DEFAULT NULL::character varying,
    max_atmosphering_speed character varying(255) DEFAULT NULL::character varying,
    cargo_capacity character varying(255) DEFAULT NULL::character varying,
    consumables character varying(255) DEFAULT NULL::character varying,
    name character varying(255) DEFAULT NULL::character varying,
    films character varying(255) DEFAULT NULL::character varying,
    pilots character varying(255) DEFAULT NULL::character varying,
    url character varying(255) DEFAULT NULL::character varying
);


ALTER TABLE public.vechicles OWNER TO forgeeks;

--
-- Name: vechicles_detail_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.vechicles_detail_id_seq
    START WITH 77
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vechicles_detail_id_seq OWNER TO forgeeks;

--
-- Name: vechicles_detail_id_seq1; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

ALTER TABLE public.vechicles ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.vechicles_detail_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: vehicles_id_seq; Type: SEQUENCE; Schema: public; Owner: forgeeks
--

CREATE SEQUENCE public.vehicles_id_seq
    START WITH 77
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.vehicles_id_seq OWNER TO forgeeks;

--
-- Data for Name: films; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.films (id, description, producer, title, episode_id, director, opening_crawl, characters, planets, starships, vehicles, species) FROM stdin;
1	A Star Wars Film	Gary Kurtz, Rick McCallum	A New Hope	4	George Lucas	It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.  During the battle, Rebel spies managed to steal secret plans to the Empire`s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.  Pursued by the Empire`s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....	1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,18,19,81	1,2,3	2,3,5,9,10,11,12,13	4,6,7,8	1,2,3,4,5
2	A Star Wars Film	Gary Kurtz, Rick McCallum	The Empire Strikes Back	5	Irvin Kershner	It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....	1,2,3,4,5,10,13,14,18,20,21,22,23,24,25,26	4,5,6,27	3,10,11,12,15,17,21,22,23	8,14,16,18,19,20	1,2,3,6,7
3	A Star Wars Film	Howard G. Kazanjian, George Lucas, Rick McCallum	Return of the Jedi	6	Richard Marquand	Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.  Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.  When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...	1,2,3,4,5,10,13,14,16,18,20,21,22,25,27,28,29,30,31,45	1,5,7,8,9	2,3,10,11,12,15,17,22,23,27,28,29	8,16,18,19,24,25,26,30	1,2,3,5,6,8,9,10,15
4	A Star Wars Film	Rick McCallum	The Phantom Menace	1	George Lucas	Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.  Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.  While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....	2,3,10,11,16,20,21,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59	1,8,9	31,32,39,40,41	33,34,35,36,37,38,42	1,2,6,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
5	A Star Wars Film	Rick McCallum	Attack of the Clones	2	George Lucas	There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.  This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain  peace and order in the galaxy.  Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....	2,3,6,7,10,11,20,21,22,33,35,36,40,43,46,51,52,53,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,82	1,8,9,10,11	21,32,39,43,47,48,49,52,58	4,44,45,46,50,51,53,54,55,56,57	1,2,6,12,13,15,28,29,30,31,32,33,34,35
6	A Star Wars Film	Rick McCallum	Revenge of the Sith	3	George Lucas	War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.  In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.  As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....	1,2,3,4,5,6,7,10,11,12,13,20,21,33,35,46,51,52,53,54,55,56,58,63,64,67,68,75,78,79,80,81,82,83	1,2,5,8,9,12,13,14,15,16,17,18,19	2,32,48,59,61,63,64,65,66,68,74,75	33,50,53,56,60,62,67,69,70,71,72,73,76	1,2,3,6,15,19,20,23,24,25,26,27,28,29,30,33,34,35,36,37
\.


--
-- Data for Name: people; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.people (id, description, height, mass, hair_color, skin_color, eye_color, birth_year, gender, name, homeworld, url) FROM stdin;
1	A person within the Star Wars universe	172	77	blond	fair	blue	19BBY	male	Luke Skywalker	1	1
2	A person within the Star Wars universe	167	75	n/a	gold	yellow	112BBY	n/a	C-3PO	1	2
3	A person within the Star Wars universe	96	32	n/a	white, blue	red	33BBY	n/a	R2-D2	8	3
4	A person within the Star Wars universe	202	136	none	white	yellow	41.9BBY	male	Darth Vader	1	4
5	A person within the Star Wars universe	150	49	brown	light	brown	19BBY	female	Leia Organa	2	5
6	A person within the Star Wars universe	178	120	brown, grey	light	blue	52BBY	male	Owen Lars	1	6
7	A person within the Star Wars universe	165	75	brown	light	blue	47BBY	female	Beru Whitesun lars	1	7
8	A person within the Star Wars universe	97	32	n/a	white, red	red	unknown	n/a	R5-D4	1	8
9	A person within the Star Wars universe	183	84	black	light	brown	24BBY	male	Biggs Darklighter	1	9
10	A person within the Star Wars universe	182	77	auburn, white	fair	blue-gray	57BBY	male	Obi-Wan Kenobi	20	10
11	A person within the Star Wars universe	188	84	blond	fair	blue	41.9BBY	male	Anakin Skywalker	1	11
12	A person within the Star Wars universe	180	unknown	auburn, grey	fair	blue	64BBY	male	Wilhuff Tarkin	21	12
13	A person within the Star Wars universe	228	112	brown	unknown	blue	200BBY	male	Chewbacca	14	13
14	A person within the Star Wars universe	180	80	brown	fair	brown	29BBY	male	Han Solo	22	14
15	A person within the Star Wars universe	173	74	n/a	green	black	44BBY	male	Greedo	23	15
16	A person within the Star Wars universe	175	1,358	n/a	green-tan, brown	orange	600BBY	hermaphrodite	Jabba Desilijic Tiure	24	16
18	A person within the Star Wars universe	170	77	brown	fair	hazel	21BBY	male	Wedge Antilles	22	18
19	A person within the Star Wars universe	180	110	brown	fair	blue	unknown	male	Jek Tono Porkins	26	19
20	A person within the Star Wars universe	66	17	white	green	brown	896BBY	male	Yoda	28	20
21	A person within the Star Wars universe	170	75	grey	pale	yellow	82BBY	male	Palpatine	8	21
22	A person within the Star Wars universe	183	78.2	black	fair	brown	31.5BBY	male	Boba Fett	10	22
23	A person within the Star Wars universe	200	140	none	metal	red	15BBY	none	IG-88	28	23
24	A person within the Star Wars universe	190	113	none	green	red	53BBY	male	Bossk	29	24
25	A person within the Star Wars universe	177	79	black	dark	brown	31BBY	male	Lando Calrissian	30	25
26	A person within the Star Wars universe	175	79	none	light	blue	37BBY	male	Lobot	6	26
27	A person within the Star Wars universe	180	83	none	brown mottle	orange	41BBY	male	Ackbar	31	27
28	A person within the Star Wars universe	150	unknown	auburn	fair	blue	48BBY	female	Mon Mothma	32	28
29	A person within the Star Wars universe	unknown	unknown	brown	fair	brown	unknown	male	Arvel Crynyd	28	29
30	A person within the Star Wars universe	88	20	brown	brown	brown	8BBY	male	Wicket Systri Warrick	7	30
31	A person within the Star Wars universe	160	68	none	grey	black	unknown	male	Nien Nunb	33	31
32	A person within the Star Wars universe	193	89	brown	fair	blue	92BBY	male	Qui-Gon Jinn	28	32
33	A person within the Star Wars universe	191	90	none	mottled green	red	unknown	male	Nute Gunray	18	33
34	A person within the Star Wars universe	170	unknown	blond	fair	blue	91BBY	male	Finis Valorum	9	34
35	A person within the Star Wars universe	185	45	brown	light	brown	46BBY	female	Padmé Amidala	8	35
36	A person within the Star Wars universe	196	66	none	orange	orange	52BBY	male	Jar Jar Binks	8	36
37	A person within the Star Wars universe	224	82	none	grey	orange	unknown	male	Roos Tarpals	8	37
38	A person within the Star Wars universe	206	unknown	none	green	orange	unknown	male	Rugor Nass	8	38
39	A person within the Star Wars universe	183	unknown	brown	fair	blue	unknown	male	Ric Olié	8	39
40	A person within the Star Wars universe	137	unknown	black	blue, grey	yellow	unknown	male	Watto	34	40
41	A person within the Star Wars universe	112	40	none	grey, red	orange	unknown	male	Sebulba	35	41
42	A person within the Star Wars universe	183	unknown	black	dark	brown	62BBY	male	Quarsh Panaka	8	42
43	A person within the Star Wars universe	163	unknown	black	fair	brown	72BBY	female	Shmi Skywalker	1	43
44	A person within the Star Wars universe	175	80	none	red	yellow	54BBY	male	Darth Maul	36	44
45	A person within the Star Wars universe	180	unknown	none	pale	pink	unknown	male	Bib Fortuna	37	45
46	A person within the Star Wars universe	178	55	none	blue	hazel	48BBY	female	Ayla Secura	37	46
47	A person within the Star Wars universe	79	15	none	grey, blue	unknown	unknown	male	Ratts Tyerel	38	47
48	A person within the Star Wars universe	94	45	none	blue, grey	yellow	unknown	male	Dud Bolt	39	48
49	A person within the Star Wars universe	122	unknown	none	white, blue	black	unknown	male	Gasgano	40	49
51	A person within the Star Wars universe	188	84	none	dark	brown	72BBY	male	Mace Windu	42	51
52	A person within the Star Wars universe	198	82	white	pale	yellow	92BBY	male	Ki-Adi-Mundi	43	52
53	A person within the Star Wars universe	196	87	none	green	black	unknown	male	Kit Fisto	44	53
54	A person within the Star Wars universe	171	unknown	black	brown	brown	unknown	male	Eeth Koth	45	54
55	A person within the Star Wars universe	184	50	none	dark	blue	unknown	female	Adi Gallia	9	55
56	A person within the Star Wars universe	188	unknown	none	pale	orange	unknown	male	Saesee Tiin	47	56
57	A person within the Star Wars universe	264	unknown	none	white	yellow	unknown	male	Yarael Poof	48	57
58	A person within the Star Wars universe	188	80	none	orange	black	22BBY	male	Plo Koon	49	58
59	A person within the Star Wars universe	196	unknown	none	blue	blue	unknown	male	Mas Amedda	50	59
60	A person within the Star Wars universe	185	85	black	dark	brown	unknown	male	Gregar Typho	8	60
61	A person within the Star Wars universe	157	unknown	brown	light	brown	unknown	female	Cordé	8	61
62	A person within the Star Wars universe	183	unknown	brown	fair	blue	82BBY	male	Cliegg Lars	1	62
63	A person within the Star Wars universe	183	80	none	green	yellow	unknown	male	Poggle the Lesser	11	63
64	A person within the Star Wars universe	170	56.2	black	yellow	blue	58BBY	female	Luminara Unduli	51	64
65	A person within the Star Wars universe	166	50	black	yellow	blue	40BBY	female	Barriss Offee	51	65
66	A person within the Star Wars universe	165	unknown	brown	light	brown	unknown	female	Dormé	8	66
67	A person within the Star Wars universe	193	80	white	fair	brown	102BBY	male	Dooku	52	67
68	A person within the Star Wars universe	191	unknown	black	tan	brown	67BBY	male	Bail Prestor Organa	2	68
69	A person within the Star Wars universe	183	79	black	tan	brown	66BBY	male	Jango Fett	53	69
70	A person within the Star Wars universe	168	55	blonde	fair, green, yellow	yellow	unknown	female	Zam Wesell	54	70
71	A person within the Star Wars universe	198	102	none	brown	yellow	unknown	male	Dexter Jettster	55	71
72	A person within the Star Wars universe	229	88	none	grey	black	unknown	male	Lama Su	10	72
73	A person within the Star Wars universe	213	unknown	none	grey	black	unknown	female	Taun We	10	73
74	A person within the Star Wars universe	167	unknown	white	fair	blue	unknown	female	Jocasta Nu	9	74
75	A person within the Star Wars universe	96	unknown	none	silver, red	red, blue	unknown	female	R4-P17	28	75
76	A person within the Star Wars universe	193	48	none	green, grey	unknown	unknown	male	Wat Tambor	56	76
77	A person within the Star Wars universe	191	unknown	none	grey	gold	unknown	male	San Hill	57	77
78	A person within the Star Wars universe	178	57	none	red, blue, white	black	unknown	female	Shaak Ti	58	78
79	A person within the Star Wars universe	216	159	none	brown, white	green, yellow	unknown	male	Grievous	59	79
80	A person within the Star Wars universe	234	136	brown	brown	blue	unknown	male	Tarfful	14	80
81	A person within the Star Wars universe	188	79	brown	light	brown	unknown	male	Raymus Antilles	2	81
82	A person within the Star Wars universe	178	48	none	pale	white	unknown	female	Sly Moore	60	82
\.


--
-- Data for Name: planets; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.planets (id, description, diameter, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, name, url) FROM stdin;
1	A planet.	10465	23	304	1 standard	200000	arid	desert	1	Tatooine	1
2	A planet.	12500	24	364	1 standard	2000000000	temperate	grasslands, mountains	40	Alderaan	2
3	A planet.	10200	24	4818	1 standard	1000	temperate, tropical	jungle, rainforests	8	Yavin IV	3
4	A planet.	7200	23	549	1.1 standard	unknown	frozen	tundra, ice caves, mountain ranges	100	Hoth	4
5	A planet.	8900	23	341	N/A	unknown	murky	swamp, jungles	8	Dagobah	5
6	A planet.	118000	12	5110	1.5 (surface), 1 standard (Cloud City)	6000000	temperate	gas giant	0	Bespin	6
7	A planet.	4900	18	402	0.85 standard	30000000	temperate	forests, mountains, lakes	8	Endor	7
8	A planet.	12120	26	312	1 standard	4500000000	temperate	grassy hills, swamps, forests, mountains	12	Naboo	8
9	A planet.	12240	24	368	1 standard	1000000000000	temperate	cityscape, mountains	unknown	Coruscant	9
10	A planet.	19720	27	463	1 standard	1000000000	temperate	ocean	100	Kamino	10
11	A planet.	11370	30	256	0.9 standard	100000000000	temperate, arid	rock, desert, mountain, barren	5	Geonosis	11
12	A planet.	12900	27	351	1 standard	95000000	temperate, arid, windy	scrublands, savanna, canyons, sinkholes	0.9	Utapau	12
13	A planet.	4200	36	412	1 standard	20000	hot	volcanoes, lava rivers, mountains, caves	0	Mustafar	13
14	A planet.	12765	26	381	1 standard	45000000	tropical	jungle, forests, lakes, rivers	60	Kashyyyk	14
15	A planet.	0	24	590	0.56 standard	1000000	artificial temperate 	airless asteroid	0	Polis Massa	15
16	A planet.	10088	12	167	1 standard	19000000	frigid	glaciers, mountains, ice canyons	unknown	Mygeeto	16
17	A planet.	9100	34	231	0.75 standard	8500000	hot, humid	fungus forests	unknown	Felucia	17
18	A planet.	0	25	278	1 standard	10000000	temperate, moist	mountains, fields, forests, rock arches	unknown	Cato Neimoidia	18
19	A planet.	14920	26	392	unknown	1400000000	hot	caves, desert, mountains, volcanoes	unknown	Saleucami	19
20	A planet.	0	unknown	unknown	1 standard	unknown	temperate	grass	unknown	Stewjon	20
21	A planet.	13490	24	360	1 standard	22000000000	polluted	cityscape	unknown	Eriadu	21
22	A planet.	11000	25	329	1 standard	3000000000	temperate	plains, urban, hills, forests	70	Corellia	22
23	A planet.	7549	29	305	1 standard	1300000000	hot	jungles, oceans, urban, swamps	60	Rodia	23
24	A planet.	12150	87	413	1 standard	7000000000	temperate	urban, oceans, swamps, bogs	unknown	Nal Hutta	24
25	A planet.	9830	25	378	1 standard	1000	temperate	oceans, savannas, mountains, grasslands	unknown	Dantooine	25
26	A planet.	6400	26	680	unknown	62000000	temperate	rocky islands, oceans	98	Bestine IV	26
27	A planet.	14050	26	334	1 standard	4000000000	temperate	plains, seas, mesas	10	Ord Mantell	27
28	A planet.	0	0	0	unknown	unknown	unknown	unknown	unknown	unknown	28
29	A planet.	0	25	371	0.62 standard	42000000	arid	mountains, seas, grasslands, deserts	unknown	Trandosha	29
30	A planet.	0	20	326	1 standard	300000000	arid	deserts, mountains	unknown	Socorro	30
31	A planet.	11030	21	398	1	27000000000	temperate	oceans, reefs, islands	100	Mon Cala	31
32	A planet.	13500	20	368	1	1200000000	temperate	plains, forests	40	Chandrila	32
33	A planet.	12780	20	263	1	18500000000	superheated	mountains, volcanoes, rocky deserts	5	Sullust	33
34	A planet.	7900	21	184	1	11000000	temperate	swamps, lakes	unknown	Toydaria	34
35	A planet.	18880	26	201	1.56	2000000000	arid, temperate, tropical	swamps, deserts, jungles, mountains	unknown	Malastare	35
36	A planet.	10480	24	491	0.9	5200	temperate	forests, deserts, savannas	unknown	Dathomir	36
37	A planet.	10600	30	305	1	1500000000	temperate, arid, subartic	mountains, valleys, deserts, tundra	5	Ryloth	37
38	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	unknown	unknown	Aleen Minor	38
39	A planet.	14900	22	391	1	421000000	temperate, artic	urban, barren	unknown	Vulpter	39
40	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	desert, tundra, rainforests, mountains	unknown	Troiken	40
41	A planet.	12190	48	1770	unknown	0	unknown	barren, ash	unknown	Tund	41
42	A planet.	10120	25	383	0.98	705300	temperate	toxic cloudsea, plateaus, volcanoes	unknown	Haruun Kal	42
43	A planet.	unknown	27	386	1	450000000	temperate	verdant	20	Cerea	43
44	A planet.	15600	33	206	1	500000000	tropical, temperate	lakes, islands, swamps, seas	80	Glee Anselm	44
45	A planet.	unknown	29	413	unknown	unknown	unknown	rocky canyons, acid pools	unknown	Iridonia	45
46	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	unknown	unknown	Tholoth	46
47	A planet.	unknown	22	481	1	unknown	arid, rocky, windy	rocky	unknown	Iktotch	47
48	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	unknown	unknown	Quermia	48
49	A planet.	13400	22	409	1	unknown	temperate	unknown	unknown	Dorin	49
50	A planet.	unknown	27	318	1	3500000000	temperate	oceans, rainforests, plateaus	unknown	Champala	50
51	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	deserts	unknown	Mirial	51
52	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	rainforests, rivers, mountains	unknown	Serenno	52
53	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	jungles, forests, deserts	unknown	Concord Dawn	53
54	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	unknown	unknown	Zolan	54
55	A planet.	unknown	unknown	unknown	unknown	500000000	frigid	oceans, glaciers	100	Ojom	55
56	A planet.	unknown	27	384	1	500000000000	temperate	urban, vines	unknown	Skako	56
57	A planet.	13800	28	412	1	5000000000	temperate	plains, forests, hills, mountains	25	Muunilinst	57
58	A planet.	unknown	unknown	unknown	1	unknown	temperate	cities, savannahs, seas, plains	unknown	Shili	58
59	A planet.	13850	23	378	1	4000000000	arid, temperate, tropical	rainforests, cliffs, canyons, seas	unknown	Kalee	59
60	A planet.	unknown	unknown	unknown	unknown	unknown	unknown	unknown	unknown	Umbara	60
\.


--
-- Data for Name: sections; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.sections (id, section) FROM stdin;
1	films
2	people
3	planets
4	species
5	starships
6	vehicles
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.species (id, description, classification, designation, average_height, average_lifespan, hair_colors, skin_colors, eye_colors, language, name, homeworld, people, url) FROM stdin;
1	A sepcies within the Star Wars universe	mammal	sentient	180	120	blonde, brown, black, red	caucasian, black, asian, hispanic	brown, blue, green, hazel, grey, amber	Galactic Basic	Human	1	66,67,68,74	1
2	A sepcies within the Star Wars universe	artificial	sentient	n/a	indefinite	n/a	n/a	n/a	n/a	Droid	2	2,3,8,23	2
3	A sepcies within the Star Wars universe	mammal	sentient	210	400	black, brown	gray	blue, green, yellow, brown, golden, red	Shyriiwook	Wookie	3	13,80	3
4	A sepcies within the Star Wars universe	sentient	reptilian	170	unknown	n/a	green, blue	black	Galatic Basic	Rodian	4	15	4
5	A sepcies within the Star Wars universe	gastropod	sentient	300	1000	n/a	green, brown, tan	yellow, red	Huttese	Hutt	5	16	5
6	A sepcies within the Star Wars universe	mammal	sentient	66	900	brown, white	green, yellow	brown, green, yellow	Galactic basic	Yoda`s species	6	20	6
7	A sepcies within the Star Wars universe	reptile	sentient	200	unknown	none	brown, green	yellow, orange	Dosh	Trandoshan	7	24	7
8	A sepcies within the Star Wars universe	amphibian	sentient	160	unknown	none	red, blue, brown, magenta	yellow	Mon Calamarian	Mon Calamari	8	27	8
9	A sepcies within the Star Wars universe	mammal	sentient	100	unknown	white, brown, black	brown	orange, brown	Ewokese	Ewok	9	30	9
10	A sepcies within the Star Wars universe	mammal	sentient	180	unknown	none	pale	black	Sullutese	Sullustan	10	31	10
11	A sepcies within the Star Wars universe	unknown	sentient	180	unknown	none	grey, green	red, pink	Neimoidia	Neimodian	11	33	11
12	A sepcies within the Star Wars universe	amphibian	sentient	190	unknown	none	brown, green	orange	Gungan basic	Gungan	12	36,37,38	12
13	A sepcies within the Star Wars universe	mammal	sentient	120	91	none	blue, green, grey	yellow	Toydarian	Toydarian	13	40	13
14	A sepcies within the Star Wars universe	mammal	sentient	100	unknown	none	brown, purple, grey, red	yellow, blue	Dugese	Dug	14	41	14
15	A sepcies within the Star Wars universe	mammals	sentient	200	unknown	none	orange, yellow, blue, green, pink, purple, tan	blue, brown, orange, pink	Twi`leki	Twi`lek	15	45,46	15
16	A sepcies within the Star Wars universe	reptile	sentient	80	79	none	blue, gray	unknown	Aleena	Aleena	16	47	16
17	A sepcies within the Star Wars universe	unknown	sentient	100	unknown	none	grey	yellow	vulpterish	Vulptereen	17	48	17
18	A sepcies within the Star Wars universe	unknown	sentient	125	unknown	none	grey, yellow, purple	black	Xextese	Xexto	18	49	18
19	A sepcies within the Star Wars universe	unknown	sentient	200	unknown	none	grey, green, yellow	orange	Tundan	Toong	19	50	19
20	A sepcies within the Star Wars universe	mammal	sentient	200	unknown	red, blond, black, white	pale pink	hazel	Cerean	Cerean	20	52	20
21	A sepcies within the Star Wars universe	amphibian	sentient	180	70	none	green, blue, brown, red	black	Nautila	Nautolan	21	53	21
22	A sepcies within the Star Wars universe	mammal	sentient	180	unknown	black	pale, brown, red, orange, yellow	brown, orange	Zabraki	Zabrak	22	44,54	22
23	A sepcies within the Star Wars universe	mammal	sentient	unknown	unknown	unknown	dark	blue, indigo	unknown	Tholothian	23	55	23
24	A sepcies within the Star Wars universe	unknown	sentient	180	unknown	none	pink	orange	Iktotchese	Iktotchi	24	56	24
25	A sepcies within the Star Wars universe	mammal	sentient	240	86	none	white	yellow	Quermian	Quermian	25	57	25
26	A sepcies within the Star Wars universe	unknown	sentient	180	70	none	peach, orange, red	black, silver	Kel Dor	Kel Dor	26	58	26
27	A sepcies within the Star Wars universe	amphibian	sentient	190	unknown	none	blue	blue	Chagria	Chagrian	27	59	27
28	A sepcies within the Star Wars universe	insectoid	sentient	178	unknown	none	green, brown	green, hazel	Geonosian	Geonosian	28	63	28
29	A sepcies within the Star Wars universe	mammal	sentient	180	unknown	black, brown	yellow, green	blue, green, red, yellow, brown, orange	Mirialan	Mirialan	29	64,65	29
30	A sepcies within the Star Wars universe	reptilian	sentient	180	70	none	green, yellow	yellow	Clawdite	Clawdite	30	70	30
31	A sepcies within the Star Wars universe	amphibian	sentient	178	75	none	brown	yellow	besalisk	Besalisk	31	71	31
32	A sepcies within the Star Wars universe	amphibian	sentient	220	80	none	grey, blue	black	Kaminoan	Kaminoan	32	72,73	32
33	A sepcies within the Star Wars universe	mammal	sentient	unknown	unknown	none	grey, green	unknown	Skakoan	Skakoan	33	76	33
34	A sepcies within the Star Wars universe	mammal	sentient	190	100	none	grey, white	black	Muun	Muun	34	77	34
35	A sepcies within the Star Wars universe	mammal	sentient	180	94	none	red, white, orange, yellow, green, blue	red, orange, yellow, green, blue, black	Togruti	Togruta	35	78	35
36	A sepcies within the Star Wars universe	reptile	sentient	170	80	none	brown, orange, tan	yellow	Kaleesh	Kaleesh	36	79	36
37	A sepcies within the Star Wars universe	mammal	sentient	190	700	none	grey	black	Utapese	Pau`an	37	83	37
\.


--
-- Data for Name: starships; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.starships (id, description, model, starship_class, manufacturer, cost_in_credits, length, crew, passengers, max_atmosphering_speed, hyperdrive_rating, mglt, cargo_capacity, consumables, pilots, name, url) FROM stdin;
2	A Starship	CR90 corvette	corvette	Corellian Engineering Corporation	3500000	150	30-165	600	950	2.0	60	3000000	1 year		CR90 corvette	2
3	A Starship	Imperial I-class Star Destroyer	Star Destroyer	Kuat Drive Yards	150000000	1,600	47,060	n/a	975	2.0	60	36000000	2 years		Star Destroyer	3
5	A Starship	Sentinel-class landing craft	landing craft	Sienar Fleet Systems, Cyngus Spaceworks	240000	38	5	75	1000	1.0	70	180000	1 month		Sentinel-class landing craft	5
9	A Starship	DS-1 Orbital Battle Station	Deep Space Mobile Battlestation	Imperial Department of Military Research, Sienar Fleet Systems	1000000000000	120000	342,953	843,342	n/a	4.0	10	1000000000000	3 years		Death Star	9
10	A Starship	YT-1300 light freighter	Light freighter	Corellian Engineering Corporation	100000	34.37	4	6	1050	0.5	75	100000	2 months	13,14,25,31	Millennium Falcon	10
11	A Starship	BTL Y-wing	assault starfighter	Koensayr Manufacturing	134999	14	2	0	1000km	1.0	80	110	1 week		Y-wing	11
12	A Starship	T-65 X-wing	Starfighter	Incom Corporation	149999	12.5	1	0	1050	1.0	100	110	1 week	1,9,18,19	X-wing	12
13	A Starship	Twin Ion Engine Advanced x1	Starfighter	Sienar Fleet Systems	unknown	9.2	1	0	1200	1.0	105	150	5 days	4	TIE Advanced x1	13
15	A Starship	Executor-class star dreadnought	Star dreadnought	Kuat Drive Yards, Fondor Shipyards	1143350000	19000	279,144	38000	n/a	2.0	40	250000000	6 years		Executor	15
17	A Starship	GR-75 medium transport	Medium transport	Gallofree Yards, Inc.	unknown	90	6	90	650	4.0	20	19000000	6 months		Rebel transport	17
21	A Starship	Firespray-31-class patrol and attack	Patrol craft	Kuat Systems Engineering	unknown	21.5	1	6	1000	3.0	70	70000	1 month	22	Slave 1	21
22	A Starship	Lambda-class T-4a shuttle	Armed government transport	Sienar Fleet Systems	240000	20	6	20	850	1.0	50	80000	2 months	1,13,14	Imperial shuttle	22
23	A Starship	EF76 Nebulon-B escort frigate	Escort ship	Kuat Drive Yards	8500000	300	854	75	800	2.0	40	6000000	2 years		EF76 Nebulon-B escort frigate	23
27	A Starship	MC80 Liberty type Star Cruiser	Star Cruiser	Mon Calamari shipyards	104000000	1200	5400	1200	n/a	1.0	60	unknown	2 years		Calamari Cruiser	27
28	A Starship	RZ-1 A-wing Interceptor	Starfighter	Alliance Underground Engineering, Incom Corporation	175000	9.6	1	0	1300	1.0	120	40	1 week	29	A-wing	28
29	A Starship	A/SF-01 B-wing starfighter	Assault Starfighter	Slayn & Korpil	220000	16.9	1	0	950	2.0	91	45	1 week		B-wing	29
31	A Starship	Consular-class cruiser	Space cruiser	Corellian Engineering Corporation	unknown	115	9	16	900	2.0	unknown	unknown	unknown		Republic Cruiser	31
32	A Starship	Lucrehulk-class Droid Control Ship	Droid control ship	Hoersch-Kessel Drive, Inc.	unknown	3170	175	139000	n/a	2.0	unknown	4000000000	500 days		Droid control ship	32
39	A Starship	N-1 starfighter	Starfighter	Theed Palace Space Vessel Engineering Corps	200000	11	1	0	1100	1.0	unknown	65	7 days	11,35,60	Naboo fighter	39
40	A Starship	J-type 327 Nubian royal starship	yacht	Theed Palace Space Vessel Engineering Corps, Nubia Star Drives	unknown	76	8	unknown	920	1.8	unknown	unknown	unknown	39	Naboo Royal Starship	40
41	A Starship	Star Courier	Space Transport	Republic Sienar Systems	55000000	26.5	1	6	1180	1.5	unknown	2500000	30 days	44	Scimitar	41
43	A Starship	J-type diplomatic barge	Diplomatic barge	Theed Palace Space Vessel Engineering Corps, Nubia Star Drives	2000000	39	5	10	2000	0.7	unknown	unknown	1 year		J-type diplomatic barge	43
47	A Starship	Botajef AA-9 Freighter-Liner	freighter	Botajef Shipyards	unknown	390	unknown	30000	unknown	unknown	unknown	unknown	unknown		AA-9 Coruscant freighter	47
48	A Starship	Delta-7 Aethersprite-class interceptor	Starfighter	Kuat Systems Engineering	180000	8	1	0	1150	1.0	unknown	60	7 days	10,58	Jedi starfighter	48
49	A Starship	H-type Nubian yacht	yacht	Theed Palace Space Vessel Engineering Corps	unknown	47.9	4	unknown	8000	0.9	unknown	unknown	unknown	35	H-type Nubian yacht	49
52	A Starship	Acclamator I-class assault ship	assault ship	Rothana Heavy Engineering	unknown	752	700	16000	unknown	0.6	unknown	11250000	2 years		Republic Assault ship	52
58	A Starship	Punworcca 116-class interstellar sloop	yacht	Huppla Pasa Tisc Shipwrights Collective	35700	15.2	3	11	1600	1.5	unknown	240	7 days		Solar Sailer	58
59	A Starship	Providence-class carrier/destroyer	capital ship	Rendili StarDrive, Free Dac Volunteers Engineering corps.	125000000	1088	600	48247	1050	1.5	unknown	50000000	4 years	10,11	Trade Federation cruiser	59
61	A Starship	Theta-class T-2c shuttle	transport	Cygnus Spaceworks	1000000	18.5	5	16	2000	1.0	unknown	50000	56 days		Theta-class T-2c shuttle	61
63	A Starship	Senator-class Star Destroyer	star destroyer	Kuat Drive Yards, Allanteen Six shipyards	59000000	1137	7400	2000	975	1.0	unknown	20000000	2 years		Republic attack cruiser	63
64	A Starship	J-type star skiff	yacht	Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated	unknown	29.2	3	3	1050	0.5	unknown	unknown	unknown	10,35	Naboo star skiff	64
65	A Starship	Eta-2 Actis-class light interceptor	starfighter	Kuat Systems Engineering	320000	5.47	1	0	1500	1.0	unknown	60	2 days	10,11	Jedi Interceptor	65
66	A Starship	Aggressive Reconnaissance-170 starfighte	starfighter	Incom Corporation, Subpro Corporation	155000	14.5	3	0	1000	1.0	100	110	5 days		arc-170	66
68	A Starship	Munificent-class star frigate	cruiser	Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries	57000000	825	200	unknown	unknown	1.0	unknown	40000000	2 years		Banking clan frigte	68
74	A Starship	Belbullab-22 starfighter	starfighter	Feethan Ottraw Scalable Assemblies	168000	6.71	1	0	1100	6	unknown	140	7 days	10,79	Belbullab-22 starfighter	74
75	A Starship	Alpha-3 Nimbus-class V-wing starfighter	starfighter	Kuat Systems Engineering	102500	7.9	1	0	1050	1.0	unknown	60	15 hours		V-wing	75
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.users (id, name, username, password, firstname, lastname, email, is_active, rol, public_id) FROM stdin;
3	probando	probando	260000$VTUAFI61CPKMhHni$e23fd78ed70ecd56151bfc6bf850180d5a80d385e97ee07f6693759b40740e96	probando	probando	probando@probando	\N	1	ae70d37e-c959-4e82-bca1-4515d8862fe6
\.


--
-- Data for Name: vechicles; Type: TABLE DATA; Schema: public; Owner: forgeeks
--

COPY public.vechicles (id, description, model, vehicle_class, manufacturer, cost_in_credits, length, crew, passengers, max_atmosphering_speed, cargo_capacity, consumables, name, films, pilots, url) FROM stdin;
4	A vehicle	Digger Crawler	wheeled	Corellia Mining Corporation	150000	36.8 	46	30	30	50000	2 months	Sand Crawler			4
6	A vehicle	T-16 skyhopper	repulsorcraft	Incom Corporation	14500	10.4 	1	1	1200	50	0	T-16 skyhopper			6
7	A vehicle	X-34 landspeeder	repulsorcraft	SoroSuub Corporation	10550	3.4 	1	1	250	5	unknown	X-34 landspeeder			7
8	A vehicle	Twin Ion Engine/Ln Starfighter	starfighter	Sienar Fleet Systems	unknown	6.4	1	0	1200	65	2 days	TIE/LN starfighter			8
14	A vehicle	t-47 airspeeder	airspeeder	Incom corporation	unknown	4.5	2	0	650	10	none	Snowspeeder		1,18	14
16	A vehicle	TIE/sa bomber	space/planetary bomber	Sienar Fleet Systems	unknown	7.8	1	0	850	none	2 days	TIE bomber			16
18	A vehicle	All Terrain Armored Transport	assault walker	Kuat Drive Yards, Imperial Department of Military Research	unknown	20	5	40	60	1000	unknown	AT-AT			18
19	A vehicle	All Terrain Scout Transport	walker	Kuat Drive Yards, Imperial Department of Military Research	unknown	2	2	0	90	200	none	AT-ST		13	19
20	A vehicle	Storm IV Twin-Pod	repulsorcraft	Bespin Motors	75000	7	2	0	1500	10	1 day	Storm IV Twin-Pod cloud car			20
24	A vehicle	Modified Luxury Sail Barge	sail barge	Ubrikkian Industries Custom Vehicle Division	285000	30	26	500	100	2000000	Live food tanks	Sail barge			24
25	A vehicle	Bantha-II	repulsorcraft cargo skiff	Ubrikkian Industries	8000	9.5	5	16	250	135000	1 day	Bantha-II cargo skiff			25
26	A vehicle	Twin Ion Engine Interceptor	starfighter	Sienar Fleet Systems	unknown	9.6	1	0	1250	75	2 days	TIE/IN interceptor			26
30	A vehicle	74-Z speeder bike	speeder	Aratech Repulsor Company	8000	3	1	1	360	4	1 day	Imperial Speeder Bike		1,5	30
33	A vehicle	Vulture-class droid starfighter	starfighter	Haor Chall Engineering, Baktoid Armor Workshop	unknown	3.5	0	0	1200	0	none	Vulture Droid			33
34	A vehicle	Multi-Troop Transport	repulsorcraft	Baktoid Armor Workshop	138000	31	4	112	35	12000	unknown	Multi-Troop Transport			34
35	A vehicle	Armoured Assault Tank	repulsorcraft	Baktoid Armor Workshop	unknown	9.75	4	6	55	unknown	unknown	Armored Assault Tank			35
36	A vehicle	Single Trooper Aerial Platform	repulsorcraft	Baktoid Armor Workshop	2500	2	1	0	400	none	none	Single Trooper Aerial Platform			36
37	A vehicle	C-9979 landing craft	landing craft	Haor Chall Engineering	200000	210	140	284	587	1800000	1 day	C-9979 landing craft			37
38	A vehicle	Tribubble bongo	submarine	Otoh Gunga Bongameken Cooperative	unknown	15	1	2	85	1600	unknown	Tribubble bongo		10,32	38
42	A vehicle	FC-20 speeder bike	speeder	Razalon	4000	1.5	1	0	180	2	unknown	Sith speeder		44	42
44	A vehicle	Zephyr-G swoop bike	repulsorcraft	Mobquet Swoops and Speeders	5750	3.68	1	1	350	200	none	Zephyr-G swoop bike		11	44
45	A vehicle	Koro-2 Exodrive airspeeder	airspeeder	Desler Gizh Outworld Mobility Corporation	unknown	6.6	1	1	800	80	unknown	Koro-2 Exodrive airspeeder		70	45
46	A vehicle	XJ-6 airspeeder	airspeeder	Narglatch AirTech prefabricated kit	unknown	6.23	1	1	720	unknown	unknown	XJ-6 airspeeder		11	46
50	A vehicle	Low Altitude Assault Transport/infrantry	gunship	Rothana Heavy Engineering	unknown	17.4	6	30	620	170	unknown	LAAT/i			50
51	A vehicle	Low Altitude Assault Transport/carrier	gunship	Rothana Heavy Engineering	unknown	28.82	1	0	620	40000	unknown	LAAT/c			51
53	A vehicle	All Terrain Tactical Enforcer	walker	Rothana Heavy Engineering, Kuat Drive Yards	unknown	13.2	6	36	60	10000	21 days	AT-TE			53
54	A vehicle	Self-Propelled Heavy Artillery	walker	Rothana Heavy Engineering	unknown	140	25	30	35	500	7 days	SPHA			54
55	A vehicle	Flitknot speeder	speeder	Huppla Pasa Tisc Shipwrights Collective	8000	2	1	0	634	unknown	unknown	Flitknot speeder		67	55
56	A vehicle	Sheathipede-class transport shuttle	transport	Haor Chall Engineering	unknown	20	2	6	880	1000	7 days	Neimoidian shuttle			56
57	A vehicle	Nantex-class territorial defense	starfighter	Huppla Pasa Tisc Shipwrights Collective	unknown	9.8	1	0	20000	unknown	unknown	Geonosian starfighter			57
60	A vehicle	Tsmeu-6 personal wheel bike	wheeled walker	Z-Gomot Ternbuell Guppat Corporation	15000	3.5	1	1	330	10	none	Tsmeu-6 personal wheel bike		79	60
62	A vehicle	Fire suppression speeder	fire suppression ship	unknown	unknown	unknown	2	unknown	unknown	unknown	unknown	Emergency Firespeeder			62
67	A vehicle	tri-fighter	droid starfighter	Colla Designs, Phlac-Arphocc Automata Industries	20000	5.4	1	0	1180	0	none	Droid tri-fighter			67
69	A vehicle	Oevvaor jet catamaran	airspeeder	Appazanna Engineering Works	12125	15.1	2	2	420	50	3 days	Oevvaor jet catamaran			69
70	A vehicle	Raddaugh Gnasp fluttercraft	air speeder	Appazanna Engineering Works	14750	7	2	0	310	20	none	Raddaugh Gnasp fluttercraft			70
71	A vehicle	HAVw A6 Juggernaut	wheeled walker	Kuat Drive Yards	350000	49.4	20	300	160	30000	20 days	Clone turbo tank			71
72	A vehicle	NR-N99 Persuader-class droid enforcer	droid tank	Techno Union	49000	10.96	0	4	100	none	none	Corporate Alliance tank droid			72
73	A vehicle	HMP droid gunship	airspeeder	Baktoid Fleet Ordnance, Haor Chall Engineering	60000	12.3	0	0	820	0	none	Droid gunship			73
76	A vehicle	All Terrain Recon Transport	walker	Kuat Drive Yards	40000	3.2	1	0	90	20	1 day	AT-RT			76
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);


--
-- Name: films_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.films_detail_id_seq', 7, false);


--
-- Name: films_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.films_id_seq', 7, false);


--
-- Name: films_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.films_id_seq1', 1, false);


--
-- Name: people_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.people_detail_id_seq', 83, false);


--
-- Name: people_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.people_id_seq', 84, false);


--
-- Name: people_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.people_id_seq1', 1, false);


--
-- Name: planets_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.planets_detail_id_seq', 61, false);


--
-- Name: planets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.planets_id_seq', 61, false);


--
-- Name: planets_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.planets_id_seq1', 1, false);


--
-- Name: sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.sections_id_seq', 7, false);


--
-- Name: sections_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.sections_id_seq1', 1, false);


--
-- Name: species_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.species_detail_id_seq', 38, false);


--
-- Name: species_detail_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.species_detail_id_seq1', 1, false);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.species_id_seq', 38, false);


--
-- Name: starships_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.starships_detail_id_seq', 76, false);


--
-- Name: starships_detail_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.starships_detail_id_seq1', 1, false);


--
-- Name: starships_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.starships_id_seq', 76, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: users_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.users_id_seq1', 3, true);


--
-- Name: vechicles_detail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.vechicles_detail_id_seq', 77, false);


--
-- Name: vechicles_detail_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.vechicles_detail_id_seq1', 1, false);


--
-- Name: vehicles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: forgeeks
--

SELECT pg_catalog.setval('public.vehicles_id_seq', 77, false);


--
-- Name: films films_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.films
    ADD CONSTRAINT films_detail_pkey PRIMARY KEY (id);


--
-- Name: people people_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.people
    ADD CONSTRAINT people_detail_pkey PRIMARY KEY (id);


--
-- Name: planets planets_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_detail_pkey PRIMARY KEY (id);


--
-- Name: sections sections_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);


--
-- Name: species species_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_detail_pkey PRIMARY KEY (id);


--
-- Name: starships starships_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.starships
    ADD CONSTRAINT starships_detail_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vechicles vechicles_detail_pkey; Type: CONSTRAINT; Schema: public; Owner: forgeeks
--

ALTER TABLE ONLY public.vechicles
    ADD CONSTRAINT vechicles_detail_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

