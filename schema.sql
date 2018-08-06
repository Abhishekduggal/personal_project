CREATE TABLE users_pp
(
    userid SERIAL PRIMARY KEY,
    name VARCHAR(150),
    role VARCHAR(50),
    isAdmin BOOLEAN

);

ALTER TABLE users_pp
ADD authid VARCHAR (80);

INSERT INTO users_pp
    (name, role, isAdmin)
VALUES
    ('Abhi', 'Manager', TRUE ),
    ('Mary', 'QA', FALSE),
    ('Larry', 'Manager', TRUE ),
    ('Sheila', 'QA', FALSE),
    ('John', 'Manager', FALSE),
    ('Laurie', 'Production', FALSE),
    ('Ana', 'Production', FALSE),
    ('Harry', 'Production', FALSE);


CREATE TABLE hr_users_pp
(
    hrid SERIAL PRIMARY KEY,
    userid INT REFERENCES users_pp(userid),
    name VARCHAR(150),
    email VARCHAR(100),
    department VARCHAR(100),
    manager VARCHAR (100),
    facilityid INT,
    facilityname VARCHAR(80)
);

INSERT INTO hr_users_pp
    (userid, name, email, department, manager, facilityid, facilityname)
VALUES
    (3, 'John', 'abhiduggal8@gmail.com', 'Production', 'Abhi', 1004, 'UTAH FACTORY'),
    (2, 'Mary', 'abhiduggal8@gmail.com', 'QA', 'John', 1004, 'UTAH FACTORY'),
    (4, 'Harry', 'abhiduggal8@gmail.com', 'Production', 'John', 1006, 'CHICAGO FACTORY'),
    (9, 'Larry', 'abhiduggal8@gmail.com', 'Production', 'John', 1006, 'CHICAGO FACTORY'),
    (10, 'Shiela', 'abhiduggal8@gmail.com', 'QA', 'John', 1006, 'CHICAGO FACTORY'),
    (12, 'Laurie', 'abhiduggal8@gmail.com', 'Production', 'John', 1004, 'UTAH FACTORY'),
    (13, 'Ana', 'abhiduggal8@gmail.com', 'Production', 'John', 1006, 'CHICAGO FACTORY');

CREATE TABLE products_pp
(
    productid SERIAL PRIMARY KEY,
    productdescription VARCHAR(150),
    productcost DECIMAL(16,2)
)

INSERT INTO products_pp
    (productdescription, productcost)
VALUES
    ('Cereal', 55.45),
    ('Granola', 85.55),
    ('Oatmel', 25.88),
    ('ChocoBar', 185.65),
    ('CoconutBar', 285.65),
    ('ChocoCoconut', 285.65);

CREATE TABLE forms_pp
(
    formid SERIAL PRIMARY KEY,
    machinetype VARCHAR (100),
    shift VARCHAR (50),
    shopordernumber INT,
    createdate GETDATE,
    productid INT,
    workstation TEXT,
    temp INT,
    productspeed INT,
    hrid INT,
    productdensity INT,
    rejects INT,
    waterpressure INT,
    drylevel DECIMAL(16,2),
    issuelog TEXT,
    machineoperating BOOLEAN,
    comments TEXT,
    issuecategory VARCHAR (35),
    issueresolution TEXT,
    packagingissue BOOLEAN,
    training BOOLEAN,
    trainingcategory VARCHAR (35),
    imgurl TEXT
)

INSERT INTO forms_pp
    (machinetype, shift, shopordernumber, productid, workstation, temp, productspeed, hrid, productdensity, rejects, waterpressure, drylevel, issuelog, machineoperating, comments, issuecategory, issueresolution, packagingissue, training, trainingcategory, imgurl, userid)
