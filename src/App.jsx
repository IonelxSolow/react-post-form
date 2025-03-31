import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // logica
  const [post, setPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPost((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successo:", data);

        setPost({
          author: "",
          title: "",
          body: "",
          public: false,
        });
      })
      .catch((error) => {
        console.error("Errore", error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Crea un nuovo post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Autore</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={post.author}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
