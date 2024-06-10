import React, { useState } from "react";
import "./form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNo: "",
    mode: {
      mail: false,
      phone: false,
    },
    maritalStatus: "",
    joiner: "",
  });

  const [tableData, setTableData] = useState([]);

  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        mode: {
          ...formData.mode,
          [event.target.name]: checked,
        },
      });
    } else {
      setFormData(() => ({
        ...formData,
        [name]: value,
      }));
    }
  };
  const resetForm = () => {
    setFormData(() => ({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      email: "",
      phoneNo: "",
      mode: {
        mail: false,
        phone: false,
      },
      maritalStatus: "",
      joiner: "",
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTableData([...tableData, formData]);
    resetForm();
    
  };
  console.log("tableData", tableData);

  const deleteRow = (index) =>{
    
  }

  return (
    <>
    <h1>Employee Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-main">
          <label htmlFor="firstName" className="form-label">
            First Name:{" "}
          </label>
          <input
            className="form-data"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-main">
          <label htmlFor="middleName" className="form-label">
            Middle Name:{" "}
          </label>
          <input
            className="form-data"
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-main">
          <label htmlFor="lastName" className="form-label">
            Last Name:{" "}
          </label>
          <input
            className="form-data"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="form-main">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <br />
          <div>
            <div>
              <input
                type="radio"
                className="align"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={onChangeHandler}
                required
              />
              <label htmlFor="male" className="form-label">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="align"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={onChangeHandler}
                required
              />
              <label htmlFor="female" className="form-label">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="align"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={onChangeHandler}
              />
              <label htmlFor="other" className="form-label">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="form-main">
          <label htmlFor="email" className="form-label">
            Email:{" "}
          </label>
          <input
            className="form-data"
            type="email"
            name="email"
            checked={formData.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-main">
          <label htmlFor="phoneNo" className="form-label">
            Phone Number:{" "}
          </label>
          <input
            className="form-data"
            type="number"
            name="phoneNo"
            checked={formData.phoneNo}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-main">
          <label htmlFor="mode" className="form-label">
            Mode of Contact{" "}
          </label>
          <br />
          <div>
          <div>
            <input
              type="checkbox"
              className="align"
              name="phone"
              value="phoneNo"
              checked={formData.mode.phone}
              onChange={onChangeHandler}
            />
            <label htmlFor="phone" className="form-label">
               Phone Number
            </label>
            <input
              type="checkbox"
              className="align"
              name="mail"
              value="email"
              checked={formData.mode.mail}
              onChange={onChangeHandler}
            />
            <label htmlFor="mail" className="form-label">
               Email
            </label>
          </div>
          </div>
        </div>
        <div className="form-main">
          <label htmlFor="maritalStatus" className="form-label">
            Marital Status
          </label>
          <select
            className="form-select"
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={onChangeHandler}
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divoreced">Divoreced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="form-main">
          <label htmlFor="joiner" className="form-label">
            Immediate Joiner
          </label>
          <div>
            <input
              type="radio"
              name="joiner"
              value="Yes"
              checked={formData.joiner === "Yes"}
              onChange={onChangeHandler}
              required
            />
            <label htmlFor="Yes" className="form-label">
              Yes
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="joiner"
              value="No"
              checked={formData.joiner === "No"}
              onChange={onChangeHandler}
              required
            />
            <label htmlFor="No" className="form-label">
              No
            </label>
          </div>
        </div>
        <div className="form-main">
          <button type="submit" className="btn">
            Submit
          </button>
          <button type="button" className="btn" onClick={resetForm}>
            Clear
          </button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>MiddleName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <th>Mode</th>
            <th>MaritalStatus</th>
            <th>Im-Joiner</th>
            <th>Edit/Delet</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => 
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.middleName}</td>
              <td>{data.lastName}</td>
              <td>{data.gender}</td>
              <td>{data.email}</td>
              <td>{data.phoneNo}</td>
              <td>
                {data.mode.phone && "Phone"}
                {data.mode.mail && "Email"}
              </td>
              <td>{data.maritalStatus}</td>
              <td>{data.joiner}</td>
              <td>
                <button>Edit</button>
                <button onClick={deleteRow}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
