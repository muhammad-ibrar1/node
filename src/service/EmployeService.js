 var employees =[
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "position": "Software Engineer",
        "salary": 75000,
        "department": "Engineering"
    },
    {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "position": "Project Manager",
        "salary": 85000,
        "department": "Management"
    },
    {
        "id": 3,
        "firstName": "Michael",
        "lastName": "Brown",
        "email": "michael.brown@example.com",
        "position": "Data Scientist",
        "salary": 90000,
        "department": "Data"
    },
    {
        "id": 4,
        "firstName": "Emily",
        "lastName": "Davis",
        "email": "emily.davis@example.com",
        "position": "UX Designer",
        "salary": 70000,
        "department": "Design"
    },
    {
        "id": 5,
        "firstName": "Chris",
        "lastName": "Wilson",
        "email": "chris.wilson@example.com",
        "position": "DevOps Engineer",
        "salary": 80000,
        "department": "Engineering"
    },
    {
        "id": 6,
        "firstName": "Sarah",
        "lastName": "Lee",
        "email": "sarah.lee@example.com",
        "position": "HR Specialist",
        "salary": 60000,
        "department": "Human Resources"
    },
    {
        "id": 7,
        "firstName": "David",
        "lastName": "Martinez",
        "email": "david.martinez@example.com",
        "position": "Marketing Manager",
        "salary": 75000,
        "department": "Marketing"
    },
    {
        "id": 8,
        "firstName": "Laura",
        "lastName": "Garcia",
        "email": "laura.garcia@example.com",
        "position": "Business Analyst",
        "salary": 80000,
        "department": "Business"
    },
    {
        "id": 9,
        "firstName": "James",
        "lastName": "Miller",
        "email": "james.miller@example.com",
        "position": "IT Support Specialist",
        "salary": 55000,
        "department": "IT"
    },
    {
        "id": 10,
        "firstName": "Linda",
        "lastName": "Anderson",
        "email": "linda.anderson@example.com",
        "position": "Accountant",
        "salary": 65000,
        "department": "Finance"
    }
];


class Employee{
    allEmployees(){
        return employees;

    }
    findEmployee(id)
    {
        return employees.find(obj => obj.id === id);
    }
    Update(id,updatedData)
    {
        const index = employees.findIndex(employee => employee.id === id);
        if (index !== -1) {
            employees[index] = { ...employees[index], ...updatedData };
            return employees[index];
        }
    }
} 


module.exports = Employee;