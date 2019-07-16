-- DROP DATABASE IF EXISTS automart;
-- CREATE DATABASE automart;

-- \c automart;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    address VARCHAR(200) NULL,
    is_admin BOOLEAN NULL
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    created_date TIMESTAMP,
    state VARCHAR NOT NULL,
    image VARCHAR,
    status VARCHAR DEFAULT 'available',
    price INTEGER,
    manufacturer VARCHAR NOT NULL ,
    model VARCHAR NOT NULL,
    body_type VARCHAR NOT NULL,
    owner_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    amount INT NOT NULL,
    status VARCHAR DEFAULT 'pending',
    buyer INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    car_id INT NOT NULL REFERENCES cars (id) ON DELETE CASCADE
);

CREATE TABLE flags (
    id SERIAL PRIMARY KEY,
    created_on TIMESTAMP,
    reason VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    car_id INT NOT NULL REFERENCES cars (id) ON DELETE CASCADE
);
