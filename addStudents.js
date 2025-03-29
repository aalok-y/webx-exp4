const axios = require("axios");

const students = [
    { name: "Alok", age: 21, grade: "O" },
    { name: "Riya", age: 22, grade: "A" },
    { name: "Manish", age: 20, grade: "B" },
    { name: "Sanya", age: 23, grade: "O" },
    { name: "Rahul", age: 24, grade: "C" },
    { name: "Priya", age: 19, grade: "A+" },
    { name: "Amit", age: 25, grade: "B+" },
    { name: "Kunal", age: 22, grade: "O" },
    { name: "Neha", age: 21, grade: "A" },
    { name: "Vikram", age: 23, grade: "B" }
];

const url = "http://localhost:3000/students";

const sendPostRequest = async (student) => {
    try {
        const response = await axios.post(url, student);
        console.log(`Added: ${response.data.name}`);
    } catch (error) {
        console.error(`Error adding ${student.name}:`, error.message);
    }
};

const addStudents = async () => {
    for (const student of students) {
        await sendPostRequest(student);
    }
};

addStudents();
