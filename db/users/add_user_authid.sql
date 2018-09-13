INSERT INTO users_pp
    (name, role, isadmin, authid)
VALUES
    ($1, 'Manager', FALSE, $2);
SELECT *
FROM users_pp
WHERE name=$1