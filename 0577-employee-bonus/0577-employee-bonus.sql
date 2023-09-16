/* Write your PL/SQL query statement below */
SELECT A.name, B.bonus
FROM Employee A, Bonus B
WHERE A.empId = B.empId(+)
AND (B.bonus < 1000 OR B.bonus is null)
