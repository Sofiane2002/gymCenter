BEGIN;


ALTER TABLE "member" ADD UNIQUE ("email");


COMMIT;