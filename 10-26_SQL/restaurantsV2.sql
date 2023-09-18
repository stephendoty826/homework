
-- CREATE TABLE restaurant(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR,
--     address VARCHAR,
--     category VARCHAR
-- );

-- CREATE TABLE reviewer(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR,
--     email VARCHAR,
--     karma NUMERIC CHECK (karma >= 0 and karma <= 7)
-- ); 

-- CREATE TABLE review(
--     id SERIAL PRIMARY KEY,
--     reviewer_id INTEGER REFERENCES reviewer (id),
--     stars NUMERIC CHECK (stars >= 1 AND stars <= 5),
--     title VARCHAR(50),
--     review VARCHAR,
--     restaurant_id INTEGER REFERENCES restaurant (id)
-- );

-- INSERT INTO restaurant VALUES 
-- (DEFAULT, 'Olive Garden', '1234 Almond St Houston TX', 'Italian'),
-- (DEFAULT, 'Torchys', '2341 Peanut St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Franks Grill', '3412 Walnut Bend Houston TX', 'American'),
-- (DEFAULT, 'Outback Steakhouse', '4123 Pecan Rd Houston TX',  'American'),
-- (DEFAULT, 'Pappas BBQ', '4123 Beanwi Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Raising Canes', '3124 Pelbri Rd Houston TX', 'Fried Chicken'),
-- (DEFAULT, 'Garden of Olives', '1231 Groot St Houston TX', 'Italian'),
-- (DEFAULT, 'Flaming Tacos', '2342 Ole St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Chucks Grill', '3413 Latrick Bend Houston TX', 'American'),
-- (DEFAULT, 'Salt Grass Steakhouse', '4124 Shuum Rd Houston TX',  'American'),
-- (DEFAULT, 'Hidaway BBQ', '4125 Swantro Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Chick-fil-a', '3126 Helm Rd Houston TX', 'Fried Chicken');

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Karen', 'tookaren@hotmail.com', 2),
-- (DEFAULT, 'Billy', 'billywilly@hotmail.com', 3),
-- (DEFAULT, 'Bobby', 'bobbynewport@hotmail.com', 0),
-- (DEFAULT, 'Samantha', 'sam185@hotmail.com', 7),
-- (DEFAULT, 'Krieg', 'psychokrieg@hotmail.com', 1),
-- (DEFAULT, 'Charles', 'charleschuck@hotmail.com', 4),
-- (DEFAULT, 'Matt', 'magicmatt@hotmail.com', 6),
-- (DEFAULT, 'Rick', 'rick@hotmail.com', 5);

-- INSERT INTO review VALUES
-- (DEFAULT, 1, 1, 'Sooo Rude...', 'The employees were so rude to me.', 1),
-- (DEFAULT, 2, 3.5, 'Great Food', 'Food was good, atmosphere was OK', 2),
-- (DEFAULT, 3, 5, 'It was OK', 'It was OK. Food was not too great', 3),
-- (DEFAULT, 4, 2.5, 'Kinda Rude', 'Food was great. Employees were kinda rude.', 4),
-- (DEFAULT, 5, 4.5, 'Amazing', 'The food was sooo good. I have to go again.', 5),
-- (DEFAULT, 6, 3.5, 'Not my style but good food.', 'Atmosphere was not for me but the food was good.', 6),
-- (DEFAULT, 7, 4, 'Slow service', 'Service was slow but food was good when we got it.', 7),
-- (DEFAULT, 8, 3, 'Great Experience', 'Food was great and employees were so nice.', 8),
-- (DEFAULT, 1, 2.5, 'Would not go again', 'Restaurant was dirty and employees were rude. Food was OK.', 9),
-- (DEFAULT, 2, 2, 'Have to go again.', 'Great food. Wonderfull experience and atmosphere.', 10),
-- (DEFAULT, 3, 5, 'Why???', 'My only complaint is that this restaurant is on the other side of town.', 11),
-- (DEFAULT, 4, 4, 'How much food can you eat', 'Food was great. Portions were big.', 12),
-- (DEFAULT, 5, 3, 'Could not eat another bite', 'I was so full when I left. Gotta go again.', 1),
-- (DEFAULT, 6, 1, 'No my cup of tea', 'They did not have my kind of tea.', 2),
-- (DEFAULT, 7, 2, 'Very very rude', 'Employee at the cashier yelled at me. Food was OK.', 3),
-- (DEFAULT, 8, 1.5, 'Not very good', 'Food and atmosphere was not very good.', 4);


-- 4. Answer These Questions With a Query
    -- 4.1 List all the reviews for a given restaurant given a specific restaurant ID.
    -- SELECT * 
    -- FROM review
    -- WHERE restaurant_id = 1

    -- 4.2 List all the reviews for a given restaurant, given a specific restaurant name.
    -- SELECT *
    -- FROM review
    -- INNER JOIN restaurant
    -- ON restaurant.id = review.restaurant_id
    -- WHERE restaurant.name = 'Franks Grill'

    -- 4.3 List all the reviews for a given reviewer, given a specific author name.
    -- SELECT *
    -- FROM review
    -- INNER JOIN reviewer
    -- ON review.reviewer_id = reviewer.id
    -- WHERE reviewer.name = 'Bobby'

    -- 4.4 List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
    -- SELECT name, review 
    -- FROM review
    -- INNER JOIN restaurant
    -- ON restaurant_id = restaurant.id

    -- 4.5 Get the average stars by restaurant. The result should have the restaurant name and its average star rating.
    -- SELECT AVG(stars), name
    -- FROM review
    -- INNER JOIN restaurant
    -- ON restaurant_id = restaurant.id
    -- GROUP BY name

    -- 4.6 Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
    -- SELECT name, COUNT(review) AS review count
    -- FROM review
    -- INNER JOIN restaurant
    -- ON restaurant_id = restaurant.id
    -- GROUP BY name

    -- 4.7 List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
    -- SELECT restaurant.name, review.review, reviewer.name
    -- FROM review
    -- INNER JOIN restaurant
    -- ON restaurant_id = restaurant.id
    -- INNER JOIN reviewer
    -- ON reviewer_id = reviewer.id

    -- 4.8 Get the average stars given by each reviewer. (reviewer name, average star rating)
    -- SELECT name, AVG(stars)
    -- FROM review
    -- INNER JOIN reviewer
    -- ON reviewer_id = reviewer.id
    -- GROUP BY name

    -- 4.9 Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
    -- SELECT name, MIN(stars)
    -- FROM review
    -- INNER JOIN reviewer
    -- ON reviewer_id = reviewer.id
    -- GROUP BY name

    -- 4.10 Get the number of restaurants in each category. (category name, restaurant count)
    -- SELECT category, COUNT(*)
    -- FROM restaurant
    -- GROUP BY category

    -- 4.11 Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
    -- SELECT name, COUNT(*)
    -- FROM review
    -- INNER JOIN restaurant
    -- ON restaurant_id = restaurant.id
    -- WHERE stars = 5
    -- GROUP BY name
    
    -- 4.12 Get the average star rating for a food category. (category name, average star rating)
    -- SELECT category, AVG(stars)
    -- FROM review
    -- INNER JOIN restaurant
    -- On restaurant_id = restaurant.id
    -- GROUP BY category

-- 5. Projects DB Exercise

SELECT restaurant.name, review FROM reviewer
INNER JOIN review ON reviewer.id = review.reviewer_id
RIGHT OUTER JOIN restaurant ON review.restaurant_id = restaurant.id


