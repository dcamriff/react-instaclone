import React, {Component} from 'react';
import {FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch} from 'react-icons/lib/fa';
import styled from 'styled-components';

const Nav = styled.div `
background-color: white;
display: flex;
justify-content: space-between;
webkit-box-align: center;
align-items: center;
border: 0 solid #000;
padding: 26px 5vw;
width: 90vw;
height: 25px;
border-bottom: 1px solid rgba(0,0,0,.0975);
font-family: "Open Sans";

p{
  font-size: 1.75rem;
  font-family: "Oleo Script", cursive;
  margin: 0px;
  display: block; {
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em:
    -webkit-margin-start: 0px;
    -webit-margin-end: 0px;
  }
  svg{
    margin-bottom: 5px;
  }
}
`
const SearchContainer = styled.div`
background: #fafafa;
border: 1px solid #dbdbdb;
width: 25%;
padding: 7px;
border-radius: 3px;
color: #999;
svg{
    margin-bottom: 5px;
  }

input{
  border: none;
  font-weight: 300;
  background: transparent;
  text-align: center;
}
`
const IconsContainer = styled.div`
width: 25%;
display: flex;
justify-content: space-around;
`
const Icon = IconsContainer.extend`
size: 28px;
`


class Navbar extends Component {
  render() {
    return (
      <Nav>
        <p><FaInstagram/>
          | <strong>Instaclone</strong></p>
        <SearchContainer>
          <FaSearch/><input type="text" placeholder="Search"/>
        </SearchContainer>
        <IconsContainer>
        <Icon>
          <FaCompass size={28}/>
          </Icon>
          <Icon>
          <FaHeartO size={28}/>
          </Icon>
          <Icon>
          <FaUser size={28}/>
          </Icon>
        </IconsContainer>
      </Nav>
    )
  }
}

export default Navbar