/* Write your PL/SQL query statement below */
SELECT 
a.customer_id
FROM Customer a, Product b
GROUP BY a.customer_id
HAVING count(distinct a.product_key) = count(distinct b.product_key)