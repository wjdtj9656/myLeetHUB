/* Write your PL/SQL query statement below */
SELECT   s.name as name
FROM    salesperson s
WHERE   NOT EXISTS (
    SELECT  s.name 
    FROM    company c, orders o
    WHERE   s.sales_id = o.sales_id 
        AND c.com_id = o.com_id
        AND c.name = 'RED'
    );