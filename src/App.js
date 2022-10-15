import React, { useState, useEffect, useMemo } from  'react';
import axios from 'axios';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.scss';
import Items from './components/Items/Items';
import Item from './components/Items/Item/Item';
import Page from './components/Page/Page';
import Host from './components/Host/Host';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Layout from './components/Layout/Layout';
import Payment from './components/Payment/Payment';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { authContext } from './contexts/Contexts';
import { userContext } from './contexts/Contexts';
import useLocalStorage from './hooks/useLocalStorage';
import { useAxios } from './hooks/useAxios';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import OrderDetail from './components/OrderDetail/OrderDetail';
import DatePicker from './components/DatePicker/Datepicker';
import GroupFinder from './components/GroupFinder/GroupFinder';
import CreateGroup from './components/CreateGroup/CreateGroup';
import FileUpload from './components/FileUpload/FileUpload';
import Map from './components/Map/Map';
import Carousel from './components/Carousel/Carousel';
import Featured from './components/Featured/Featured';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import { Details } from './components/Details/Details';
import { Confirm } from './components/Confirm/Confirm';
import LandingPage from './components/LandingPage/LandingPage';
import Upload from './components/Upload/Upload';
import PartnerForm from './components/PartnerForm/PartnerForm';
import VerifyForm from './components/VerifyForm/VerifyForm';
import PaymentForm from './components/PaymentForm/PaymentForm';
export const NavLayout = () => {
  return(
    <React.Fragment>
      <Nav/>
      <Outlet/>
    </React.Fragment>

  )
  
}
function App() { 
  const [isLogged, setIsLogged] = useLocalStorage('isLogged', false);
  const [user, setUser] = useLocalStorage();

  const stripePromise = loadStripe('pk_test_51KKekXGDtVX5wZUmoem8hYWx1aOdupnY8mgqvCfecD0Hn8iu4BfMSgLDuhKuwwR9ngCdXf73GCh7XM5rPTN9F19000nNQl8J1j')

  // const { response, loading, error } = useAxios({
  //   method: 'GET',
  //   url:`/users/ ${sessionStorage.getItem('id')}`,
  //   headers: {
  //     accept: 'application/json'
  //   }
  // })

  

  useEffect(() => {
    console.log('Hello from App.js')
    console.log(sessionStorage.getItem('id'));
  }, [])
  // const [user, setUser] = useState(null);
  // const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const loggedValue = useMemo(() => ({loggedIn, setLoggedIn}), [loggedIn, setLoggedIn])
  return (
    <authContext.Provider value={{isLogged, setIsLogged}}>
      <userContext.Provider>
        <div className="App">
              <Routes>
                <Route element={<NavLayout/>}>
                  <Route path="/home" element={<LandingPage/>}></Route>
                  <Route path="/items" element={<Items/>}></Route>
                  <Route path="/items/:id" element={<Page/>}></Route>
                </Route>
                
                <Route path="/register" element={<Signup/>}></Route>
                
                <Route path='/partner' element={<PartnerForm/>}></Route>
                <Route path='/verify' element={<VerifyForm/>}></Route>
                <Route>
                  {/*public routes*/}
                  <Route path="/login" element={<Signin/>}></Route>
                  <Route path="/host" element={<Host/>}></Route>
                  
                  <Route path="/profile" element={<Profile/>}></Route>
                  <Route path="/order" element={<OrderDetail/>}></Route>
                  <Route path="/payment" element={<PaymentForm/>}></Route>
                  <Route path="/confirm" element={<Confirm/>}></Route>
                  <Route path='/datepicker' element={<DatePicker/>}></Route>
                  <Route path='/groups' element={<GroupFinder/>}></Route>
                  <Route path='/groups/create' element={<CreateGroup/>}></Route>
                  <Route path='/map' element={<Map/>}></Route>
                  
                  <Route path='/carousel' element={<Carousel/>}></Route>
                  <Route path='/featured' element={<Featured/>}></Route>
                  <Route path='/landing' element={<Landing/>}></Route>
                  <Route path='/details' element={<Details/>}></Route>
                  {/*protected routes
                  <Route element={<RequireAuth allowedRoles={['user']}/>}>
                    <Route path="/profile" element={<Profile/>}></Route>
                  </Route>*/}
                </Route>
              </Routes>
            </div>
      </userContext.Provider>
    </authContext.Provider>
  );
}

export default App;
