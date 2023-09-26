/* Write your PL/SQL query statement below */
SELECT 
ROUND(AVG(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) * 100, 2) as immediate_percentage
FROM delivery;
WHERE (customer_id, order_date) IN
(select customer_id, min(order_date) as first_order
FROM delivery
GROUP BY customer_id)