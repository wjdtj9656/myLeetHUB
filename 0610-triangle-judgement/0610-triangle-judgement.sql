/* Write your PL/SQL query statement below */
select x,
       y,
       z,
       case
           when x + y > z AND x + z > y AND z + y > x then 'Yes'
           else 'No'
       end as triangle
from Triangle;