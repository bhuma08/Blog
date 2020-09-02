DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    author varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    createdAt DATE DEFAULT CURRENT_DATE,
    entry text
);

INSERT INTO posts (author, title, entry)
VALUES ('Bad', 'First Post', 'This is the first post in our coding challenge project.');