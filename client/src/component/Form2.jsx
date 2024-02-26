










// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Axios from "axios";

// const Form2 = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [experience, setExperience] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [number, setNumber] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     if (!experience || !email || !address || !number) {
//       setErrorMessage("Please fill in all fields.");
//       return;
//     }

//     // Experience validation
//     if (experience.length > 10) {
//       setErrorMessage("Experience must be 10 characters or less.");
//       return;
//     }

//     // If all validations pass, show success message
//     setSuccessMessage("Form submitted successfully!");

//     // Combine Form1 and Form2 data
//     const formData1 = location.state;
//     const combinedData = { ...formData1, experience, email, address, number };

//     try {
//       // Send combined data to backend
//       await Axios.post("http://localhost:6060/employees", combinedData);
//       console.log("Data sent successfully!");

//       // Clear form fields and messages after successful submission
//       clearForm();

//       // Redirect to home page or wherever needed
//       navigate("/");
//     } catch (error) {
//       console.error("Error sending data:", error);
//       setErrorMessage("Error sending data to the server.");
//     }
//   };

//   const clearForm = () => {
//     setExperience("");
//     setEmail("");
//     setAddress("");
//     setNumber("");
//     setErrorMessage("");
//   };

//   return (
//     <div className="form-container">
//       <h1>Form 2</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Form2 inputs */}
//         <div className="form-group">
//           <label>Experience</label>
//           <input
//             type="number"
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Address</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Number</label>
//           <input
//             type="text"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//       {successMessage && (
//         <div className="success-message">{successMessage}</div>
//       )}
//       {errorMessage && (
//         <div className="error-message text-danger">{errorMessage}</div>
//       )}
//     </div>
//   );
// };

// export default Form2;









import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

const Form2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!experience || !email || !address || !number) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Experience validation
    if (experience.length > 10) {
      setErrorMessage("Experience must be 10 characters or less.");
      return;
    }

    // If all validations pass, show success message
    setSuccessMessage("Form submitted successfully!");

    // Combine Form1 and Form2 data
    const formData1 = location.state && location.state.formData1;
    const combinedData = { ...formData1, experience, email, address, number };

    try {
      // Send combined data to backend
      await Axios.post("http://localhost:6060/employees", combinedData);
      console.log("Data sent successfully!");

      // Clear form fields and messages after successful submission
      clearForm();

      // Redirect to home page or wherever needed
      navigate("/");
    } catch (error) {
      console.error("Error sending data:", error);
      setErrorMessage("Error sending data to the server.");
    }
  };

  const clearForm = () => {
    setExperience("");
    setEmail("");
    setAddress("");
    setNumber("");
    setErrorMessage("");
  };

  return (
    <div className="form-container">
      <h1>Form 2</h1>
      <form onSubmit={handleSubmit}>
        {/* Form2 inputs */}
        <div className="form-group">
          <label>Experience</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number</label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="error-message text-danger">{errorMessage}</div>
      )}
    </div>
  );
};

export default Form2;
