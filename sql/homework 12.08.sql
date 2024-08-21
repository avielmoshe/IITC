select FirstName,LastName
from Employees
where EmployeeID=3

select 
ProductName,
UnitPrice
from Products
where ProductID=4

select ProductID,
ProductName,
UnitPrice
from Products
where UnitPrice>20 
order by UnitPrice desc

select FirstName+' '+LastName as fullName,
BirthDate,
ReportsTo

from Employees
where EmployeeID=8


select EmployeeID,
FirstName+' '+LastName as fullName,
BirthDate
from Employees
where City='london'


select *
from Products
where UnitPrice between 50 and 100

select ProductName,
UnitPrice

from Products
where UnitPrice between 21.35 and 43.9 
order by UnitPrice desc


select EmployeeID,
LastName,
HireDate
from Employees
where city in('london','tacoma')



select EmployeeID,
FirstName,
LastName,
BirthDate
from Employees
where EmployeeID in(1,2,5)

select EmployeeID,
FirstName,
LastName,
BirthDate
from Employees
where EmployeeID not in(4,5,7)


select ProductID,
ProductName,
CategoryID

from Products
where CategoryID not in (1,2,7)
order by CategoryID


select FirstName,
Region

from Employees
where Region is null

select top 3 ProductName,
UnitPrice
from Products


select OrderID,
OrderDate,
RequiredDate

from Orders
WHERE RequiredDate>'1996-10-01'

select EmployeeID,
LastName,
ReportsTo
from Employees
where ReportsTo is not null


select *
from Categories
where CategoryName like '%o%'

select CompanyName,
Country
from Customers
where Country like 'a%'

select ProductName,
CategoryID
from Products
where ProductName like '%a_'

select OrderID,
CustomerID,
EmployeeID,
OrderDate
from Orders
where OrderDate between '1997-04-01'and '1997-05-01'

select CustomerID,
CompanyName,
Country,
Phone,
Region
from Customers
where (Country like  'm%'
or Country like'g%'
or Country like'f%')
and Region is  null


--21
select EmployeeID,
FirstName+' '+LastName as fullName,
BirthDate,
Country
from Employees
where (LastName like '%k%' or LastName like '%d%') or BirthDate like '%1963%'

select ProductName,
UnitPrice,
SupplierID
from Products
where UnitPrice >30 and SupplierID in (1,3)


--23
select OrderID,
EmployeeID,
OrderDate,
RequiredDate,
ShipName
from Orders
where EmployeeID=7 and ShipName in ('Country like','Country like','Eastern Connection')and 20+OrderDate<RequiredDate

24
select ProductID,
ProductName,
SupplierID,
UnitPrice,
UnitsInStock
from Products
where (UnitsInStock not between 10 and 100) and (SupplierID in (8,16,21) )or( UnitPrice<10 )
order by UnitPrice