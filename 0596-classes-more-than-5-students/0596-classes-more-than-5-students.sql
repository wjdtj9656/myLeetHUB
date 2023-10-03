/* Write your PL/SQL query statement below */
SELECT 
class
FROM Courses
GROUP BY class
HAVING count(*)>=5