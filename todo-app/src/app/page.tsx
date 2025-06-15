'use client';

import Link from 'next/link';
import { useState } from "react";

class Student {
  constructor(name, num) {
    this.name = name;
    this.num = num;
  }
}

export default function TodoApp() {
  const [students, setStudents] = useState([]);
  const [inputName, setInputName] = useState("");

  function addStudent() {
    if (inputName.trim() === "") return; // Prevent adding empty names
    const newstudent = new Student(inputName, students.length + 1);
    setStudents([...students, newstudent]);
    setInputName(""); // Clear input after adding
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link href="/remove">
  <button>Go to Remove Page</button>
</Link>

      <h1>Number List</h1>
      
      <input
        type="text"
        placeholder="Enter student name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <ul>
        {students.map((student, idx) => (
          <li key={idx}>{student.name} is the {student.num} student</li>
        ))}
      </ul>
    </div>
  );
}
