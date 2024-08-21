--1
--select *
--from Orders

--2
--select *
--from Employees

--3
--select Region,
--HireDate,
--FirstName,
--Country
--from Employees

--4
--select OrderDate,
--OrderID,
--CustomerID
--from Orders


--5



--6


--7
--select CustomerID,
--Address+' '+City as fulladdress
--from Customers

--8
--select 
--FirstName+' ' +LastName as fullName,
--BirthDate+8,
--ReportsTo as #Manager


--from Employees

--9
--select distinct City
--from Employees

--10
--select distinct Country
--from Employees


--11
--select distinct Title
--from Employees

--12
--select 
--distinct Country+' '+City 
--from Customers

--13
--select FirstName,
--BirthDate,
--BirthDate+5
--from Employees

--14
--select ProductName,
--UnitPrice,UnitPrice+10 as newprice
--from Products

--15
--select ProductID,
--ProductName,
--UnitPrice*1.165 as newprice,
--UnitsInStock,
--UnitsOnOrder,
--UnitsInStock-UnitsOnOrder as newUnitInStock
--from Products


----16
--select ProductID,
--ProductName,
--UnitsInStock-UnitsOnOrder *UnitPrice as totalvalue
--from Products

