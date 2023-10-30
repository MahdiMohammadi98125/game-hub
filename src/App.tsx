import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem bg="coral" area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area="aside">
          aside
        </GridItem>
      </Show>
      <GridItem bg="dodgerblue" area="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