VALUES
    ('Mixer', 'Shift1', 1845, 0, 'Clean', 125, 5545, 1, 44, 1000, 453454, 22.45, 'All product is bad due to extra water', FALSE, 'Cleaning Required', 'Training Issue', 'Ask for help', TRUE, TRUE, 'Basics', 'https://upload.wikimedia.org/wikipedia/commons/1/18/SSF_Costco_bakery_pastry_packaging_line.JPG', 8 ),
    ('Mixer', 'Shift2', 1846, 1, 'Dirty', 125, 23545, 1, 44, 100, 453454, 21.45, 'All product is not roasted', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for Maintenance', FALSE, FALSE, 'None', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Laboratoires_Arkopharma_-_Chaine_de_conditionnement_mise_en_etui_piluliers.JPG', 8 ),
    ('Dryer', 'Shift1', 1848, 0, 'Clean', 125, 5355, 1, 44, 1000, 453454, 22.45, 'All product is bad ', FALSE, 'Cleaning Required', 'Training Issue', 'Ask for help', TRUE, TRUE, 'Basics', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Laboratoires_Arkopharma_-_Chaine_de_conditionnement_remplissage_piluliers.JPG', 12 ),
    ('Dryer', 'Shift2', 1849, 2, 'Dirty', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is over roasted', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for Maintenance', FALSE, TRUE, 'None', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Budweiser_Plant.jpg', 13 ),
    ('Packaging', 'Shift2', 1850, 2, 'Dirty', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is bad', TRUE, 'Cleaning Required', 'Training Issue', 'Ask for help', TRUE, TRUE, 'Basics', 'https://upload.wikimedia.org/wikipedia/commons/1/18/SSF_Costco_bakery_pastry_packaging_line.JPG', 13 ),
    ('Packaging', 'Shift2', 1851, 2, 'Dirty', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is contaminated', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for Maintenance', FALSE, TRUE, 'None', 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/3/7/6/916735-1-eng-GB/Agilent-Biologics-growth-presents-biggest-consumables-opportunity.jpg', 13 ),
    ('Mixer', 'Shift1', 1852, 2, 'Dirty', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is over roasted', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for help', TRUE, TRUE, 'None', 'https://www.agro24.gr/sites/default/files/field/image/food_manuf.jpg', 13 ),
    ('Dryer', 'Shift3', 1853, 2, 'Clean', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is over weight', FALSE, 'Cleaning Required', 'Training Issue', 'Ask for help', TRUE, TRUE, 'Basics', 'https://www.packagingstrategies.com/ext/resources/2014-Postings/Supplier-Products-2/lach-Multi-Flex-XL.jpg', 13 ),
    ('Mixer', 'Shift1', 1854, 2, 'Clean', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is spilled', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for help', TRUE, TRUE, 'None', 'https://upload.wikimedia.org/wikipedia/commons/0/06/Graaff_Fruit-Ceres_packing.jpg', 13 ),
    ('Dryer', 'Shift3', 1855, 2, 'Clean', 125, 6745, 1, 44, 100, 453454, 21.45, 'All product is wet', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for help', FALSE, FALSE, 'None', 'https://4.imimg.com/data4/KB/LC/MY-198876/apple-juice-processing-machinery-500x500.jpg', 13 )

ALTER TABLE forms_pp
ADD userid INT;

CREATE TABLE specifications_pp
(
    specid SERIAL PRIMARY KEY,
    productid INT REFERENCES products_pp(productid),
    temp INT,
    productspeed INT,
    productdensity INT,
    rejects INT,
    waterpressure INT,
    drylevel DECIMAL(16,2),
    machinespeed INT
)

INSERT INTO specifications_pp
    (productid,
    temp,
    productspeed,
    productdensity,
    rejects,
    waterpressure,
    drylevel,
    machinespeed)
VALUES
    (1, 132, 34342, 55, 800, 345445, 20.55, 38556),
    (2, 162, 32342, 52, 1000, 325445, 22.55, 38556),
    (3, 102, 31342, 45, 100, 315445, 20.55, 38556),
    (4, 182, 36342, 85, 600, 325445, 23.55, 38556),
    (5, 142, 38342, 45, 800, 335445, 30.55, 42556),
    (6, 162, 33342, 65, 800, 365445, 25.55, 48556)