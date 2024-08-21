select ProductID,
ProductName
from Products
order by ProductName

select CategoryID,
SUM(UnitPrice)
from Products
group by CategoryID

select CategoryID,
max(UnitPrice),
MIN(UnitPrice)
from Products
group by CategoryID

select City,
CompanyName
from Customers
group by CompanyName


select CompanyName,
Region
from Customers

where Region is not null
order by Region


select 
SupplierID,
sum (UnitPrice),
sum (UnitsInStock) as sumOfUnitInStock,
COUNT(CategoryID)


from Products
group by SupplierID
having sum (UnitPrice)>50  and COUNT(CategoryID)>2
order by sumOfUnitInStock desc


