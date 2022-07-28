import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import ScrollTopTopButton from './ScrollToTopButton';
import PageNotFound from './PageNotFound';

import Home from './Pages/HomePage';
import ConsultingForm from './Components/HomePage/ConsultingForm';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Components/ContactPage/ContactUs';
import Privacy from './Components/Terms and Policy/Privacy';
import Terms from './Components/Terms and Policy/Terms';
import ClsPage from './Pages/ClsPage';
import AbuleInvest from './Pages/AbuleInvest';
import LandLordDirect from './Pages/LandLordDirect';

// Property 
// Property 

import PropertyPage from './Pages/PropertyPage';
import Property from './Components/Properties/AllProperties/Property';
import LandProperty from './Components/Properties/LandProperties';
import Houseproperty from './Components/Properties/HouseProperties';
import RentProperty from './Components/Properties/RentProperties';
import RequestAVisit from './Components/Properties/RequestAVisit';
import RequestAVisit2 from './Components/Properties/RequestAVisit2';
import PropertyUpload from './Components/AdminPage/PropertyUpload';
import PropertySearchPage from './Components/Properties/PropertySearchPage';

// Property 
// Property 

// Blog 
// Blog 
import Post1 from './Components/BlogPage/Post1';
import BlogPage from './Pages/BlogPage';
import BlogPost from './Components/BlogPage/BlogPost';

// Blog 
// Blog 



// Admin 
// Admin
import ProtectAdmin from './protectAdmin'
import AdminLogin from './Components/AdminPage/AdminLogin';
import AdminReg from './Components/AdminPage/AdminReg';
import AdminAllProperties from './Components/AdminPage/AdminAllProperty';
import AdminPropertyEdit from './Components/AdminPage/AdminPropertyEdit';
import AdminDashboard from './Components/AdminPage/AdminDashboard';
import Admin from './Components/AdminPage/Admin';

// AdminBlog 
import BlogUpload from './Components/AdminPage/AdminBlog/BlogUpload';
import AdminAllBlog from './Components/AdminPage/AdminBlog/AdminAllBlog';
import AdminBlogEdit from './Components/AdminPage/AdminBlog/AdminBlogEdit';
import AdminPausedProps from './Components/AdminPage/AdminPausedProps';

// AdminBlog 

// Admin 
// Admin 


 

function App() {

  return (

    <>
<BrowserRouter>


    <ScrollToTop/>
  
    
    <ScrollTopTopButton/>

      <Switch>
      <Route exact path="/" component={withRouter(Home)}/>

      <Route exact path="/home" component={Home}/>

      <Route exact path="/contact" component={ContactUs}/>

      <Route exact path="/about" component={AboutPage}/>

      <Route exact path="/cls" component={ClsPage}/>

      <Route exact path="/abule-invest" component={AbuleInvest}/>

      <Route exact path="/landlord-direct" component={LandLordDirect}/>

      {/* Blog Post */}
      <Route exact path="/blog" component={BlogPage}/>

      <Route exact path="/blog/post1" component={Post1}/>

      <Route exact path="/blog/:token" component={BlogPost}/>

      {/* Blog Post */}

      <Route exact path="/privacy-and-policy" component={Privacy}/>

      <Route exact path="/terms-and-conditions" component={Terms}/>

      
          {/* Properties  */}

      <Route exact path="/properties" component={PropertyPage}/>

      <Route exact path="/properties/search" component={PropertySearchPage}/>

      <Route exact path="/properties/lands" component={LandProperty}/>

      <Route exact path="/properties/houses" component={Houseproperty}/>

      <Route exact path="/properties/rents" component={RentProperty}/>

      <Route exact path="/property/visit/:propstoken" component={RequestAVisit}/>

      <Route exact path="/property/request" component={RequestAVisit2}/>

      <Route exact path="/consulting" component={ConsultingForm}/>

      <Route exact path="/property/:propstoken" component={Property}/>

          {/* Properties  */}


      {/* Admin  */}
      {/* Admin  */}

      <Route exact path="/adminlogin" component={AdminLogin}/>

      <ProtectAdmin exact path="/admin" component={AdminDashboard}/>
      <ProtectAdmin exact path="/admindashboard" component={AdminDashboard}/>
      <ProtectAdmin exact path="/adminreg" component={AdminReg}/>
      <ProtectAdmin exact path="/admin/property-upload" component={PropertyUpload}/>
      
      <ProtectAdmin exact path="/admin/property-update" component={AdminAllProperties}/>
      <ProtectAdmin exact path="/admin/property-update/:propstoken" component={AdminPropertyEdit}/>
      <ProtectAdmin exact path="/admin/property-paused" component={AdminPausedProps}/>


      {/* AdminBlog */}
      <ProtectAdmin exact path="/admin/blog-upload" component={BlogUpload}/>

      <ProtectAdmin exact path="/admin/blog-update" component={AdminAllBlog}/>

      <ProtectAdmin exact path="/admin/blog-update/:token" component={AdminBlogEdit}/>

      {/* AdminBlog */}

      <ProtectAdmin path="/admindashboard" component={Admin} />

      {/* Admin  */}
      {/* Admin  */}




      <Route exact path="*" component={PageNotFound}/>


      </Switch>


</BrowserRouter>

    </>

  );
}

export default App;

// 1622410255 hakra3310@gmail.com