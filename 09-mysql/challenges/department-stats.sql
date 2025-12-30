select department, count(*) AS employee_count, round(avg(salary), 2) AS avg_salary, max(salary) AS max_salary
from employees
group by department
having count(*) > 2;