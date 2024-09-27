import { employeeService } from "./employee.service.js";

const tableBody = document.getElementById("table-body");
const amount = document.getElementById("amount");
const employeesForm = document.getElementById("employees-form");
const salaryInputMin = document.getElementById("salary-filter-min");
const salaryValueMin = document.getElementById("salary-value-min");
const salaryInputMax = document.getElementById("salary-filter-max");
const salaryValueMax = document.getElementById("salary-value-max");
const ageValue = document.getElementById("age-value");
const ageInput = document.getElementById("age-filter");
const filterBut = document.getElementById("Filter");
const getAllBtn = document.getElementById("get-all");

function renderTable() {
  const afterFilter = employeeService.filterEmployee();
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
      employeeService.removeEmployee(i);
      renderTable();
    });
    removeBut.textContent = "remove";
    const editBut = document.createElement("button");
    newRow.appendChild(editBut);
    editBut.addEventListener("click", () =>
      employeeService.editEmployee(newRow)
    );
    editBut.textContent = "Edit";
  }
  amount.textContent = afterFilter.length;
}

employeesForm.addEventListener("submit", function (event) {
  employeeService.addEmployee(event);
  renderTable();
});
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
  employeeService.filterEmployee, renderTable();
});
getAllBtn.addEventListener("click", function () {
  employeeService.clearFilter();
  renderTable();
});

renderTable();
