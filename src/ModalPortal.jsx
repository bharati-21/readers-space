import ReactDOM from "react-dom";
import { Modal } from "features";

const ModalPortal = () => {
	return ReactDOM.createPortal(
        <Modal />,
        document.getElementById("modal-container")
	);
};

export default ModalPortal;
