-- Ajout d'un champ pseudo, email avec une contrainte UNIQUE et d'un password.
-- Pour que chaque membre puisse se connecter avec un un compte privé

BEGIN;

ALTER TABLE "member" ADD COLUMN  "pseudo" TEXT;
ALTER TABLE "member" ADD COLUMN  "email" TEXT ;
ALTER TABLE "member" ADD COLUMN  "password" TEXT;

COMMIT;