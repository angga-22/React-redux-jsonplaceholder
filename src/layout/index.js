import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import { Container } from 'reactstrap'
const Layout = (props) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  )
}

export default Layout;
