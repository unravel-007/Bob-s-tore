// List of employees with their names and departments

const employees = [

    { name: 'John Doe', department: 'HR' },

    { name: 'Jane Smith', department: 'Engineering' },

    { name: 'Bob Johnson', department: 'Markets' },

    { name: 'Alice Brown', department: 'Engineering' },

    { name: 'Charlie Davis', department: 'HR' },

    { name: 'Eve Wilson', department: 'Markets' }

];
 
// Function to render the employee list based on the selected department

function filterDepartment(department) {

    const employeeListDiv = document.getElementById('employee-list');

    employeeListDiv.innerHTML = ''; // Clear previous list
 
    // Filter employees based on the selected department

    const filteredEmployees = department === 'All' ? employees : employees.filter(employee => employee.department === department);
 
    // Display the filtered employees

    filteredEmployees.forEach((employee, index) => {

        // Create a card for each employee

        const employeeItem = document.createElement('div');

        employeeItem.classList.add('col-md-4'); // 3 blocks per row

        employeeItem.classList.add('mb-3');
 
        employeeItem.innerHTML = `
<div class="card">
<div class="card-body">
<h5 class="card-title">${employee.name}</h5>
<p class="card-text">Department: ${employee.department}</p>
</div>
</div>

        `;

        employeeListDiv.appendChild(employeeItem);

    });

}
 
// Initially load all employees

filterDepartment('All');

 