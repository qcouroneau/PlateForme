DROP SCHEMA IF EXISTS plateform CASCADE;

CREATE SCHEMA plateform AUTHORIZATION postgres;

CREATE TABLE plateform.plateform_user (
	id serial NOT NULL,
	login varchar NOT NULL,
	mail varchar NOT NULL,
	password varchar NOT null,
	CONSTRAINT plateform_user_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.skill (
	id serial NOT NULL,
	name varchar NOT NULL,
	id_skill_category int4 NOT null,
	CONSTRAINT skill_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.user_skill (
	id serial NOT NULL,	
	id_user int4 NOT null,
	id_skill int4 NOT null,
	skill_level varchar NOT null,
	CONSTRAINT user_skill_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.user_skill ADD CONSTRAINT user_skill_fk1 FOREIGN KEY (id_user) REFERENCES plateform.plateform_user(id);
ALTER TABLE plateform.user_skill ADD CONSTRAINT user_skill_fk2 FOREIGN KEY (id_skill) REFERENCES plateform.skill(id);

CREATE TABLE plateform.task (
	id serial NOT NULL,
	name varchar NOT NULL,
	description varchar NOT NULL,
	CONSTRAINT task_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.task_skill (
	id serial NOT NULL,	
	id_task int4 NOT null,
	id_skill int4 NOT null,
	CONSTRAINT task_skill_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.task_skill ADD CONSTRAINT task_skill_fk1 FOREIGN KEY (id_task) REFERENCES plateform.task(id);
ALTER TABLE plateform.task_skill ADD CONSTRAINT task_skill_fk2 FOREIGN KEY (id_skill) REFERENCES plateform.skill(id);

CREATE TABLE plateform.project (
	id serial NOT NULL,
	name varchar UNIQUE NOT NULL,
	description varchar NOT NULL,
	image_path varchar NULL,
	budget int8 NOT NULL,
	CONSTRAINT project_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.project_task (
	id serial NOT NULL,	
	id_project int4 NOT null,
	id_task int4 NOT null,
	CONSTRAINT project_task_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_task ADD CONSTRAINT project_task_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_task ADD CONSTRAINT project_task_fk2 FOREIGN KEY (id_task) REFERENCES plateform.task(id);

CREATE TABLE plateform.project_user (
	id serial NOT NULL,	
	id_project int4 NOT null,
	id_user int4 NOT null,
	is_initiater bool NULL,
	CONSTRAINT project_user_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_user ADD CONSTRAINT project_task_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_user ADD CONSTRAINT project_task_fk2 FOREIGN KEY (id_user) REFERENCES plateform.plateform_user(id);

CREATE TABLE plateform.category (
	id serial NOT NULL,	
	name varchar UNIQUE NOT NULL,
	CONSTRAINT category_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.project_category (
	id serial NOT NULL,	
	id_category int4 NOT null,
	id_project int4 NOT null,
	CONSTRAINT project_category_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.project_category ADD CONSTRAINT project_category_fk1 FOREIGN KEY (id_project) REFERENCES plateform.project(id);
ALTER TABLE plateform.project_category ADD CONSTRAINT project_category_fk2 FOREIGN KEY (id_category) REFERENCES plateform.category(id);

CREATE TABLE plateform.task_category (
	id serial NOT NULL,	
	id_category int4 NOT null,
	id_task int4 NOT null,
	CONSTRAINT task_category_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.task_category ADD CONSTRAINT task_category_fk1 FOREIGN KEY (id_task) REFERENCES plateform.task(id);
ALTER TABLE plateform.task_category ADD CONSTRAINT task_category_fk2 FOREIGN KEY (id_category) REFERENCES plateform.category(id);

CREATE TABLE plateform.skill_category (
	id serial NOT NULL,	
	id_category int4 NOT null,
	id_skill int4 NOT null,
	CONSTRAINT skill_category_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.skill_category ADD CONSTRAINT skill_category_fk1 FOREIGN KEY (id_skill) REFERENCES plateform.skill(id);
ALTER TABLE plateform.skill_category ADD CONSTRAINT skill_category_fk2 FOREIGN KEY (id_category) REFERENCES plateform.category(id);

INSERT INTO plateform.category
(name)
VALUES('Nature');
INSERT INTO plateform.category
(name)
VALUES('Finance');
INSERT INTO plateform.category
(name)
VALUES('Informatique');
INSERT INTO plateform.category
(name)
VALUES('Communication');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Faire du bien aux arbres', 'XOXO', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 2', 'Oui', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 3', 'Projet de type sympathique', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 4', 'NON ONON', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 5', 'sdvcqgdche', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 6', 'd,fzjdkfbefhe', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 7', 'd,fzjdkfbefhe', 50, 'https://picsum.photos/id/237/200/300');

INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(1, 1);
INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(2, 1);
INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(3, 1);
INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(4, 1);
INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(5, 1);
INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(6, 1);
INSERT INTO plateform.project_category
(id_project, id_category)
VALUES(7, 1);