SELECT name
FROM Employee
WHERE id in
(SELECT managerId
FROM Employee
GROUP BY managerId
having count(managerId) >= 5)