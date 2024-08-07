/* Write your PL/SQL query statement below */
SELECT id, NVL(
				CASE WHEN MOD(id, 2) = 1 THEN LEAD(student,1) OVER(ORDER BY id) 
			    ELSE LAG(student,1) OVER(ORDER BY id) END, 
				student
			  ) student
FROM seat;