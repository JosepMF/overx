import { Button, Container } from "react-bootstrap";
import useAuth from "../../auth/useAuth";

export default function SingInPage() {
    const tools:any = useAuth();
    
    return (
        <Container>
            <Button variant="primary" onClick={() => tools.login(1)}>
                login test
            </Button>
        </Container>
    )
}
