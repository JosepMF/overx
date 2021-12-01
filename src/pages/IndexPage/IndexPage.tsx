import { useEffect, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button, FormControl } from "react-bootstrap";
import { Card, Container, Form } from "react-bootstrap";

export default function IndexPage() {
    // dimensions of windows
    const [dimenstions, setDimensions] = useState<number>(0);

    useEffect(() => {
        setDimensions(window.innerWidth);
        console.log(dimenstions);
    }, [dimenstions]);

    return (
        <Container className="mt-4">
            <Card style={{backgroundColor:'rgba(0,0,0,0.2)', borderColor: 'transparent'}} className="p-4">
                {dimenstions > 376 ? <Card.Img
                    src="/overx/banner.gif"
                    alt="banner"
                /> :
                    <h2 className="text-center">OverX</h2>}
                <Form>
                    <InputGroup style={{backgroundColor: "rgba(0,0,0,0.3", borderRadius: 50}} className="p-1 mt-2">
                        <FormControl
                            name="search"
                            type="text"
                            className="text-white"
                            autoFocus
                            placeholder="Search"
                            style={{ backgroundColor: "rgba(0,0,0,0)", borderRadius: 50, borderColor: "transparent" }}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="success" id="button-addon2" style={{ borderRadius: 50 }}>
                            search
                        </Button>
                    </InputGroup>
                </Form>
            </Card>
        </Container>
    )
}
