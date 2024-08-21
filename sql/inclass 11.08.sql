
----select EmployeeID,

----City+' '+Country as location,
----FirstName+' '+LastName as fullName
----from Employees

----select 
----Quantity+2 as newquantity,
----UnitPrice*3 as newprice
----from [Order Details]

--select distinct EmployeeID
--from EmployeeTerritories

--select *
--from EmployeeTerritories
--where EmployeeID=2

select *
from EmployeeTerritories
where EmployeeID not between 2 and 5