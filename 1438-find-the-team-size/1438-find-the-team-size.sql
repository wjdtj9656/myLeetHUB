select employee.employee_id, team.team_size
from employee
left join (
    select team_id, count(employee_id) as team_size
    from employee
    group by team_id
)  team
on employee.team_id = team.team_id;