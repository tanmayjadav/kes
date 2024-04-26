import { Modal } from "@mui/material";
import { ModalContainer } from "./style";

const MuiModal = ({ open, handleClose, children }) => {
  return (
    <ModalContainer open={open} onClose={handleClose}>
      {children}
    </ModalContainer>
  );
};

export default MuiModal;