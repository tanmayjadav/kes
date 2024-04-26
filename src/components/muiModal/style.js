import styled from "@emotion/styled";
import { Modal } from "@mui/material";


const ModalContainer = styled(Modal)(({theme}) => ({
    '& .MuiModal-backdrop': {
        backdropFilter: 'blur(2px)',
        background: theme.secondary.lightBlack,
      }
}))


export {ModalContainer}