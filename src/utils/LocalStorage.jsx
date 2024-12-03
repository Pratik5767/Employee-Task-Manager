const employees = [
    {
        "id": 1,
        "firstname": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failedTask": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Complete onboarding",
                "taskDescription": "Finish the onboarding process within a week.",
                "taskDate": "2024-12-05",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Setup workstation",
                "taskDescription": "Setup your development environment.",
                "taskDate": "2024-11-30",
                "category": "IT"
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Neha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 0,
            "failedTask": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Client presentation",
                "taskDescription": "Prepare the Q4 client presentation.",
                "taskDate": "2024-12-10",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Market research",
                "taskDescription": "Conduct research on market trends.",
                "taskDate": "2024-12-07",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Rahul",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": {
            "active": 3,
            "newTask": 3,
            "completedTask": 0,
            "failedTask": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the new feature code by teammates.",
                "taskDate": "2024-12-04",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Debugging",
                "taskDescription": "Debug the piece of code provided to you.",
                "taskDate": "2024-12-08",
                "category": "Testing"
            },
            {
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Integration",
                "taskDescription": "Integrate the new feature into the code.",
                "taskDate": "2024-12-11",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Sanya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 0,
            "completedTask": 1,
            "failedTask": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Submit report",
                "taskDescription": "Submit the monthly performance report.",
                "taskDate": "2024-11-28",
                "category": "Management"
            },
            {
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "Project planning",
                "taskDescription": "Plan the Q1 project roadmap.",
                "taskDate": "2024-12-08",
                "category": "Planning"
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Priya",
        "email": "employee5@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 1,
            "failedTask": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false,
                "taskTitle": "System upgrade",
                "taskDescription": "Upgrade the operating system to the latest version.",
                "taskDate": "2024-12-06",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false,
                "taskTitle": "Security audit",
                "taskDescription": "Complete the annual security audit.",
                "taskDate": "2024-11-25",
                "category": "Security"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    // if we want to save the data in the local storage ----> setItem();
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    // if we want to fetch the data from the local storage ---> getItem();
    // if you want data in array form then -------> parse();
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'))
    return { employees, admin };
}