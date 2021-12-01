import { Container, Card } from "react-bootstrap";

export default function AboutPage() {
    return (
        <Container>
            <Card bg="dark" className="mt-4">
                <Card.Body>
                    <h2 className="text-center">About OverX</h2>
                    <hr />
                    <ul>
                        <li>
                            <b>What is?</b>
                            <p>OverX is an application designed to share image posts among other formats which can contain the content they want.</p>
                        </li>
                        <li>
                            <b>Legal note</b>
                            <p>The company is not responsible for the content of these posts, which can be reported if their content is out of the law. The company is the one who puts the database servers and profits from the advertisements that are present on the platform</p>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </Container>
    )
}
