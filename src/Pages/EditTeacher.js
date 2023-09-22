import React, { useState } from "react";
import { useSchoolContext } from "../SchoolContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import "./AddStudent.css";

function EditTeacher() {
  const { teachers, editTeacher } = useSchoolContext();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the student ID from the URL parameters

  const teacherToEdit = teachers.find((teacher) => teacher.id === id);

  const [formData, setFormData] = useState(teacherToEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    editTeacher(id, formData);

    // Redirect back to the list of students
    navigate("/teachers-list");
  };

  return (
    <div className="container">
      <h2>Edit Teacher</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Batch:</label>
          <input
            type="text"
            name="Batch"
            value={formData.Batch}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Qualification</label>
          <input
            type="text"
            name="Qualification"
            value={formData.Qualification}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="button" type="button" onClick={handleSubmit}>
            Update Teacher
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTeacher;
