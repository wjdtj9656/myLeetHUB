/* Write your PL/SQL query statement below */
SELECT A.id
FROM Weather A, Weather B
WHERE A.recordDate-1 = B.recordDate
AND A.temperature > B.temperature

