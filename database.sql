CREATE TABLE request(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    status TEXT DEFAULT 'Active',
    message TEXT NOT NULL,
    comment TEXT 
)