import { createPortal } from "react-dom";

const Modal = ({ children, onModalClose, showModal }) => {
	return createPortal(
		<div className={showModal ? "rdb-modal-show" : "rdb-modal-hide"}>
			<div
				onClick={onModalClose}
				role="button"
				className="rdb-modal-backdrop"
				style={{
					display: showModal ? "flex" : "none",
				}}
			/>
			<div className="rdb-modal-content">{children}</div>
		</div>,
		document.getElementById("modal")
	);
};

export default Modal;
