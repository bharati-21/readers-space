import ReactDOM from "react-dom";
import { PostModal } from "features";

const ModalPortal = () => {
	return ReactDOM.createPortal(
        <PostModal  />,
        document.getElementById("modal-container")
	);
};

export default ModalPortal;
