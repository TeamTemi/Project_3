import React, { useContext } from 'react';
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";
import Services from './pages/Services/Services';
import Case from './pages/Case/Case';
import DaCodeSpecialists from './pages/DaCodeSpecialists/DaCodeSpecialists';
import Blog from './pages/Blog/Blog';
import {  Route, Switch } from "react-router-dom";
import Footer from '././components/Footer/Footer';
import { ThemeProvider } from "styled-components";
import ThemeContext from "./contexts/ThemeContext";
  import GlobalStyles from "./Styles/GlobalStyles"


function App() {
const { theme } = useContext(ThemeContext);

  return (
      <div className="App">
        <ThemeProvider theme={{ theme }}> 
         <GlobalStyles /> 
              <Header />
                <main>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/case" exact component={Case} /> 
                    <Route path="/dacodespecialists" exact component={DaCodeSpecialists} />
                    <Route path="/blog" exact component={Blog} />
                  </Switch>
                </main>
              <Footer />
       </ThemeProvider> 
      </div>
  );
}

export default App;

