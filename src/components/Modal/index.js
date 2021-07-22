import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Button from '../Button';

const Modals = (props) => {


  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
        <ModalHeader toggle={props.toggleHeader}>Modal title</ModalHeader>
        <ModalBody>
          <input style={{ width: '100%' }} type="text" value={props.inputValue} onChange={props.inputOnChange} />
          <Button name="submit changes" type="submit" isClicked={props.handleClicked} />
        </ModalBody>

      </Modal>
    </div>
  )
}

export default Modals;
