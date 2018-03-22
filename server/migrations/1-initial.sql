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

INSERT INTO CUSTOMER(firstName, lastName, birthday, gender, lastContact, customerLifetimeValue) 
SELECT A.* from
(
  SELECT "Peter", "Smith", "1996-10-12", "m", "2017-06-01T23:28:56.782Z", 191.12 UNION ALL
  SELECT "Anna", "Hopp", "1987-05-03", "w", "2017-07-08T13:18:56.888Z", 50.99 UNION ALL
  SELECT "Christian", "Cox", "1991-02-21", "m", "2017-08-01T11:57:47.142Z", 0 UNION ALL
  SELECT "Roxy", "Fox", "1979-06-30", "w", "2017-01-02-29T21:08:50.700Z", 213.12 UNION ALL
  SELECT "Eric", "Adam", "1969-11-21", "m", "2017-03-18T12:20:06.702Z", 1019.91 UNION ALL
  SELECT "Clayton", "Desousa", "1996-10-12", "m", "2017-06-01T23:28:56.782Z", 191.12 UNION ALL
  SELECT "Karoline", "Aultman", "1987-05-03", "w", "2017-07-08T13:18:56.888Z", 50.99 UNION ALL
  SELECT "Nicky", "Slay", "1991-02-21", "m", "2017-08-01T11:57:47.142Z", 0 UNION ALL
  SELECT "Chanda", "Copenhaver", "1979-06-30", "w", "2017-01-02-29T21:08:50.700Z", 213.12 UNION ALL
  SELECT "Broderick", "Longnecker", "1969-11-21", "m", "2017-03-18T12:20:06.702Z", 1019.91 UNION ALL
  SELECT "Alexis", "Kuss", "1996-10-12", "m", "2017-06-01T23:28:56.782Z", 191.12 UNION ALL
  SELECT "Willena", "Condrey", "1987-05-03", "w", "2017-07-08T13:18:56.888Z", 50.99 UNION ALL
  SELECT "Fredrick", "Bellah", "1991-02-21", "m", "2017-08-01T11:57:47.142Z", 0 UNION ALL
  SELECT "Iva", "Buenrostro", "1979-06-30", "w", "2017-01-02-29T21:08:50.700Z", 213.12 UNION ALL
  SELECT "Eliseo", "Goldfarb", "1969-11-21", "m", "2017-03-18T12:20:06.702Z", 1019.91
)A Where NOT EXISTS(Select 1 from Customer);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------