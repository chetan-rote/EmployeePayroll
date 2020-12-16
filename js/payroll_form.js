window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayroll()).name = name.value;
            textError.textContent = "";
        }
        catch (message) {
            textError.textContent = message;
        }
    });
    
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output")
    output.textContent = salary.value;
    salary.addEventListener("input", function () {
        output.textContent = salary.value;
    });
});

function save(){
    try{
        let employeePayroll = createEmployeePayroll();
    }
    catch(message){
        alert(message);
        return;
    }
}

function createEmployeePayroll(){
    let employeePayroll = new EmployeePayroll();
    employeePayroll.name = getInputValueById('#name');
    employeePayroll.profilePic = getSelectedValues('[name = profilePic]').pop();
    employeePayroll.gender = getSelectedValues('[name = gender]').pop();
    employeePayroll.department = getSelectedValues('[name = department]');
    employeePayroll.salary = getInputValueById('#salary');
    employeePayroll.note = getInputValueById('#note');
    let date = getInputValueById('#year') + "-" + getInputValueById('#month') + "-" + getInputValueById('#day');
    employeePayroll.startDate = new Date(date);
    alert(employeePayroll.toString());
    return employeePayroll;
}

function getSelectedValues(propertyValue){
    let allItems = document.querySelector(propertyValue);
    let selectedItems = [];
    allItems.forEach(item => {
        if(item.checked)
        selectedItems.push(item.value);
    });
    return selectedItems;
}

function getInputValueById(id){
    let value = document.querySelector(id).value;
    return value;
}