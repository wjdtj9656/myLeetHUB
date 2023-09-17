SELECT b.student_id, b.student_name, b.subject_name, COUNT(a.subject_name) as attended_exams
FROM Examinations a,
(SELECT a.student_id, a.student_name, sub.subject_name
FROM Students a
CROSS JOIN Subjects sub) b
WHERE b.student_id = a.student_id(+)
AND b.subject_name = a.subject_name(+)
GROUP BY b.student_id, b.student_name, b.subject_name
ORDER BY b.student_id, b.student_name