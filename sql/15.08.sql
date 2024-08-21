--1

select ProductName
from Products
where UnitPrice<(
select UnitPrice
from Products
where ProductID=8
)

--2
select ProductName,
UnitPrice
from Products
where UnitPrice>(
select
UnitPrice
from Products
where ProductName='tofu'

)
--3
select
FirstName,
HireDate
from Employees
where HireDate>(
select
HireDate
from Employees
where EmployeeID=6
)

--4
select ProductID,
ProductName,
UnitPrice
from Products
where UnitPrice>(
select avg(UnitPrice)
from Products
)

--5
select ProductName,
UnitsInStock
from Products
where UnitsInStock<(
select
min(UnitsInStock)
from Products
where CategoryID=5
)

--6
select *
from Products
where CategoryID=(
select
CategoryID
from Products
where ProductName='chai'
) and ProductName != 'chai'

--7
select ProductName,
UnitPrice,
CategoryID
from Products
where UnitPrice in (
select UnitPrice
from Products
where CategoryID=5
)

--8
select ProductName,
UnitPrice,
CategoryID
from Products
where UnitPrice > any (
select UnitPrice
from Products
where CategoryID=5
)

--9
select ProductName,
UnitPrice,
CategoryID
from Products
where UnitPrice > all (
select UnitPrice
from Products
where CategoryID=5
)


--10
select
OrderID,
OrderDate
from Orders
where CustomerID in (
select 
CustomerID
from Customers
where Country in ('germany','france','sweden')
 )and OrderDate like '%1997%'


 --11
 select ProductName,
 ProductID
 from Products
 where UnitPrice> (
 select
 avg (UnitPrice)
 from Products
 where UnitsInStock>50
 
 )


 --12

 select
ProductName
 from Products
 where CategoryID in (
 select
 CategoryID
 from Categories
 where CategoryName in ('condiments','beverages')
 ) and SupplierID in (
 select
 SupplierID
 from Suppliers
 where Region is null
 
 )

 --13

