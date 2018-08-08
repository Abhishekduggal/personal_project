select hr.facilityname, count(hr.name)
from hr_users_pp hr
GROUP BY hr.facilityname