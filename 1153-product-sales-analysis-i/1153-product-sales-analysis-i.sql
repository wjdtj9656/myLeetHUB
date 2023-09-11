/* Write your PL/SQL query statement below */
SELECT 
B.product_name as product_name, 
A.year as year,
A.price as price
FROM Sales A, Product B
WHERE A.product_id = B.product_id