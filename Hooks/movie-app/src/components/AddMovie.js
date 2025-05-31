import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === "rating" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newMovie.title.trim() ||
      !newMovie.description.trim() ||
      !newMovie.posterURL.trim() ||
      newMovie.rating < 1 ||
      newMovie.rating > 5
    ) {
      alert("Please fill all fields correctly.");
      return;
    }
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className="mb-4">
        Add New Movie
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                placeholder="Enter movie title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                placeholder="Enter movie description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPosterURL">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleChange}
                placeholder="Enter poster image URL"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Select
                name="rating"
                value={newMovie.rating}
                onChange={handleChange}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant="success" type="submit">
              Add Movie
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMovie;
