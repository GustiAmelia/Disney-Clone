import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg'/>

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

      <UserImg src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Jungkook_for_Dispatch_%22Boy_With_Luv%22_MV_behind_the_scene_shooting%2C_15_March_2019_07_%28cropped%29.jpg'/>
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
