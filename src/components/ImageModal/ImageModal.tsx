import Modal from "react-modal";
import { CustomStylesType, ImageModalType } from "./ImageModal.types";

const customStyles: CustomStylesType = {
    overlay: {
        backgroundColor: "rgba(15, 12, 12, 0.9)",
    },

    content: {
        height: "100hv",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalType> = ({
    modalIsOpen,
    closeModal,
    src,
    alt,
}: ImageModalType) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <img src={src} alt={alt} />
        </Modal>
    );
};

export default ImageModal;