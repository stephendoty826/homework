
-- 2. Create Database Table
-- CREATE TABLE restaurant(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR,
--     distance NUMERIC,
--     stars INTEGER,
--     category VARCHAR,
--     favoriteDish VARCHAR,
--     doesTakeout BOOLEAN,
--     lastTimeYouAteThere DATE
-- );

-- 4 Insert Data
-- INSERT INTO restaurant VALUES (
--     DEFAULT, 'Chuys', 3.6, 4, 'Tex-Mex', 'Chicka-Chicka-Boom-Boom', TRUE, '2021-09-24'
-- );

-- INSERT INTO restaurant VALUES 
--     (DEFAULT, 'Olive Garden', 5.9, 5, 'Italian', 'Tour of Italy', TRUE, '2021-07-09'),
--     (DEFAULT, 'Torchys', 2, 4, 'Tex-Mex', 'Queso', TRUE, '2021-08-24'),
--     (DEFAULT, 'Franks Grill', 1.6, 5, 'American', 'Breakfast', FALSE, '2021-06-20'),
--     (DEFAULT, 'Outback Steakhouse', 3.6, 4, 'American', 'Alice Spring Chicken', FALSE, '2021-10-07'),
--     (DEFAULT, 'Pappas BBQ', 3.6, 4, 'BBQ', 'Four Meat Platter', TRUE, '2021-6-14'),
--     (DEFAULT, 'Raising Canes', 1.2, 4, 'Fried Chicken', 'Caniac', TRUE, '2021-6-14');

-- 5. Writing Queries
    -- 5.1 The names of the restaurants to which you gave a 5 stars
    -- SELECT * FROM restaurant WHERE stars = 5;

    -- 5.2 The favorite dishes of all 5-star restaurants
    -- SELECT favoriteDish FROM restaurant WHERE stars = 5;

    -- 5.3 The id of a restaurant by a specific restaurant name, say 'Moon Tower'
    -- SELECT * FROM restaurant WHERE name = 'Chuys';

    -- 5.4 restaurants in the category of 'BBQ'
    -- SELECT * FROM restaurant WHERE category = 'BBQ';

    -- 5.5 restaurants that do take out
    -- SELECT * FROM restaurant WHERE doesTakeout = TRUE;

    -- 5.6 restaurants that do take out and is in the category of 'BBQ'
    -- SELECT * FROM restaurant WHERE doesTakeout = True and category = 'BBQ';

    -- 5.7 restaurants within 2 miles
    -- SELECT * FROM restaurant WHERE distance < 2;

    -- 5.8 restaurants you haven't eaten at in the last week
    -- SELECT * FROM restaurant WHERE lastTimeYouAteThere < '2021-10-17';

    -- restaurants you haven't ate at in the last week and has 5 stars
    -- SELECT * FROM restaurant WHERE lastTimeYouAteThere < '2021-10-17' and stars = 5;

-- 6. Aggregation and Sorting Queries
    -- 6.1 list restaurants by the closest distance.
    -- SELECT * FROM restaurant ORDER BY distance ASC;

    -- 6.2 list the top 2 restaurants by distance.
    -- SELECT * FROM restaurant ORDER BY distance DESC LIMIT 2;

    -- 6.3 list the top 2 restaurants by stars.
    -- SELECT * FROM restaurant ORDER BY stars DESC LIMIT 2;

    -- 6.4 list the top 2 restaurants by stars where the distance is less than 2 miles.
    -- SELECT * FROM restaurant WHERE distance < 2 ORDER BY stars DESC LIMIT 2;

    -- 6.5 count the number of restaurants in the db.
    -- SELECT COUNT(*) FROM restaurant;

    -- 6.6 count the number of restaurants by category.
    -- SELECT COUNT(category), category FROM restaurant GROUP BY category;

    -- 6.7 get the average stars per restaurant by category.
    -- SELECT AVG(stars), category FROM restaurant GROUP BY category

    -- 6.7 get the max stars of a restaurant by category.
    -- SELECT MAX(stars), category FROM restaurant GROUP BY category









