import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import states from "./states";
import PikadayPicker from "./pikadayPicker";

function CreateEmployee({ onAddEmployee }) {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      firstName: e.target["first-name"].value,
      lastName: e.target["last-name"].value,
      dateOfBirth,
      startDate,
      street: e.target.street.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value,
      department: e.target.department.value,
    };

    onAddEmployee(employeeData);
  };

  return (
    <div className="create">
      <h2>Create Employee</h2>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <div className="profile-infos">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" id="last-name" />

          <div className="picker">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <PikadayPicker
              value={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
            />


            <label htmlFor="start-date">Start Date</label>
            <PikadayPicker
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <fieldset className="adress">
          <legend>Adress</legend>
          <label htmlFor="street">Street</label>
          <input type="text" name="street" id="street" />

          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />

          <label htmlFor="state">State</label>
          <select name="state" id="state">
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zip">Zip code</label>
          <input type="text" name="zip" id="zip" />
        </fieldset>

        <label htmlFor="department">Départment</label>
        <select name="department" id="department">
          <option value="engineering">Engineering</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
          <option value="hr">HR</option>
        </select>

        <button className="create-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateEmployee;
