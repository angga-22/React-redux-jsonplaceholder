import { useState } from 'react';
import Button from '../Button';
import { addPost } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  // const postsLength = useSelector(state => state.posts.post.length);

  const handleClick = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title)
    data.append("body", body)
    await dispatch(addPost(data))
    setTitle("");
    setBody("");
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div style={{ margin: "2rem 0" }}>
          <input placeholder="title" id="title" type="text" value={title} onChange={handleTitle} />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <input placeholder="body" id="body" type="text" value={body} onChange={handleBody} />
        </div>
        <Button name="submit post" type="submit" />
      </form>
    </div>
  )
}

export default Form;