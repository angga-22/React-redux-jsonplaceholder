
const Button = (props) => {
  return (
    <div>
      <button onClick={props.isClicked}>{props.name}</button>
    </div>
  )
}

export default Button
