select a.name AS employee_name, b.name AS employee_name
from employees AS a
left join employees AS b
on a.manager_id = b.manager_id;
