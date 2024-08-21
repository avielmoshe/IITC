insert into Products(ProductName,UnitPrice)
values ('baba',50)

select ProductName,
UnitPrice
from Products

update Products
set ProductName='dada',UnitPrice=60
where ProductName='baba'

select ProductName,
UnitPrice
from Products


delete from Products where ProductName= 'dada'
select ProductName
from Products

select ProductName,
UnitPrice
from Products

CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

select *
from Persons

drop table Persons


alter table [Profiles]
add act varchar(255)

select *
from Products

alter table [Profiles]
drop COLUMN act


CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;

exec SelectAllCustomers