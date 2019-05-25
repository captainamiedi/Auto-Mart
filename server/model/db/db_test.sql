DROP DATABASE IF EXISTS db_test;
CREATE DATABASE db_test;

\c db_test;

CREATE TYPE user_status AS ENUM ('regular', 'admin');

CREATE TABLE users(
    id UUID PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    Re-type password VARCHAR NOT NULL,
    user_status user_status DEFAULT 'regular',
    created_date TIMESTAMPTZ,
    modified_date TIMESTAMPTZ
);

CREATE TABLE Buyers(
    car_id UUID PRIMARY KEY,
    status VARCHAR NOT NULL UNIQUE,
    price_offered VARCHAR NOT NULL,
    price VARCHAR NOT NULL,
    created_date TIMESTAMPTZ,
    modified_date TIMESTAMPTZ
);

CREATE TABLE seller(
    car_id UUID PRIMARY KEY,
    created_date TIMESTAMPTZ,
    modified_date TIMESTAMPTZ,
    email VARCHAR NOT NULL,
    manufacturer VARCHAR NOT NULL,
    model VARCHAR NOT NULL,
    price VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    status VARCHAR NOT NULL
);
