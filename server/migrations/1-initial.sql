--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Customer (
  id INTEGER PRIMARY KEY,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  birthday DATETIME NOT NULL,
  gender TEXT NOT NULL,
  lastContact DATETIME NOT NULL,
  customerLifetimeValue REAL NOT NULL,
  CONSTRAINT Customer_ck_gender CHECK (gender IN ('m', 'w'))
);

INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) VALUES("Peter", "Smith", "1996-10-12", "m", "2017-06-01T23:28:56.782Z", 191.12);
INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) VALUES("Anna", "Hopp", "1987-05-03", "w", "2017-07-08T13:18:56.888Z", 50.99);
INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) VALUES("Christian", "Cox", "1991-02-21", "m", "2017-08-01T11:57:47.142Z", 0);
INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) VALUES("Roxy", "Fox", "1979-06-30", "w", "2017-01-02-29T21:08:50.700Z", 213.12);
INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) VALUES("Eric", "Adam", "1969-11-21", "m", "2017-03-18T12:20:06.702Z", 1019.91);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------