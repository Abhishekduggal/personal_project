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
    ('John', 'Manager', FALSE),
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
    (4, 'Harry', 'abhiduggal8@gmail.com', 'Production', 'John', 1006, 'CHICAGO FACTORY')

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
    ('ChocoBar', 185.65)

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
    (machinetype, shift, shopordernumber, productid, workstation, temp, productspeed, hrid, productdensity, rejects, waterpressure, drylevel, issuelog, machineoperating, comments, issuecategory, issueresolution, packagingissue, training, trainingcategory,imgurl)
VALUES
    ('Mixer', 'Shift1', 1845, 0, 'Clean', 125, 5545, 1, 44, 1000, 453454, 22.45, 'All product is bad due to extra water', FALSE, 'Cleaning Required', 'Training Issue', 'Ask for help', TRUE, TRUE, 'Basics', 'https://c.pxhere.com/images/5d/5b/cd42e54653a25fd8af2f3f2d314f-1420583.jpg!d' ),
    ('Mixer', 'Shift2', 1846, 1, 'Dirty', 125, 5545, 1, 44, 100, 453454, 21.45, 'All product is not roasted', TRUE, 'Maintenance Required', 'Maintenance Issue', 'Ask for Maintenance', FALSE, FALSE, 'None', 'https://c.pxhere.com/images/5d/5b/cd42e54653a25fd8af2f3f2d314f-1420583.jpg!d' )

ALTER TABLE forms_pp
ADD userid INT;