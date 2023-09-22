import React, { useState } from "react";
import { useSchoolContext } from "../SchoolContext";
import { useNavigate, useParams } from "react-router-dom";
import "./AddStudent.css";

function EditStudent() {
  const { students, editStudent } = useSchoolContext();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the student ID from the URL parameters

  const studentToEdit = students.find((student) => student.id === id);

  const [formData, setFormData] = useState(studentToEdit);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    editStudent(id, formData);

    navigate("/students-list");
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
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
            Update Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
