/* Write your PL/SQL query statement below */
SELECT distinct(num) as ConsecutiveNums
FROM Logs
WHERE (id+1, num) IN (SELECT id, num FROM Logs)
AND (id+2, num) IN (SELECT id, num FROM Logs)