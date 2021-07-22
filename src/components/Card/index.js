import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllPosts, deletePost, editPost } from '../../store/action';
import Button from '../Button';
import Modals from '../Modal';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const Card = () => {

  const [edit, setEdit] = useState('');
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.post)

  const handleChange = (e) => {
    setEdit(e.target.value)
  }

  const toggle = () => setModal(!modal);

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  const submitChanges = () => {
    dispatch(editPost(edit))
  }

  return (
    <div>
      {posts.map(item => {
        return (
          <ListGroup key={item.id}
          >
            <ListGroupItem className="justify-content-between flex">
              <h6>{item.title}</h6>
              <Button name="edit" isClicked={toggle} />
              {toggle ? <Modals modal={modal} toggle={toggle} toggleHeader={toggle} inputValue={edit} inputOnChange={handleChange} handleClicked={submitChanges} /> : null}
              <Button name="delete" isClicked={() => dispatch(deletePost(item.id))} />
            </ListGroupItem>
          </ListGroup>
        )
      })}
    </div >
  )
}

export default Card;
