-- DROP DATABASE IF EXISTS automart;
-- CREATE DATABASE automart;

-- \c automart;

CREATE TABLE users(
    id UUID PRIMARY KEY,
    email VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    address VARCHAR(200) NULL,
    is_admin BOOLEAN NULL
);

CREATE TABLE cars (
    id UUID PRIMARY KEY,
    created_date TIMESTAMP,
    state VARCHAR NOT NULL,
    image VARCHAR,
    status VARCHAR DEFAULT 'available',
    price INTEGER NOT NULL,
    manufacturer VARCHAR NOT NULL ,
    model VARCHAR NOT NULL,
    body_type VARCHAR NOT NULL,
    owner_id UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE orders(
    id UUID PRIMARY KEY,
    amount INT NOT NULL,
    status VARCHAR DEFAULT 'pending',
    buyer UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    car_id UUID NOT NULL REFERENCES cars (id) ON DELETE CASCADE
);

CREATE TABLE flags (
    id UUID PRIMARY KEY,
    created_on TIMESTAMP,
    reason VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    car_id UUID NOT NULL REFERENCES cars (id) ON DELETE CASCADE
);
