/* Write your PL/SQL query statement below */
SELECT contest_id, round(count(r.contest_id)*100.00/(select count(*) from Users),2) percentage
FROM Register r
GROUP BY contest_id
ORDER BY percentage desc, contest_id asc;