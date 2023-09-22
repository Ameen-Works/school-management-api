import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const SchoolContext = createContext();

// Create a custom hook to access the context
export function useSchoolContext() {
  return useContext(SchoolContext);
}

// Create a context provider component
export function SchoolProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const addStudent = (student) => {
    // Create the request options for the POST request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student), // Convert the student object to JSON
    };

    // Send the POST request to the API
    fetch(
      "https://650ddd5da8b42265ec2cc619.mockapi.io/directory/students",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // The student was successfully added to the API
          return response.json();
        } else {
          // Handle the error here (e.g., display an error message)
          throw new Error("Failed to add student");
        }
      })
      .then((data) => {
        // The data variable contains the response from the API if needed
        console.log("Student added successfully:", data);

        // Now, update the local state with the new student
        setStudents([student, ...students]);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error adding student:", error);
      });
  };

  const addTeacher = (teacher) => {
    // Create the request options for the POST request
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher), // Convert the student object to JSON
    };

    // Send the POST request to the API
    fetch(
      "https://650ddd5da8b42265ec2cc619.mockapi.io/directory/teachers",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // The student was successfully added to the API
          return response.json();
        } else {
          // Handle the error here (e.g., display an error message)
          throw new Error("Failed to add Teacher");
        }
      })
      .then((data) => {
        // The data variable contains the response from the API if needed
        console.log("Teacher added successfully:", data);

        // Now, update the local state with the new student
        setTeachers([teacher, ...teachers]);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error adding Teacher:", error);
      });
  };

  const fetchDataFromAPI = async () => {
    try {
      // Fetch student data from the API
      const studentResponse = await fetch(
        "https://650ddd5da8b42265ec2cc619.mockapi.io/directory/students"
      );
      const studentData = await studentResponse.json();

      // Fetch teacher data from the API
      const teacherResponse = await fetch(
        "https://650ddd5da8b42265ec2cc619.mockapi.io/directory/teachers"
      );
      const teacherData = await teacherResponse.json();

      // Update the students and teachers states with the fetched data
      setStudents(studentData);
      setTeachers(teacherData);
    } catch (error) {
      console.error("Error fetching data from the API:", error);
    }
  };

  // Usage within your SchoolProvider component
  useEffect(() => {
    // Call the fetchDataFromAPI function when the component mounts
    fetchDataFromAPI();
  }, []);

  const deleteStudent = (studentId) => {
    // Create the request options for the DELETE request
    const requestOptions = {
      method: "DELETE",
    };

    // Send the DELETE request to the API
    fetch(
      `https://650ddd5da8b42265ec2cc619.mockapi.io/directory/students/${studentId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // The student was successfully deleted from the API
          return response.json();
        } else {
          // Handle the error here (e.g., display an error message)
          throw new Error("Failed to delete student");
        }
      })
      .then((data) => {
        // The data variable contains the response from the API if needed
        console.log("Student deleted successfully:", data);

        // Now, update the local state by removing the deleted student
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== studentId)
        );
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error deleting student:", error);
      });
  };

  const deleteTeacher = (teacherId) => {
    // Create the request options for the DELETE request
    const requestOptions = {
      method: "DELETE",
    };

    // Send the DELETE request to the API
    fetch(
      `https://650ddd5da8b42265ec2cc619.mockapi.io/directory/teachers/${teacherId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // The student was successfully deleted from the API
          return response.json();
        } else {
          // Handle the error here (e.g., display an error message)
          throw new Error("Failed to delete teacher");
        }
      })
      .then((data) => {
        // The data variable contains the response from the API if needed
        console.log("teacher deleted successfully:", data);

        // Now, update the local state by removing the deleted student
        setTeachers((prevTeachers) =>
          prevTeachers.filter((teacher) => teacher.id !== teacherId)
        );
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error deleting Teacher:", error);
      });
  };

  const editStudent = (studentId, updatedData) => {
    // Create the request options for the PUT request
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };

    // Send the PUT request to the API
    fetch(
      `https://650ddd5da8b42265ec2cc619.mockapi.io/directory/students/${studentId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // The student data was successfully updated in the API
          return response.json();
        } else {
          // Handle the error here (e.g., display an error message)
          throw new Error("Failed to edit student");
        }
      })
      .then((data) => {
        // The data variable contains the response from the API if needed
        console.log("Student edited successfully:", data);

        // Now, update the local state with the edited student data
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student.id === studentId ? { ...student, ...updatedData } : student
          )
        );
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error editing student:", error);
      });
  };

  const editTeacher = (teacherId, updatedData) => {
    // Create the request options for the PUT request
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    };

    // Send the PUT request to the API
    fetch(
      `https://650ddd5da8b42265ec2cc619.mockapi.io/directory/teachers/${teacherId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // The student data was successfully updated in the API
          return response.json();
        } else {
          // Handle the error here (e.g., display an error message)
          throw new Error("Failed to edit teacher");
        }
      })
      .then((data) => {
        // The data variable contains the response from the API if needed
        console.log("Teacher edited successfully:", data);

        // Now, update the local state with the edited student data
        setTeachers((prevTeachers) =>
          prevTeachers.map((teacher) =>
            teacher.id === teacherId ? { ...teacher, ...updatedData } : teacher
          )
        );
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Error editing teacher:", error);
      });
  };

  return (
    <SchoolContext.Provider
      value={{
        students,
        teachers,
        addStudent,
        addTeacher,
        fetchDataFromAPI,
        deleteStudent,
        deleteTeacher,
        editStudent,
        editTeacher,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
}
