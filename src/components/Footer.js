import { Row, Container, Col } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}