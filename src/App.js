import React from 'react';
import './App.css';
import HeaderComponent from './components/NestedStructure/HeaderComponent'
import AboutComponent from './components/NestedStructure/AboutComponent'
import ResumeComponent from './components/NestedStructure/ResumeComponent'
import PortfolioComponent from './components/NestedStructure/PortfolioComponent'
import ContactComponent from './components/NestedStructure/ContactComponent'

function App() {
  
  return (
    <div className="App">
      <HeaderComponent />
      <div id="main" className="site-main">
        <div className="pt-wrapper">
          <div className="subpages animated-subpages">
            

<AboutComponent />
<ResumeComponent />
<PortfolioComponent />
<ContactComponent />
          </div>
    </div>
</div>
    
    </div>
  );

}
export default App;
