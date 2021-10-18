BEGIN;

CREATE TABLE "member" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
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

INSERT INTO "member" ("first_name", "last_name", "date_of_birth" ) VALUES
('Sofiane', 'DEVELOPPEUR', '1983-03-22'),
('Jean', 'LASSALE', '1983-03-22'),
('Rachid', 'VIVACE', '1983-03-22'),
('Remy', 'LANGUILLE', '1983-03-22');

INSERT INTO "activities" ("name", "type" ) VALUES
('BJJ', 'martial-arts'),
('GRAPPLING', 'martial-arts'),
('BOXE-THAI', 'martial-arts'),
('CROSS-TRAINING', 'cardio-training'),
('YOGA', 'relaxation');  

INSERT INTO "coaches" ("name_coach", "speciality", "activities_id" ) VALUES
('Spider', 'BJJ', 1),
('Mr.Catch', 'GRAPPLING', 2),
('Tampo', 'BOXE-THAI', 3),
('Mr.Strong', 'CROSS-TRAINING', 4),
('Mr.Zen', 'YOGA', 5);

INSERT INTO "members_has_activities" ("member_id", "activities_id" ) VALUES
(1, 1);


COMMIT;