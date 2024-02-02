import Modal from "react-modal";
import css from "./ImageModal.module.css"
Modal.setAppElement("#root");
export const ImageModal = ({
  openModal,
  closeModal,
  data: {
    urls: { regular },
    alt_description,
  },
}) => {
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <img src={regular} alt={alt_description} />
      </Modal>
    </div>
  );
};
