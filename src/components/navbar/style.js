import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const LogoutButton = styled(Button)(() => ({
  // padding: "0.4rem 2rem",
  padding:"8px 32px",
  borderRadius: "26px",
  background: "#08AA72",
  color: "white",
  "&:hover": {
    backgroundColor: "#08AA72",
  },
}));

export { LogoutButton };
