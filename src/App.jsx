import './App.css';
import Sgroupt from './Component/Sgroupt';
import Header from './Component/Header';
import Group_three from './Component/Group_three';
import Images from './Component/Images';
import Design_Two from './Component/Design_Two';
import Wrapper from './Component/Wrapper';
import Design_four from './Component/Design_four';
import Group_ten from './Component/Group_ten';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Pages_Two from './Component/Pages_Two';

function App() {
  return (
    <>
      <div className="background">
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Header></Header>
                <Sgroupt />
                <Group_three />
                <Images />
                <Design_Two />
                <Wrapper></Wrapper>
                <div className="group-8" />
                <Design_four></Design_four>
                <div className="group-8" />
                <Group_ten></Group_ten>

              </>
            } />
            <Route path="/pageTwo" element={<Pages_Two />} />
          </Routes>
          <Footer></Footer>
        </Router>


      </div>

    </>
  );
}

export default App;
