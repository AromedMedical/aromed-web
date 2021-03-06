import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input, Button, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap'

export class CreateProfile extends Component {
    render() {
        return (
            <div className="container col-lg-5 my-3 min-vh-100 d-flex flex-column justify-content-center">
                <Form className="bg-light p-5">
                    <h3 className="text-center">Create Profile</h3>
                    <hr className="mb-5" />

                    <FormGroup>
                        <Label for="email">Account</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Account Email" />
                    </FormGroup>

                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="firstname">First Name</Label>
                                <Input type="text" name="firstname" id="firstname" placeholder="Enter First Name" />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="lastname">Last Name</Label>
                                <Input type="text" name="lastname" id="lastname" placeholder="Enter Last Name" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Label for="dob">Date of Birth</Label>
                        <Input type="date" name="dob" id="dob" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input type="select" name="gender" id="gender">
                            <option className="d-none">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" name="address" id="address" placeholder="Enter Address" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone Number</Label>
                        <Input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" />
                    </FormGroup>

                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="height">Height</Label>
                                <InputGroup>
                                    <Input type="number" name="height" id="height" placeholder="Height" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>cm</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="weight">Weight</Label>
                                <InputGroup>
                                    <Input type="number" name="weight" id="weight" placeholder="Weight" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>Kg</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup className="mt-5">
                        <Button className="btn-block">Create Profile</Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default CreateProfile;