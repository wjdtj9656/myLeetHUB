/* Write your PL/SQL query statement below */
SELECT contest_id, ROUND((count(contest_id) * 100) / (select count(*) from Users),2) as percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage desc, contest_id asc;