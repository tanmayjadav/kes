import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import OfficeLocation from "./pages/officeLocation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <OfficeLocation />
    </ThemeProvider>
  );
};

export default App;
