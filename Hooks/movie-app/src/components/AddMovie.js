import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
    trailerURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = () => {
    if (
      !newMovie.title ||
      !newMovie.posterURL ||
      !newMovie.description ||
      !newMovie.trailerURL
    ) {
      alert("Please fill all fields!");
      return;
    }
    addMovie({ ...newMovie, rating: Number(newMovie.rating) });
    setShow(false);
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: 1,
      trailerURL: "",
    });
  };

  return (
    <>
      <Button
        variant="pink"
        onClick={() => setShow(true)}
        style={{ backgroundColor: "#f48fb1", border: "none", margin: "1rem 0" }}
      >
        + Add New Movie
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#fce4ec" }}>
          <Modal.Title style={{ color: "#A83279" }}>
            Add a New Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#fff0f6" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label style={{ color: "#A83279" }}>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                placeholder="Enter movie title"
                style={{ borderColor: "#f48fb1" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label style={{ color: "#A83279" }}>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                placeholder="Write a brief description"
                style={{ borderColor: "#f48fb1" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosterURL">
              <Form.Label style={{ color: "#A83279" }}>Poster URL</Form.Label>
              <Form.Control
                type="text"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleChange}
                placeholder="Enter image URL"
                style={{ borderColor: "#f48fb1" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTrailerURL">
              <Form.Label style={{ color: "#A83279" }}>
                Trailer URL (YouTube embed link)
              </Form.Label>
              <Form.Control
                type="text"
                name="trailerURL"
                value={newMovie.trailerURL}
                onChange={handleChange}
                placeholder="e.g. https://www.youtube.com/embed/VIDEO_ID"
                style={{ borderColor: "#f48fb1" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRating">
              <Form.Label style={{ color: "#A83279" }}>Rating</Form.Label>
              <Form.Select
                name="rating"
                value={newMovie.rating}
                onChange={handleChange}
                style={{ borderColor: "#f48fb1" }}
              >
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#fce4ec" }}>
          <Button
            variant="secondary"
            onClick={() => setShow(false)}
            style={{ borderRadius: "50px" }}
          >
            Cancel
          </Button>
          <Button
            variant="pink"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#f48fb1",
              border: "none",
              borderRadius: "50px",
            }}
          >
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
