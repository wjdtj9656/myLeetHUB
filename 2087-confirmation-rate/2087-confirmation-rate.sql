/* Write your PL/SQL query statement below */
SELECT a.user_id, round(avg(case when b.action='confirmed' then 1 else 0 end),2) as confirmation_rate 
FROM Signups a, Confirmations b
WHERE a.user_id = b.user_id(+)
GROUP BY a.user_id