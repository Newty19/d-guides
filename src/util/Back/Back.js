import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");  // Redirige a la página principal
  };

  return (
    <button style={styles.button} onClick={handleBack}>
      ⬅️ Regresar
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#f0f0f0", 
    color: "#333", 
    border: "2px solid #ccc", 
    borderRadius: "8px", 
    padding: "10px 20px", 
    fontSize: "16px", 
    cursor: "pointer", 
    transition: "all 0.3s ease", 
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", 
  },
};

export default BackButton;
