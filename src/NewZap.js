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
  Button,
} from "shards-react";
import { getSpace, setSwifts, upVoteSwift } from './services'

import { v4 as uuidv4 } from 'uuid';

export default class NewZap extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      parameters: []
    }
    this.addSwift = this.addSwift.bind(this);
  }

  addSwift = async () => {
    const space = await getSpace()

    const swiftUUID = uuidv4()

    const swift = {
      id: swiftUUID,
      name: this.state.name,
      description: this.state.description,
      parameters: this.state.parameters,
      voters: [],
      upVotes: 0,
      downVotes: 0
    }

    await setSwifts(swift)
  }

  render() {
    return (
      <div>
        <Container className="main-container">
          <h4>Add New Zap</h4>
          <br />
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <label htmlFor="#name">Name</label>
                  <FormInput onChange={(e) => { this.setState({name: e.target.value}) }} placeholder="Name" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#description">Description</label>
                  <FormInput
                    size="lg"
                    id="#description"
                    placeholder="Description"
                    onChange={(e) => { this.setState({ description: e.target.value }) }}
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput placeholder="Parameter Name" />;
                  <FormSelect onChange={(e) => { }}>
                    <option value="first">Address</option>
                    <option value="second">Int</option>
                    <option value="third">String </option>
                  </FormSelect>
                </FormGroup>
                <Button onClick={this.addSwift}>Add Swift</Button>
              </Form>
            </Col>
            <Col> 
              <Card className="NewCard">
                <CardBody>
                  <Form>
                    <FormGroup>
                      <label htmlFor="#name">Parameters</label>
                      <FormInput name="paramName" placeholder="Parameter Name" />;
                      <FormSelect name="paramType">
                        <option value="first">Address</option>
                        <option value="second">Int</option>
                        <option value="third">String </option>
                      </FormSelect>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
