import { Stack, Typography } from "@mui/material";
import { LogoutButton } from "./style";
import { KlimateLogo } from "../../assets/images/svg";

const Navbar = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" paddingY={4}>
        <KlimateLogo />
        <LogoutButton>
          <Typography >Log Out</Typography>
        </LogoutButton>
      </Stack>
    </>
  );
};

export default Navbar;
