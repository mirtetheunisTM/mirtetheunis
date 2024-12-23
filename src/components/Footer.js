import { Row, Container, Col } from "react-bootstrap"
import facebookIcon from "../assets/img/facebook-circle.svg";
import linkedinIcon from "../assets/img/linkedin-circle.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="social-icon">
                        <a href="https://www.facebook.com/">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                    </Col>
                    <Col sm={6} className="text-end">
                        <p>&copy; Mirte Theunis, 2024. Alle rechten voorbehouden.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}