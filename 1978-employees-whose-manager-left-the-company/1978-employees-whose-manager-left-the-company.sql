select e1.employee_id from Employees e1
where e1.salary<30000 and not exists(select e2.employee_id 
from employees e2 where e2.employee_id = e1.manager_id)
and manager_id is not null order by employee_id