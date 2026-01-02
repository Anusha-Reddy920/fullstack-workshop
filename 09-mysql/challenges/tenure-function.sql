DELIMITER $$

create function GetTenureCategory(hire_date date)
returns varchar(20)
deterministic
begin
    declare years_worked int;
	set years_worked = timestampdiff(year, hire_date, curdate());

    return
        case
            when years_worked > 5 then 'Veteran'
            when years_worked between 2 and 5 then 'Experienced'
            else 'New Hire'
        end;
end$$

DELIMITER ;

select name, hire_date, GetTenureCategory(hire_date) AS tenure_category
from employees
order by hire_date;