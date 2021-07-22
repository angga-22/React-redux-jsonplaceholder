import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

const Header = () => {
  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My Apps</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>

            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/about">About</Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}


export default Header;
