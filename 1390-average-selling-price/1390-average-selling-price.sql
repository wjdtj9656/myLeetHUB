/* Write your PL/SQL query statement below */

SELECT B.product_id, NVL(ROUND(SUM(A.units * B.price) / SUM(A.units),2),0) AS average_price
FROM Prices B, UnitsSold A
WhERE A.product_id(+) = B.product_id
AND (A.purchase_date BETWEEN B.start_date AND B.end_date OR A.purchase_date is null) 
GROUP BY B.product_id