import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashboarPageContent() {
  const navigate = useNavigate();
  return (
    <div class="container-fluid">
      {/* <!-- Page Heading -->*/}
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div>
        <Grid container spacing={2}>
          {/* Student Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Student</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  // href="/list-students"
                  onClick={() => {
                    navigate("/addStudents");
                  }}
                >
                  ADD Student
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Teacher Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Teacher</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>{navigate("./addTeacher")}}
                >
                  Add Teacher
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DashboarPageContent;
