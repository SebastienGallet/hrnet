import React, { useState } from "react";
import Header from "../components/header";
import CreateEmployee from "../components/create";
import EmployeeList from "../components/list";

function Home() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <div>
      <Header />
      <CreateEmployee onAddEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default Home;
