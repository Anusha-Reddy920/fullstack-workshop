select p.name as project_name, p.budget, count(distinct a.employee_id) as team_size, sum(a.hours_allocated) as total_hours
from projects as p
join assignments as a 
on p.id = a.project_id
where p.budget > 50000
group by p.id
order by total_hours desc;