import React from "react";
import "./NewZap.css";
import {
  Form,
  FormInput,
  FormGroup,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  FormSelect,
} from "shards-react";
export default class NewZap extends React.Component {
  render() {
    return (
      <div>
        <h2 className="Heading">Add New Zap</h2>
        <center>
          <Card className="NewCard">
            <CardBody>
              <Form>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput id="#name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#description">Description</label>
                  <FormInput
                    size="lg"
                    id="#description"
                    placeholder="Description"
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput placeholder="Parameter Name" />;
                  <FormSelect>
                    <option value="first">Address</option>
                    <option value="second">Int</option>
                    <option value="third">String </option>
                  </FormSelect>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </center>
      </div>
    );
  }
}
