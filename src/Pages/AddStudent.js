import React, { useState } from "react";
import { useSchoolContext } from "../SchoolContext";
import { useNavigate } from "react-router-dom";
import "./AddStudent.css";

function AddStudent() {
  const { addStudent } = useSchoolContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Batch: "",
    Qualification: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Check if all fields are filled before adding a new student
    if (
      formData.Name &&
      formData.Email &&
      formData.Batch &&
      formData.Qualification &&
      formData.id
    ) {
      const newStudent = { ...formData };

      // Add the new student to the context
      addStudent(newStudent);

      // Clear the form after adding the student
      setFormData({
        Name: "",
        Email: "",
        Batch: "",
        Qualification: "",
        id: "",
      });
    } else {
      // Display an error message or validation message if any field is missing
      console.error("Please fill in all fields.");
    }

    navigate("/students-list");
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
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
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
