SELECT fp.shopordernumber, (prod.productcost * fp.rejects)as rejectsvalue
FROM products_pp prod
    JOIN forms_pp fp ON fp.productid = prod.productid