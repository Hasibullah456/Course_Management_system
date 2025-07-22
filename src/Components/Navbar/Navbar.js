
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Mynavbar(){
    const expand="md";
    return(
        <Navbar  expand={expand} style={{backgroundColor:'rgb(186,182,253)'}} className="mb-3">
          <Container>
            <Navbar.Brand href="/" style={{fontFamily:'lalazar'}}>افغان تکنالوژی</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                  <p style={{fontFamily:'lalazar'}}>خدمات افغان تکنالوژی</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 <Link className='nav-link' to='/'>صفحه اصلی</Link>
                 <Link className='nav-link' to='/Artical'>مقالات</Link>
                 <Link className='nav-link' to='/panel'>پنل</Link>
                 <Link className='nav-link' to='/about'>درباره ما</Link>
                 <Link className='nav-link' to='/login'>ورود</Link>
                 
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}
export default Mynavbar;