-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('uncategorized'), ('humor'), ('kids'), ('bizarre'), ('meme');

-- Favorites table
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" TEXT
);


INSERT INTO "favorites" ("url")
VALUES ('https://media2.giphy.com/media/ZfUlRPE2zeZkQ/200.gif?cid=fddf64fb1179738dd48be64660a57207e757775169cdd1c8&rid=200.gif');

INSERT INTO "favorites" ("url")
VALUES ('https://media2.giphy.com/media/ecOK5FrTNqX60/200.gif?cid=fddf64fb0450b96e07113009f5ecbec2e191796f4197624a&rid=200.gif');

INSERT INTO "favorites" ("url")
VALUES ('https://media0.giphy.com/media/K6PaXgRAzAVKE/200.gif?cid=fddf64fb457e1fb822f9f5b9ccd568337a0b75838b2eab6c&rid=200.gif');

-- favorites_category
CREATE TABLE "favorites_category" (
	"id" SERIAL PRIMARY KEY,
	"favorites_id" INT,
	"category_id" INT
);

INSERT INTO "favorites_category" ("favorites_id", "category_id")
VALUES (1, 2), (1, 3), (3, 5);