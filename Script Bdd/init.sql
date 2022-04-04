DROP SCHEMA IF EXISTS plateform CASCADE;

CREATE SCHEMA plateform AUTHORIZATION postgres;

CREATE TABLE plateform.plateform_user (
	id serial NOT NULL,
	login varchar NOT NULL,
	mail varchar NOT NULL,
	plateform_password varchar NOT null,
	CONSTRAINT plateform_user_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.skill_category (
	id serial NOT NULL,
	name_skill_category varchar NOT null,
	description varchar NOT null,
	CONSTRAINT skill_category_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.skill (
	id serial NOT NULL,
	name_skill varchar NOT NULL,
	id_skill_category int4 NOT null,
	CONSTRAINT skill_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.skill ADD CONSTRAINT skill_fk FOREIGN KEY (id_skill_category) REFERENCES plateform.skill_category(id);

CREATE TABLE plateform.user_skill (
	id serial NOT NULL,	
	id_user int4 NOT null,
	id_skill int4 NOT null,
	niveau_competence varchar NOT null,
	CONSTRAINT user_skill_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.user_skill ADD CONSTRAINT user_skill_fk1 FOREIGN KEY (id_user) REFERENCES plateform.plateform_user(id);
ALTER TABLE plateform.user_skill ADD CONSTRAINT user_skill_fk2 FOREIGN KEY (id_skill) REFERENCES plateform.skill(id);

CREATE TABLE plateform.tache_category (
	id serial NOT NULL,
	name_tache_category varchar NOT null,
	description varchar NOT null,
	CONSTRAINT tache_category_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.tache (
	id serial NOT NULL,
	name_tache varchar NOT NULL,
	description varchar NOT NULL,
	id_tache_category int4 NOT null,
	CONSTRAINT tache_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.tache ADD CONSTRAINT tache_fk FOREIGN KEY (id_tache_category) REFERENCES plateform.tache_category(id);

CREATE TABLE plateform.tache_skill (
	id serial NOT NULL,	
	id_tache int4 NOT null,
	id_skill int4 NOT null,
	CONSTRAINT tache_skill_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.tache_skill ADD CONSTRAINT tache_skill_fk1 FOREIGN KEY (id_tache) REFERENCES plateform.tache(id);
ALTER TABLE plateform.tache_skill ADD CONSTRAINT tache_skill_fk2 FOREIGN KEY (id_skill) REFERENCES plateform.skill(id);

CREATE TABLE plateform.project_category (
	id serial NOT NULL,
	name varchar NOT null,
	CONSTRAINT project_category_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.project (
	id serial NOT NULL,
	name varchar UNIQUE NOT NULL,
	description varchar NOT NULL,
	image varchar NULL,
	budget int8 NOT NULL,
	CONSTRAINT project_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.project_project_category (
	id serial NOT NULL,
	id_project int4 NOT null,
	id_project_category int4 NOT null,
	CONSTRAINT project_project_category_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_project_category ADD CONSTRAINT project_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_project_category ADD CONSTRAINT project_fk2 FOREIGN KEY (id_project_category) REFERENCES plateform.project_category(id);

CREATE TABLE plateform.tag (
	id serial NOT NULL,
	name_tag varchar NOT null,
	CONSTRAINT tag_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.project_tag (
	id serial NOT NULL,	
	id_project int4 NOT null,
	id_tag int4 NOT null,
	CONSTRAINT project_tag_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_tag ADD CONSTRAINT project_tag_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_tag ADD CONSTRAINT project_tag_fk2 FOREIGN KEY (id_tag) REFERENCES plateform.tag(id);

CREATE TABLE plateform.project_tache (
	id serial NOT NULL,	
	id_project int4 NOT null,
	id_tache int4 NOT null,
	CONSTRAINT project_tache_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_tache ADD CONSTRAINT project_tache_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_tache ADD CONSTRAINT project_tache_fk2 FOREIGN KEY (id_tache) REFERENCES plateform.tache(id);

CREATE TABLE plateform.project_user (
	id serial NOT NULL,	
	id_project int4 NOT null,
	id_user int4 NOT null,
	is_initiater bool NULL,
	CONSTRAINT project_user_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_user ADD CONSTRAINT project_tache_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_user ADD CONSTRAINT project_tache_fk2 FOREIGN KEY (id_user) REFERENCES plateform.plateform_user(id);

INSERT INTO plateform.project_category
(name)
VALUES('Nature');

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Faire du bien aux arbres', 'XOXO', 'https://picsum.photos/id/237/200/300', 50);

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Projet 2', 'Oui', 'https://picsum.photos/id/236/200/300', 50);

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Projet 3', 'Projet de type sympathique', 'https://picsum.photos/id/100/200/300', 50);

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Projet 4', 'NON ONON', 'https://picsum.photos/id/101/200/300', 50);

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Projet 5', 'sdvcqgdche', 'https://picsum.photos/id/102/200/300', 50);

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Projet 6', 'd,fzjdkfbefhe', 'https://picsum.photos/id/103/200/300', 50);

INSERT INTO plateform.project
(name, description, image, budget)
VALUES('Projet 7', 'd,fzjdkfbefhe', 'https://picsum.photos/id/104/200/300', 50);

INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(1, 1);
INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(2, 1);
INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(3, 1);
INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(4, 1);
INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(5, 1);
INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(6, 1);
INSERT INTO plateform.project_project_category
(id_project, id_project_category)
VALUES(7, 1);