import React from "react";
import Avatar from "./avatar.png";
import {
  Row,
  Col,
  Container,
  Button,
  FormInput,
  Collapse,
  Card,
  CardFooter,
  CardBody,
  CardTitle,
  CardHeader,
  CardImg,
  ListGroup,
  ListGroupItem,
} from "shards-react";

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={Avatar} />
      </div>
    );
  }
}
