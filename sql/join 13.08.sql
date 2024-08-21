select ProductName,
CategoryName
from Products P join  Categories C
on P.CategoryID=C.CategoryID

select ProductName,
CompanyName
from Products P join  Suppliers S
on P.SupplierID=S.SupplierID

select
OrderID,
CompanyName
from Orders o join Customers c
on o.CustomerID=c.CustomerID
where CompanyName like 'a%'


select 
RegionDescription,
TerritoryDescription
from Region r join Territories t
on r.RegionID=t.RegionID

select ProductName,
UnitPrice,
CategoryName
from Products P join  Categories C
on P.CategoryID=C.CategoryID
where UnitPrice>50
order by UnitPrice

select ProductID,
UnitPrice,
SupplierID,
CategoryName
from Products P join  Categories C
on P.CategoryID=C.CategoryID
where  P.SupplierID=3
order by UnitPrice


select ProductID,
UnitPrice,
SupplierID,
CategoryName
from Products P join  Categories C
on P.CategoryID=C.CategoryID
where  CategoryName like '%a%'
order by UnitPrice

select ProductName,
CategoryName,
CompanyName
from Products P join  Categories C
on P.CategoryID=C.CategoryID
join Suppliers s
on p.SupplierID=s.SupplierID

select 
ProductName,
[Description],
s.City
from Products p join Categories c
on p.CategoryID=c.CategoryID
join Suppliers s
on p.SupplierID=s.SupplierID
where s.City in ('London' ,'Tokyo') 



select 
ProductID,
[Description],
s.Country

from Products p join Categories c
on p.CategoryID=c.CategoryID
join Suppliers s
on p.SupplierID=s.SupplierID
where s.Country like 'a%'


--11

select
c.CompanyName,
OrderID
from Customers c left join Orders o
on c.CustomerID =o.CustomerID


--12
select
OrderID,
OrderDate,
[ShipAddress],
c.CustomerID,
CompanyName,
Phone,
e.FirstName+' '+e.LastName as employFullName
from Customers c join Orders o
on c.CustomerID =o.CustomerID
join Employees e
on o.EmployeeID= e.EmployeeID
where OrderDate like '%1996%'
and (c.CustomerID like 'a%' or c.CustomerID like 'c%')
order by  OrderDate desc