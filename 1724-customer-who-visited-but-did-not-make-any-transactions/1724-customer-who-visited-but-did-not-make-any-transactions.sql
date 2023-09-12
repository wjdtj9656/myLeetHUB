/* Write your PL/SQL query statement below */
SELECT A.customer_id,count(*) as count_no_trans
FROM Visits A, Transactions B
WHERE B.visit_id(+) = A.visit_id
AND B.transaction_id is null
GROUP BY A.CUSTOMER_ID