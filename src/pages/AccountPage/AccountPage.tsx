import { useState } from "react";
import { ButtonGroup, Form, Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import useAuth from "../../auth/useAuth"

export default function AccountPage() {
    // tools of auth
    const tools = useAuth();

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12}>
                    <Card bg="dark">
                        <Card.Body className="text-center">
                            <img
                                src="/overx/profile-img.png"
                                alt="profile-img"
                                style={{
                                    borderRadius: 200,
                                    height: 200,
                                    width: 200
                                }}
                            />
                            <hr />
                            <h3 className="text-primary">{tools?.user.userName}</h3>
                            <hr />
                        </Card.Body>
                    </Card>
                    <Card bg="dark" className="mt-4">
                        <Card.Body>
                            <Card.Body>
                                <h2 className="text-center">Information</h2>
                                <hr />
                                <b>Email: </b><span>{tools?.user.email}</span><br /><br />
                                <b>Description: </b><span>{tools?.user?.userDescription ? "description" : <span>you haven't description, do you wont create your description? <span className="text-primary">press me</span></span>}</span><br /><br />
                                <b>Total number of Views: </b><span>6</span><br /><br />
                                <b>Total number of Viewers: </b><span>34</span>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card bg="dark" className="mt-4">
                        <Card.Body>
                            <Form>
                                <Button variant="primary" className="form-control">create new Post</Button>
                            </Form>

                            <hr/>
                            <Table  striped bordered hover variant="dark">
                                {/* test */}
                                <thead>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>description</th>
                                    <th>NºLikes</th>
                                    <th>Options</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Frist upload</td>
                                        <td>Frist upload</td>
                                        <td>asome description</td>
                                        <td>5</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button variant="warning">Edit</Button>
                                                <Button variant="danger">delete</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
