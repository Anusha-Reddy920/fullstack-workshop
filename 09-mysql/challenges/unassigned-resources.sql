select e.id, e.name, e.department
from employees as e
left join assignments as a
on e.id = a.employee_id
where a.project_id is null
order by e.id;