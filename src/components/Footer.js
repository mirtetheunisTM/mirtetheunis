import { Row, Container, Col } from "react-bootstrap"
import facebookIcon from "../assets/img/facebook-circle.svg";
import linkedinIcon from "../assets/img/linkedin-circle.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="social-icon">
                        <a href="https://www.facebook.com/mirte.theunis01/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.linkedin.com/in/mirte-theunis-587792200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
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