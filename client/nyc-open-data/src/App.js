import './App.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Intro from "./components/intro/intro"
import ManhattanMap from './components/map/map';
import YearSlider from './components/yearslider/yearslider';
import BoroughMenu from './components/boroughmenu/boroughmenu';

import '@fontsource/poppins';

function App() {

  const getBorough = (borough) => {
    console.log(borough)
  }
  return (
    <div className="App">
      <Intro />

      <Grid container direction="column">

        <Grid item >
          <div className="UI_Container">
            <BoroughMenu passBoroughToParent={getBorough} /> <YearSlider />
          </div>

        </Grid>

        {/* <Grid item md={6} >

        </Grid> */}

        <Grid item>
          <ManhattanMap />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
