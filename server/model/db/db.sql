DROP DATABASE IF EXISTS AutoMart;
CREATE DATABASE AutoMart;

\c AutoMart;

CREATE TABLE users(
    id UUID PRIMARY KEY,
    email VARCHAR(120) NOT NULL,
    first_name VARCHAR(120) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    password VARCHAR(120) NOT NULL,
    address VARCHAR(200) NULL,
    is_admin VARCHAR(50) NULL
);

CREATE TABLE cars (
    id UUID PRIMARY KEY,
    created_date TIMESTAMP,
    state VARCHAR(80) NOT NULL,
    status VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    manufacturer VARCHAR(120) NOT NULL ,
    model VARCHAR(120) NOT NULL,
    body_type VARCHAR(120)NOT NULL,
    owner_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE orders(
    id UUID PRIMARY KEY,
    car_id UUID NOT NULL,
    amount VARCHAR(120) NOT NULL,
    status VARCHAR(120) NOT NULL,
    buyer UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE
);