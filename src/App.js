import logo from "./logo.svg";
import "./App.css";
import "./vendor/fontawesome-free/css/all.min.css";
import { useState } from "react";

import Dashboard from "./Components/Dashboard";
import { Route, Routes } from "react-router-dom";

import AddStudent from "./Pages/AddStudent";
import AddTeachers from "./Pages/AddTeachers";
import StudentsList from "./Components/StudentsList";
import TeachersList from "./Components/TeachersList";
import EditStudent from "./Pages/EditStudent";
import EditTeacher from "./Pages/EditTeacher";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/students-list" element={<StudentsList />} />
      <Route path="/teachers-list" element={<TeachersList />} />
      <Route path="/addStudents" element={<AddStudent />} />
      <Route path="/addTeacher" element={<AddTeachers />} />
      <Route path="/edit-student/:id" element={<EditStudent />} />
      <Route path="/edit-teacher/:id" element={<EditTeacher />} />

    </Routes>
  );
}

export default App;
