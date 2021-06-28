import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Intro from "./components/intro/intro"
import ManhattanMap from './components/map/map';

import '@fontsource/poppins';

function App() {
  return (
    <div className="App">
      <Intro />

      <Grid container>
        <Grid item>
          <ManhattanMap />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
