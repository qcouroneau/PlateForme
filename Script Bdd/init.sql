DROP SCHEMA IF EXISTS plateform CASCADE;

CREATE SCHEMA plateform AUTHORIZATION postgres;

CREATE TABLE plateform.plateform_user (
	id serial NOT NULL,
	username varchar NOT NULL,
	email varchar NOT NULL,
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


CREATE TABLE plateform.project (
	id serial NOT NULL,
	name varchar UNIQUE NOT NULL,
	description varchar NOT NULL,
	image_path varchar NULL,
	budget int8 NOT NULL,
	CONSTRAINT project_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.task (
	id serial NOT NULL,
	name varchar NOT NULL,
	description varchar NOT NULL,
	id_project int4,
	done BOOLEAN,
	CONSTRAINT task_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.task ADD CONSTRAINT user_skill_fk FOREIGN KEY (id_project) REFERENCES plateform.project(id);

CREATE TABLE plateform.task_skill (
	id serial NOT NULL,	
	id_task int4 NOT null,
	id_skill int4 NOT null,
	CONSTRAINT task_skill_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.task_skill ADD CONSTRAINT task_skill_fk1 FOREIGN KEY (id_task) REFERENCES plateform.task(id);
ALTER TABLE plateform.task_skill ADD CONSTRAINT task_skill_fk2 FOREIGN KEY (id_skill) REFERENCES plateform.skill(id);


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

CREATE TABLE plateform.role (
	id serial NOT NULL,	
	name varchar UNIQUE NOT NULL,
	CONSTRAINT role_pkey PRIMARY KEY (id)
);

CREATE TABLE plateform.user_role (
	id serial NOT NULL,	
	id_role int4 NOT null,
	id_user int4 NOT null,
	CONSTRAINT user_role_pkey PRIMARY KEY (id)
);

ALTER TABLE plateform.user_role ADD CONSTRAINT user_role_fk1 FOREIGN KEY (id_role) REFERENCES plateform.role(id);
ALTER TABLE plateform.user_role ADD CONSTRAINT user_role_fk2 FOREIGN KEY (id_user) REFERENCES plateform.plateform_user(id);

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
INSERT INTO plateform.category
(name)
VALUES('Développement');
INSERT INTO plateform.category
(name)
VALUES('travail manuel');
INSERT INTO plateform.category
(name)
VALUES('Cuisine');
INSERT INTO plateform.category
(name)
VALUES('Four tout');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Faire du bien aux arbres', 'XOXO', 50, 'https://picsum.photos/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 2', 'Oui', 50, 'https://picsum.photos/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 3', 'Projet de type sympathique', 50, 'https://picsum.photos/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 4', 'NON ONON', 50, 'https://picsum.photos/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 5', 'sdvcqgdche', 50, 'https://picsum.photos/200/300');

INSERT INTO plateform.project
(name, description, budget, image_path)
VALUES('Projet 6', 'd,fzjdkfbefhe', 50, 'https://picsum.photos/200/300');

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

INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Développement du front', 'Code CSS et HTML', 1, false);
INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Développement du Back', 'Code Java J2EE', 1, false);
INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Développement du front', 'Code CSS et HTML', 2, false);
INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Développement du Back', 'Code Java J2EE', 2, false);
INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Ceuillir des champignons', 'A la main', 3, false);
INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Les manger', 'Après les avoirs cuits', 3, false);
INSERT INTO plateform.task
(name, description, id_project, done)
VALUES('Jsais pas', '??', 3, false);

INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(5,1);
INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(5,2);
INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(5,3);
INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(5,4);
INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(6,5);
INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(7,6);
INSERT INTO plateform.task_category
(id_category, id_task)
VALUES(8,7);

INSERT INTO plateform.role
(name)
VALUES('ROLE_USER');
INSERT INTO plateform.role
(name)
VALUES('ROLE_ADMIN');