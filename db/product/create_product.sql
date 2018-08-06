INSERT INTO products_pp
    (productdescription, productcost)
VALUES
    ($1, $2);
SELECT *
FROM products_pp