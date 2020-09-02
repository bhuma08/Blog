DROP TABLE IF EXISTS authors;

CREATE TABLE POSTS (
    id serial PRIMARY KEY,
    author varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
     ,
    entry text
);