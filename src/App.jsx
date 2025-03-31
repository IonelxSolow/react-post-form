import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // logica
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Crea un nuovo post</h1>
      {/* Form*/}
    </div>
  );
}

export default App;
