/* Write your PL/SQL query statement below */
select s.user_id, round(avg(case when(c.action='confirmed') then 1 else 0 end),2) as confirmation_rate 
from Signups s,Confirmations c 
where s.user_id = c.user_id(+)
group by s.user_id
