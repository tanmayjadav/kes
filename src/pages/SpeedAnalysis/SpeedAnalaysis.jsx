import React from "react";
import {
  ModalContainer,
  ModalHeading,
  ModalTitle,
  CustomIconButton,
  FirstFieldName,
  InputIndex,
  SecondFieldName,
  SelectButton,
  Menu,
  List,
} from "./style";
import {
  title,
  firstInputName,
  secondInputName,
  uploadButton,
} from "../SpeedAnalysis/constant";
import Button from "@mui/material/Button";
import MuiModal from "../../components/muiModal";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const Company = [
  { "XYZ Company": ["Mumbai", "Delhi", "Gujarat", "Pune", "Goa", "UP"] },
];

const SpeedAnalaysis = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedCompany, setSelectedCompany] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <MuiModal
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <ModalContainer>
            <ModalHeading>
              <ModalTitle>{title}</ModalTitle>
              <CustomIconButton onClick={handleClose}></CustomIconButton>
            </ModalHeading>
            <FirstFieldName>{firstInputName}</FirstFieldName>
            <FormControl>
              <InputLabel></InputLabel>
              <InputIndex
                value={selectedCompany}
                onChange={handleCompanyChange}
                // label="Company Name"
              >
                {Company.map((company, index) => (
                  <MenuItem key={index} value={Object.keys(company)[0]}>
                    {Object.keys(company)[0]}
                  </MenuItem>
                ))}
              </InputIndex>
            </FormControl>

            <SecondFieldName>{secondInputName}</SecondFieldName>
            <FormControl>
              <InputLabel></InputLabel>
                <InputIndex
                  value={selectedLocation}
                  onChange={handleLocationChange}
                  // label="Company Name"
                >
                  {selectedCompany &&
                    Company.map((company, index) => {
                      if (Object.keys(company)[0] === selectedCompany) {
                        return company[selectedCompany].map(
                          (location, index) => (
                            <Menu key={index} value={location}>
                              <List primary={location} />
                            </Menu>
                          )
                        );
                      }
                      return null;
                    })}
                </InputIndex>
            </FormControl>
            <SelectButton>{uploadButton}</SelectButton>
          </ModalContainer>
        </MuiModal>
      </React.Fragment>
    </>
  );
};

export default SpeedAnalaysis;
