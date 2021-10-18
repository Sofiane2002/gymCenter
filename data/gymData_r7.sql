BEGIN;


ALTER TABLE "coaches" ADD UNIQUE ("email");


COMMIT;