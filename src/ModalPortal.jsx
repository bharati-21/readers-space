import ReactDOM from "react-dom";
import { NewPostModal } from "features";

const ModalPortal = () => {
	return ReactDOM.createPortal(
        <NewPostModal  />,
        document.getElementById("modal-container")
	);
};

export default ModalPortal;
