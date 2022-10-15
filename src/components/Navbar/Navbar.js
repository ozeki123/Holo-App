import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/Contexts';
import useLocalStorage from '../../hooks/useLocalStorage';
import './Navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const {isLogged, setIsLogged} = useContext(authContext)
  // const {loggedIn, setLoggedIn} = useContext(authContext);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState('');

  const location = useLocation();
  

  // const itemId = sessionStorage.getItem('id');
  // let item = '';

  // const getUser = () => {
  //   axios.get(`/users/${itemId}`)
  //     .then((res) => {
  //       const selectedUser = res.data;
  //       setUser(selectedUser);
  //       console.log(selectedUser);
  //     })
  //     .catch(err => console.log(err))
  // }   

  // useEffect(() => {
  //   item = sessionStorage.getItem('token');
  //   if(item) {
  //     setLogin(true);
  //   }
    
  // }, [])

  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
    console.log(location.pathname)
  })

  const logoutUser = () => {
    setIsLogged(false);
    sessionStorage.clear();
  }

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar-container">
            <nav>
              <ul className="nav-links">
                  <div className="nav-title">
                    <p>気まぐれにスポーツを</p>
                    <Link className="link-title"to="/home"><h1>swish</h1></Link>
                  </div>
                  <div className="nav-main">
                    <li className="nav-item"><Link className="link" to="/items">住所から探す</Link></li>
                    <div className="nav-input">
                      <li className="sublink border"><Link className="link" to="/host">チェックイン</Link></li>
                      <li className="sublink"><Link className="link"to="/login">人数</Link></li>
                    </div>
                    <button className="search">検索</button>
                    <div className="nav-user">
                      <li className="sublink border-white"><Link className="user-link" to="/login">ログイン</Link></li>
                      <li className="sublink"><Link className="user-link"to="/register">新規登録</Link></li>
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </div>
                  </div>
                  
                </ul>
            </nav>
          {
            // isLogged
            // ?
            // <nav>
            //   <ul className="nav-links">
            //     <div>
            //       <p>気まぐれにスポーツを</p>
            //       <li><Link className="link" to="/home">Swish</Link></li>
            //     </div>
            //     <div className="nav-left">
            //       <li><Link className="link" to="/items">Find a court</Link></li>
            //       <li><Link className="link" to="/host">Host a court</Link></li>
            //       <li><Link className="link" to="/groups">Groups</Link></li>
            //       <li><Link className="link" to="/profile">{user}</Link></li>
            //       <li><Link className="link" to="/home" onClick={logoutUser}>Log Out</Link></li>
            //     </div>
            //   </ul>
            // </nav>
            // :<nav>
            //   <ul className="nav-links">
            //       <div className="nav-title">
            //         <p>気まぐれにスポーツを</p>
            //         <li><Link className="link" to="/home">Swish</Link></li>
            //       </div>
            //       <div className="nav-left">
            //         <li><Link className="link" to="/items">Find a court</Link></li>
            //         <li><Link className="link" to="/host">Host a court</Link></li>
            //         <li><Link className="link" to="/login">Log in</Link></li>
            //         <li><Link className="link" to="/register">Sign up</Link></li>
            //       </div>
                  
            //     </ul>
            // </nav>
          }
        </div>
        
      </div>
    </React.Fragment>
    
  )
}

export default Navbar;
