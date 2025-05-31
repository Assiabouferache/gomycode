// src/PlayersList.js
import React from "react";

import players from "../data/players";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";

const PlayersList = () => {
  return (
    <Container className="mt-4">
      <Row>
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            {/* Spread player attributes into the Player component */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
