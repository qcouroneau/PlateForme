CREATE SCHEMA plateforme;

ALTER SCHEMA plateforme OWNER TO postgres;

CREATE TABLE plateforme.utilisateur (
	id serial NOT NULL,
	pseudo varchar NULL,
	nom_fonctionnel_camp varchar NULL,
	email varchar NULL,
	mot_de_passe varchar NULL
);