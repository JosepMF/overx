import { useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import routers from "../../helpers/routers";

export default function SingInPage() {
    const tools: any = useAuth();

    // state of the user credentials
    const [userCredentials, setUserCredential] = useState<object|null>(null);

    // set user credential with the data of the form function
    function handlerSetCredential(e: any): void {
        setUserCredential({...userCredentials, [e.target.name]: e.target.value})
    }

    // login user on the system
    function handlerLogin(): void {
        tools.login(userCredentials);
    }

    return (
        <Container>
            <Row >
                <Col xs={12} className="text-center">
                    <Form className="mt-4">
                        <Card style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)" }}>
                            <Card.Body>
                                <h3 className="text-primary text-center">Sing In</h3>
                                <hr />
                                <FormGroup className="mt-4">
                                    <label htmlFor="email">Email</label>
                                    <FormControl
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoFocus
                                        placeholder="email@example.com"
                                        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, borderColor: "transparent" }}
                                        className="mt-1 text-center text-white"
                                        onChange={handlerSetCredential}
                                    />
                                </FormGroup>
                                <FormGroup className="mt-4">
                                    <label htmlFor="password">Password</label>
                                    <FormControl
                                        name="password"
                                        type="password"
                                        placeholder="your password"
                                        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, borderColor: "transparent" }}
                                        className="mt-1 text-center text-white"
                                        onChange={handlerSetCredential}
                                    />
                                </FormGroup>
                            </Card.Body>
                            <Button variant="primary" onClick={() => handlerLogin()}>
                                login 
                            </Button>
                        </Card>
                        <p className="mt-4">if you haven't account: <Link to={routers.singUpPage}>Sing Up</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}
