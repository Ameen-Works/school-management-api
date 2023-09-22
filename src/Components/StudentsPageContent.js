import React, { useEffect } from "react";
import { useSchoolContext } from "../SchoolContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function StudentsPageContent() {
  const { students, deleteStudent } = useSchoolContext();
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-4 text-gray-800">Students List</h1>

      <div className="row">
        {students.map((student, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div
                className="card-header bg-black text-white text-center"
                style={{ backgroundColor: "black" }}
              >
                {student.Name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {student.Email}</li>
                <li className="list-group-item">
                  Qualification: {student.Qualification}
                </li>
                <li className="list-group-item">Batch: {student.Batch}</li>
                <li className="list-group-item">ID: {student.id}</li>
                <Button
                  onClick={() => {
                    navigate(`/edit-student/${student.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    deleteStudent(student.id);
                  }}
                >
                  Delete
                </Button>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPageContent;
