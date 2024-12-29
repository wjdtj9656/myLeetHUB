/* Write your PL/SQL query statement below */
SELECT name,COALESCE(SUM(distance),0) AS travelled_distance
FROM Users U 
LEFT JOIN rides R ON U.id=R.user_id 
GROUP BY R.user_id, name
ORDER BY travelled_distance DESC, name ASC