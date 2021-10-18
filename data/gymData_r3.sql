BEGIN;

ALTER TABLE "coaches" ADD COLUMN  "pseudo" TEXT;
ALTER TABLE "coaches" ADD COLUMN  "email" TEXT ;
ALTER TABLE "coaches" ADD COLUMN  "password" TEXT;


COMMIT