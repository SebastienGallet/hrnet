import React, { useState } from "react";
import Header from "../components/header";
import CreateEmployee from "../components/create";
import EmployeeList from "../components/list";
import Modal from "../components/Modal"; 

function Home() {
  const [employees, setEmployees] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
    setShowModal(true);
  };

  return (
    <div>
      
      <Header onToggle={() => setShowList(!showList)} isListVisible={showList} />
      <main>
        {!showList ? (
          <CreateEmployee onAddEmployee={addEmployee} />
        ) : (
          <EmployeeList employees={employees} />
        )}
        <Modal show={showModal} onClose={() => setShowModal(false)} /> 
      </main>
    </div>
  );
}

export default Home;

