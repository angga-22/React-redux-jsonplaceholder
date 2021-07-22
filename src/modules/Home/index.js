import Layout from '../../layout';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Form from '../../components/Form';

import { Row } from 'reactstrap';
import { useState } from 'react';

const Home = () => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <Layout >
      <Row style={{ display: 'flex', justifyContent: "left", marginTop: "7rem", marginBottom: "7rem" }}>
        <Button
          name="add post" isClicked={handleClick} />
        {toggle ?
          <div >
            <Form />
          </div> : null
        }
      </Row>
      <Card />
    </Layout>
  )
}

export default Home;