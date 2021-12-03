import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import AboutUs from '../views/AboutUs/AboutUs';
import CatsView from '../views/CatsView/CatsView';
import DogsView from '../views/DogsView/DogsView';
import Landing from '../views/Landing/Landing';
import NotFound from '../views/NotFound/NotFound';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/cats/:id" component={CatsView} />
          <Route path="/cats" render={()=><Redirect to="/cats/1" />} /> {/* A fallback Route */}
          <Route path="/dogs" component={DogsView} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
