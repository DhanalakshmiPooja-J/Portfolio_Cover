import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { VscPreview } from "react-icons/vsc";

function ProjectCards(props) {
  return (
    <Card className="certificate-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ marginBottom: "30px" }}>{props.title}</Card.Title>
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <VscPreview />&nbsp;
            {"View"}
          </Button>
      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
