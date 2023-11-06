/* Write your PL/SQL query statement below */
SELECT  USER_ID, CONCAT(UPPER(SUBSTR(Name,0,1)),lower(SUBSTR(NAME,2,LENGTH(NAME)-1))) as name FROM USERS order by user_id