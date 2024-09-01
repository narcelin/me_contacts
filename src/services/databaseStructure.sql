-- CREATING TABLES

CREATE TABLE IF NOT EXISTS contacts (

    id TEXT PRIMARY KEY NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    first_name TEXT,
    last_name TEXT,
    middle_name TEXT,
    notes TEXT

);

CREATE TABLE IF NOT EXISTS addresses (

    id TEXT PRIMARY KEY NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    address_type TEXT,
    address TEXT NOT NULL,

    contact_id TEXT NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE CASCADE

);

CREATE TABLE IF NOT EXISTS phone_numbers (

    id TEXT PRIMARY KEY NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    phone_type TEXT,
    phone_number TEXT NOT NULL,

    contact_id TEXT NOT NULL,
    FOREIGN KEY (contact_id) REFERENCES contacts(id) ON DELETE CASCADE

);

-- INSERT EXAMPLES

INSERT INTO contacts (id, first_name, last_name, middle_name, notes) VALUES ('fd23e565-d3c1-4a02-9351-c980fdd1528c', 'John', 'Doe', 'Mary', 'A very important contact');

INSERT INTO addresses (id, contact_id, address_type, address) VALUES ('4ce00344-020a-48ad-a7e1-d012a41b7956', 'fd23e565-d3c1-4a02-9351-c980fdd1528c', 'Home', '777 Glade Rd, Boca Raton, FL 33431');

INSERT INTO phone_numbers (id, contact_id, phone_type, phone_number) VALUES ('4ce00344-020a-48ad-a7e1-c980fdd1528c', 'fd23e565-d3c1-4a02-9351-c980fdd1528c', 'Cell', '5612223333');

-- SELECT EXAMPLES

-- SELECT \* FROM contacts;
-- SELECT \* FROM addresses;
-- SELECT \* FROM phone_numbers;
