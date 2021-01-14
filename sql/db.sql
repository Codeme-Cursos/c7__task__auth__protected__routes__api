/* Create users table */
CREATE TABLE IF NOT EXISTS users (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    username text NOT NULL, 
    email text NOT NULL, 
    password text NOT NULL
);

/* Insert a user */
INSERT INTO users(username, email, password)
    VALUES('sacm1046', 'sacm1046@gmail.com', 123456);

/* Create tasks table */
CREATE TABLE IF NOT EXISTS tasks (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    responsable text NOT NULL, 
    description text NOT NULL,
    userid INTEGER REFERENCES users(id) NOT NULL
);

/* Insert a task */
INSERT INTO tasks(responsable, description, userid)
    VALUES('Sebastian', 'Cocinar', 1);