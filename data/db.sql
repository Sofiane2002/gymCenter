CREATE TABLE "member" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "activities" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

CREATE TABLE "coaches" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name_coach" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "activities_id" INT NOT NULL REFERENCES "activities"("id") ON DELETE CASCADE,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
    
);



CREATE TABLE "members_has_activities" (
  "member_id" INT NOT NULL REFERENCES "member"("id") ON DELETE CASCADE,
  "activities_id" INT NOT NULL REFERENCES "activities"("id") ON DELETE CASCADE,
  "created_at" timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY ("member_id", "activities_id")  
);

INSERT INTO "member" ("first_name", "last_name", "date_of_birth", "pseudo", "email", "password") VALUES
('Sofiane', 'DEVELOPPEUR', '1983-03-22', 's_pseudo', 's_email', 's_password'),
('Jean', 'LASSALE', '1983-03-22', 'j_pseudo', 'j_email', 'j_password'),
('Rachid', 'VIVACE', '1983-03-22', 'ra_pseudo', 'ra_email', 'ra_password'),
('Remy', 'LANGUILLE', '1983-03-22', 're_pseudo', 're_email', 're_password');

INSERT INTO "activities" ("name", "type" ) VALUES
('BJJ', 'martial-arts'),
('GRAPPLING', 'martial-arts'),
('BOXE-THAI', 'martial-arts'),
('CROSS-TRAINING', 'cardio-training'),
('YOGA', 'relaxation');  

INSERT INTO "coaches" ("name_coach", "pseudo", "email", "password", "speciality", "activities_id" ) VALUES
('Spider', 'sp_pseudo', 'sp_email', 'sp_password', 'BJJ', 1),
('Mr.Catch', 'c_pseudo', 'c_email', 'c_password', 'GRAPPLING', 2),
('Tampo', 't_pseudo', 't_email', 't_password', 'BOXE-THAI', 3),
('Mr.Strong', 'st_pseudo', 'st_email', 'st_password', 'CROSS-TRAINING', 4),
('Mr.Zen', 'z_pseudo', 'z_email', 'z_password', 'YOGA', 5);

INSERT INTO "members_has_activities" ("member_id", "activities_id" ) VALUES
(1, 1);