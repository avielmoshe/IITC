import { utils } from "./utils.js";
const EMPLOYEE_STORAGE_KEY = "employee";
let gEmployees = utils.getFromStorage(EMPLOYEE_STORAGE_KEY) || [];

const tableBody = document.getElementById("table-body");
const amount = document.getElementById("amount");

function renderTable() {
  const afterFilter = filterEmployee();
  tableBody.innerHTML = "";
  for (let i = 0; i < afterFilter.length; i++) {
    let newRow = tableBody.insertRow(i);
    newRow.setAttribute("id", "row-" + afterFilter[i].id);
    for (let j = 0; j < Object.values(afterFilter[i]).length - 1; j++) {
      newRow.insertCell(j).innerHTML = Object.values(afterFilter[i])[j];
    }
    const removeBut = document.createElement("button");
    newRow.appendChild(removeBut);
    removeBut.addEventListener("click", () => {
      removeEmployee(i);
    });
    removeBut.textContent = "remove";
    const editBut = document.createElement("button");
    newRow.appendChild(editBut);
    editBut.addEventListener("click", () => editEmployee(newRow));
    editBut.textContent = "Edit";
  }
  amount.textContent = afterFilter.length;
}

renderTable();

const employeesForm = document.getElementById("employees-form");
employeesForm.addEventListener("submit", addEmployee);

function addEmployee(event) {
  event.preventDefault();
  console.log(event);

  const newEmployee = {
    firstName: event.target[0].value,
    lastName: event.target[1].value,
    age: event.target[2].value,
    startDate: event.target[5].value,
    department: event.target[3].value,
    salary: event.target[4].value,
    id: utils.makeId(),
  };

  gEmployees.push(newEmployee);

  employeesForm.reset();
  renderTable();
}

function removeEmployee(itemIndex) {
  gEmployees.splice(itemIndex, 1);
  renderTable();
}

let currentlyEditingRow = null;
function editEmployee(newRow) {
  if (currentlyEditingRow && currentlyEditingRow !== newRow) {
    saveEmployee(currentlyEditingRow);
  }

  if (currentlyEditingRow === newRow) {
    saveEmployee(newRow);
    currentlyEditingRow = null;
  } else {
    currentlyEditingRow = newRow;
    newRow.querySelectorAll("td").forEach((cell, index) => {
      const currentCellText = cell.innerText;
      if (!cell.querySelector("input")) {
        const input = document.createElement("input");
        input.classList.add("input-edit");
        input.type = "text";
        input.value = currentCellText;
        cell.innerHTML = "";
        cell.appendChild(input);
      }
    });
  }
}
function saveEmployee(row) {
  const employeeId = row.id.split("-")[1];
  const employeeIndex = gEmployees.findIndex((emp) => emp.id === employeeId);
  row.querySelectorAll("td").forEach((cell, index) => {
    const input = cell.querySelector("input");
    if (input) {
      gEmployees[employeeIndex][Object.keys(gEmployees[employeeIndex])[index]] =
        input.value;
      cell.innerHTML = input.value;
    }
  });
}

const salaryInputMin = document.getElementById("salary-filter-min");
const salaryValueMin = document.getElementById("salary-value-min");
const salaryInputMax = document.getElementById("salary-filter-max");
const salaryValueMax = document.getElementById("salary-value-max");
const ageValue = document.getElementById("age-value");
const ageInput = document.getElementById("age-filter");
const filterBut = document.getElementById("Filter");
const getAllBtn = document.getElementById("get-all");

salaryInputMin.addEventListener("input", function () {
  salaryValueMin.textContent = salaryInputMin.value + "$";
});
salaryInputMax.addEventListener("input", function () {
  salaryValueMax.textContent = salaryInputMax.value + "$";
});
ageInput.addEventListener("input", function () {
  ageValue.textContent = ageInput.value;
});

filterBut.addEventListener("click", () => {
  filterEmployee, renderTable();
});
getAllBtn.addEventListener("click", function () {
  clearFilter();
  renderTable();
});

function clearFilter() {
  document.getElementById("firstName-filter").value = "";
  document.getElementById("lastName-filter").value = "";
  document.getElementById("department-filter").value = "";
  document.getElementById("salary-filter-min").value = "0";
  document.getElementById("salary-value-min").textContent = "";
  document.getElementById("salary-filter-max").value = "99000";
  document.getElementById("salary-value-max").textContent = "";
  document.getElementById("age-filter").value = "16";
  document.getElementById("age-value").textContent = "";
}

function filterEmployee() {
  let employeeFilter = [...gEmployees];
  const firstNameValue = document
    .getElementById("firstName-filter")
    .value.toLowerCase();
  const lastNameValue = document
    .getElementById("lastName-filter")
    .value.toLowerCase();
  const departmentValue = document.getElementById("department-filter").value;
  const salaryValueMin = document.getElementById("salary-filter-min").value;
  const salaryValueMax = document.getElementById("salary-filter-max").value;
  const ageValue = document.getElementById("age-filter").value;

  if (firstNameValue) {
    employeeFilter = employeeFilter.filter(
      (currentItem) => currentItem.firstName.toLowerCase() === firstNameValue
    );
  }
  if (lastNameValue) {
    employeeFilter = employeeFilter.filter(
      (currentItem) => currentItem.lastName.toLowerCase() === lastNameValue
    );
  }
  if (departmentValue) {
    employeeFilter = employeeFilter.filter(
      (currentItem) => currentItem.department === departmentValue
    );
  }
  if (salaryValueMin) {
    employeeFilter = employeeFilter.filter(
      (currentItem) => currentItem.salary >= salaryValueMin
    );
  }

  if (salaryValueMax) {
    employeeFilter = employeeFilter.filter(
      (currentItem) => currentItem.salary <= salaryValueMax
    );
  }
  if (ageValue) {
    employeeFilter = employeeFilter.filter((currentItem) => {
      return currentItem.age >= ageValue;
    });
  }

  return employeeFilter;
}
