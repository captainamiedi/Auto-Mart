DROP DATABASE IF EXISTS db_test;
CREATE DATABASE db_test;

\c db_test;



CREATE TABLE users(
        id UUID PRIMARY KEY,
        email VARCHAR(120) NOT NULL,
        first_name VARCHAR(120) NOT NULL,
        last_name VARCHAR(120) NOT NULL,
        password VARCHAR(120) NOT NULL,
        address VARCHAR(200) NULL,
        is_admin VARCHAR(50) NULL
);

