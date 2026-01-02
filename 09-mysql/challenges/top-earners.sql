select department, name, salary, rank_in_dept
from ( 
select department, name, salary,
dense_rank() over (partition by department order by salary desc) as rank_in_dept
from employees ) e
where rank_in_dept <=3;