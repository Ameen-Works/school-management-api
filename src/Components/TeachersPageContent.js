import React from "react";
import { useSchoolContext } from "../SchoolContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TeachersPageContent() {
  const { teachers, deleteTeacher } = useSchoolContext();
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teachers List</h1>
      </div>
      <div className="row">
        {teachers.map((teacher, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div
                className="card-header bg-black text-white text-center"
                style={{ backgroundColor: "black" }}
              >
                {teacher.Name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {teacher.Email}</li>
                <li className="list-group-item">
                  Qualification: {teacher.Qualification}
                </li>
                <li className="list-group-item">Batch: {teacher.Batch}</li>
                <li className="list-group-item">ID: {teacher.id}</li>
                <Button
                  onClick={() => {
                    navigate(`/edit-teacher/${teacher.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    deleteTeacher(teacher.id);
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

export default TeachersPageContent;
