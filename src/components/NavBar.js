import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"; 
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
        }, [])

        const updateActiveLink = (value) => {
            setActiveLink(value);
        }

        const handleContactClick = () => {
            navigate('/');
            setTimeout(() => {
              const contactSection = document.getElementById('connect');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme" className={activeLink === 'overmij' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('overmij')}>Over mij</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className={activeLink === 'projecten' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projecten')}>Projecten</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <button className="btn-primary" onClick={handleContactClick}><span>Neem contact op</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}