import { Navbar, Container, Nav } from "react-bootstrap"
import { useState, useEffect } from "react"
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#overmij" className={activeLink === 'overmij' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('overmij')}>Over mij</Nav.Link>
                        <Nav.Link href="#projecten" className={activeLink === 'projecten' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projecten')}>Projecten</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <button className="btn-primary" onClick={() => console.log('connect')}><span>Neem contact op</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}