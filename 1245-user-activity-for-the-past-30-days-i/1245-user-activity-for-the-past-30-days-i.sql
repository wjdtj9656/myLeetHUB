/* Write your PL/SQL query statement below */
SELECT 
TO_CHAR(activity_date,'YYYY-MM-DD') AS day,
COUNT(distinct user_id) as active_users
FROM
Activity
WHERE activity_date BETWEEN '2019-06-28' AND '2019-07-27'
GROUP BY TO_CHAR(activity_date,'YYYY-MM-DD')