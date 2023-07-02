/* Write your PL/SQL query statement below */
SELECT a.name, b.bonus
FROM Employee a, Bonus b
WHERE a.empId = b.empId(+)
AND( b.bonus < 1000 OR b.bonus IS NULL)

