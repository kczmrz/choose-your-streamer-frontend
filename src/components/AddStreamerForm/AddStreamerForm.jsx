import { useState } from 'react'
import Modal from 'react-modal';

export default function AddStreamer()
{
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = ()=> {
    subtitle.style.color = '#f00';
  }

  const closeModal = ()=> {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className='btn bg-purple-950 text-white py-2 px-8 ml-4 mt-4 md:mt-0'>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}