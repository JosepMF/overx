import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { Container, Card, Col, Row, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import routers from "../../helpers/routers";

export default function SingUpPage() {

    // credentials for register a new user
    const [userCredentials, setUserCredential] = useState<object | null>(null);

    // useAuth
    const tools: any = useAuth();

    // register a new user
    function createUser(): void {
        localStorage.setItem('user', JSON.stringify(userCredentials));
        tools.login(userCredentials);
    }

    // value of the inputs when change
    function handlerChange(e:any): void {
        setUserCredential({...userCredentials, [e.target.name]: e.target.value});
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12}>
                    <Card style={{ maxWidth: "360px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <Card.Body>
                            <h3 className="text-center text-primary">Sing Up</h3>
                            <hr />
                            <Form>
                                <FormGroup className="text-center">
                                    <label htmlFor="userName">Name</label>
                                    <FormControl
                                        id="userName"
                                        name="userName"
                                        type="text"
                                        autoFocus
                                        placeholder="pepito07"
                                        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, borderColor: "transparent" }}
                                        className="mt-1 text-center text-white"
                                        onChange={(e) => handlerChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup className="text-center">
                                    <label htmlFor="email">Email</label>
                                    <FormControl
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="pepito07@gmail.com"
                                        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, borderColor: "transparent" }}
                                        className="mt-1 text-center text-white"
                                        onChange={(e) => handlerChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup className="text-center">
                                    <label htmlFor="password">Password</label>
                                    <FormControl
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="password hyper secure"
                                        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, borderColor: "transparent" }}
                                        className="mt-1 text-center text-white"
                                        onChange={(e) => handlerChange(e)}
                                    />
                                </FormGroup>
                                <FormGroup className="text-center">
                                    <label htmlFor="rePassword">Repete Password</label>
                                    <FormControl
                                        id="rePassword"
                                        name="rePassword"
                                        type="password"
                                        placeholder="password hype secure"
                                        style={{ backgroundColor: "rgba(0,0,0,0.3)", borderRadius: 50, borderColor: "transparent" }}
                                        className="mt-1 text-center text-white"
                                        onChange={(e) => handlerChange(e)}
                                    />
                                </FormGroup>
                            </Form>
                        </Card.Body>
                        <Button variant="success" onClick={() => createUser()}>create account</Button>
                    </Card>
                    <p className="mt-4 text-center">if you haven account: <Link to={routers.singInPage}>Sing In</Link></p>
                </Col>
            </Row>
        </Container>
    )
}
