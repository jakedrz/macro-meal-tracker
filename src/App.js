import logo from "./logo.svg";
import "./App.css";
import { AppBar, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <AppBar position="static">
        <Typography variant="h6">Macro tracker</Typography>
      </AppBar>
    </Container>
  );
}

export default App;
