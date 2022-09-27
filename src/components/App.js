import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import LandingPage from './LandingPage';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />
            )}
          ></Route>
          <Route exact path='/services' component={() => <div>Service</div>}></Route>
          <Route exact path='/customsoftware' component={() => <div>Custom Software</div>}></Route>
          <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>}></Route>
          <Route exact path='/websites' component={() => <div>Websites</div>}></Route>
          <Route exact path='/revolution' component={() => <div>The Revolution</div>}></Route>
          <Route exact path='/about' component={() => <div>About Us</div>}></Route>
          <Route exact path='/contact' component={() => <div>Contact</div>}></Route>
          <Route exact path='/estimate' component={() => <div>Estimate</div>}></Route>
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
