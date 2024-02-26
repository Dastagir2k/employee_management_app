
// import  { useState } from "react";
// import "../App.css";
// import {  useNavigate } from "react-router-dom";


// const Form = () => {
//   // const [name, setName] = useState("");
//   // const [id, setId] = useState("");
//   // const [department, setDepartment] = useState("");
//   // const [dob, setDob] = useState("");
//   // const [gender, setGender] = useState("");
//   // const [designation, setDesignation] = useState("");
//   // const [salary, setSalary] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     id: "",
//     department: "",
//     dob: "",
//     gender: "",
//     designation: "",
//     salary: "",
//   });
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   // const navigate=useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
   

//     // Date of Birth validation (optional)

//     // If all validations pass, show success message
//     setSuccessMessage("Form submitted successfully!");
  

//     // Clear form fields and messages after successful submission
//     e.preventDefault();
//     // Navigate to the next page with form data
//     navigate("/form2", { state: formData });
//   }


//   return (
//     <div className="form-container">
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
            
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>ID</label>
//           <input
//             type="number"
           
//             onChange={handleChange}
            
//           />
//         </div>
//         <div className="form-group">
//           <label>Choose the Department:</label>
//           <select
//             name="department"
            
//             onChange={handleChange}
            
//           >
//             <option value="">Select Department</option>
//             <option value="volvo">CSE</option>
//             <option value="saab">IT</option>
//             <option value="mercedes">AIDS</option>
//             <option value="audi">CSBS</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>DOB</label>
//           <input
//             type="date"
//             onChange={handleChange}
           
//           />
//         </div>
//         <div className="form-group">
//           <label>Gender</label>
//           <input
//             type="radio"
//             value="male"
//             onChange={handleChange}
//             name="gender"
//           />
//           <label>Male</label>
//           <input
//             type="radio"
//             value="female"
//             onChange={handleChange}
            
//           />
//           <label>Female</label>
//         </div>
//         <div className="form-group">
//           <label>Designation</label>
//           <input
//             type="text"
//             onChange={handleChange}
           
//           />
//         </div>
//         <div className="form-group">
//           <label>Salary</label>
//           <input
//             type="number"
//             onChange={handleChange}
            
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit">Next Page</button>
//         </div>
//       </form>
//       {successMessage && (
//         <div className="success-message">{successMessage}</div>
//       )}
      
//     </div>
//   );
// };

// export default Form;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
const Form1 = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!name  || !department || !dob || !gender || !designation || !salary) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // If all validations pass, navigate to Form 2
    navigate("/form2", {
      state: { formData1: { name,  department, dob, gender, designation, salary } }
    });
  };

  return (
    <div className="form-container">
      <h1>Form 1</h1>
      <form onSubmit={handleSubmit}>
        {/* Form1 inputs */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
       
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Next</button>
        </div>
      </form>
      {errorMessage && (
        <div className="error-message text-danger">{errorMessage}</div>
      )}
    </div>
  );
};

export default Form1;
