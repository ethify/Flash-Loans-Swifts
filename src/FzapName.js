import React from "react";
import "./FzapName.css";
import {
  CardBody,
  Card,
  Form,
  FormInput,
  FormGroup,
  Container,
  Row,
  Col,
} from "shards-react";
export default class NewZap extends React.Component {
  render() {
    return (
      <div>
        <h2 className="Heading"> FZap Name </h2>
        <center>
          <Card className="FzapCard">
            <CardBody>
              <Form>
                <FormGroup>
                  <div>
                    <Container>
                      <Row>
                        <Col>
                          <label className="Inline" htmlFor="#parametername">
                            Parameter Name
                          </label>
                        </Col>
                        <Col>
                          <FormInput
                            className="Inline"
                            id="#parametername"
                            placeholder="Parameter"
                          />
                        </Col>
                        <Col>
                          <label className="Inline">Parameter Type</label>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </center>
      </div>
    );
  }
}
