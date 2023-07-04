
SELECT a.student_id, a.student_name, sub.subject_name, COUNT(b.subject_name) as attended_exams
FROM Students a
CROSS JOIN Subjects sub
LEFT JOIN Examinations b
ON a.student_id = b.student_id 
AND sub.subject_name = b.subject_name
GROUP BY a.student_id,a.student_name,sub.subject_name
ORDER BY a.student_id,a.student_name