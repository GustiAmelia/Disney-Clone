import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { selectName, selectPhoto, setSignOut, setUserLogin } from '../features/user/userSlice';
import { auth, provider } from '../firebase';


function Header() {

  const dispatch = useDispatch();
  const history = useHistory();

  const name = useSelector(selectName);
  const photo = useSelector(selectPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }));
        history.push('/')
      }
    })
  },[])

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));
      history.push('/')
    })
  }

  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(setSignOut());
      history.push('/login')
    })
  }
  
  return (
    <Nav>
      <Logo src='/images/logo.svg'/>

      {
        !name ? (
          <LoginContainer>
            <Login onClick={signIn}>Login</Login>
          </LoginContainer>
        ) : (
          <>
            <NavMenu>
              <a>
                <img src='/images/home-icon.svg' alt='...'/>
                <span>HOME</span>
              </a>
              <a>
                <img src='/images/search-icon.svg' alt='...'/>
                <span>SEARCH</span>
              </a>
              <a>
                <img src='/images/watchlist-icon.svg' alt='...'/>
                <span>WATCHLIST</span>
              </a>
              <a>
                <img src='/images/original-icon.svg' alt='...'/>
                <span>ORIGINALS</span>
              </a>
              <a>
                <img src='/images/movie-icon.svg' alt='...'/>
                <span>MOVIES</span>
              </a>
              <a>
                <img src='/images/series-icon.svg' alt='...'/>
                <span>SERIES</span>
              </a>
            </NavMenu>

            <UserImg onClick={signOut} src={photo}/>
          </>
        )
      }
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background : #090b13;
  height : 70px;
  display:flex;
  align-items :center;
  padding : 0 36px;
  overflow-x:hidden;
`

const Logo = styled.img`
  width : 80px;
  cursor: pointer;
`

const NavMenu = styled.div`
  display: flex;
  flex :1;
  margin-left:25px;

  a {
    display : flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position:relative;

      &:after {
        content:"";
        height: 2px;
        position: absolute;
        left:0;
        right:0;
        bottom : -6px;
        background: white;
        opacity:0;
        transform-origin : left center;
        transform :scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        opacity:1;
        transform :scaleX(1);
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height : 48px;
  border-radius:50%;
  object-fit :cover;
  cursor:pointer;
`

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding : 8px 18px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform:uppercase;
  background-color:rgba(0, 0, 0, 0.6);
  transtition: all 0.2s ease 0s;
  cursor:pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color:transparent;
  }
`
const LoginContainer = styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
`
