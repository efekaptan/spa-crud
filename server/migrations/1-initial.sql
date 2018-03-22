--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Customer (
  id   INTEGER PRIMARY KEY,
  firstName TEXT  NOT NULL,
  lastName TEXT  NOT NULL,
  birthday DATETIME  NOT NULL,
  gender TEXT  NOT NULL,
  lastContact DATETIME NOT NULL,
  customerLifetimeValue  REAL NOT NULL,
  CONSTRAINT Customer_ck_gender CHECK (gender IN ('m', 'w'))
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------