--select ProductID,ProductName,UnitPrice
--from Products
--where UnitPrice between 10 and 20
--order by UnitPrice desc-- מהנמוך לגבוה

--select ProductID,ProductName,UnitPrice
--from Products
--where ProductName  in ('chai','chang')
--order by UnitPrice desc-- מהנמוך לגבוה

--select ProductID,ProductName,UnitPrice
--from Products
--where ProductName  like '%ch%' --includs 
--order by UnitPrice desc-- מהנמוך לגבוה

--select OrderID,
--ShipCountry
--from Orders
--where ShipCountry= 'USA'

--select ProductName,
--CategoryID,
--UnitPrice+9 as newPrice

--from Products
--where ProductName like '%c%'


--select *
--from Categories
--where CategoryID >3
--order by CategoryID desc


--select SUM(UnitPrice) as 'sum',
--MIN(UnitPrice) as 'min',
--MAX(UnitPrice) as'max',
--AVG(UnitPrice) as'avg',
--COUNT(UnitPrice) as 'count'


--from Products



--select SUM(Freight) as 'sum',
--MIN(Freight) as 'min',
--MAX(Freight) as'max',
--AVG(Freight) as'avg',
--COUNT(Freight) as 'count'
--from Orders


--select *
--from Products join Categories
--on Products.CategoryID=Categories.CategoryID

--select *
--from Employees

--select *
--from Orders

select FirstName,LastName,
City,
o.EmployeeID,
OrderID,
OrderDate
from Employees as e right join Orders as o
on e.EmployeeID=o.EmployeeID
