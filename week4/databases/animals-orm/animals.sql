
CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name  TEXT,
  last_name   TEXT,
  species     TEXT,
  description TEXT,
  roundness   INTEGER, -- 0 to 10
  alive       BOOLEAN,
  age         INTEGER,
  image_url   TEXT
);

INSERT INTO animals( first_name, last_name, species, description, roundness, alive, age, image_url)
      VALUES( "Clarence", "Boddicker", "Human", "Baddie", 7, 0, 40, "http://cultspark.com/wp-content/uploads/2012/04/clarence-boddicker.jpg");

INSERT INTO animals( first_name, last_name, species, description, roundness, alive, age, image_url)
      VALUES ( "Ruby", "Hammer", "Canine", "best dog ever", 2, 1, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4RK9kkyjWtYDIMkr7l1023MbsYs5dDy9tdUBvcLT5I-tMjK4");

INSERT INTO animals( first_name, last_name, species, description, roundness, alive, age, image_url)
      VALUES ( "Round", "Boys", "Hamster", "a round animal", 9, 1, 2, "https://pbs.twimg.com/profile_images/955515431367913472/WlehUs56_400x400.jpg");
