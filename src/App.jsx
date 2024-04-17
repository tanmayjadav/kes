import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Measure from "./pages/Measure";
import UnderMaintain from "./pages/FeatureUnderMaintaince";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Measure />} />
          <Route path="/m" element={<UnderMaintain />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
