import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState();
  return (
    
    <Container>
      <a>
        <img src="images/logo.svg"></img>
      </a>

      <Menu>
      <a href="#">Model S</a>
      <a href="#">Model 3</a>
      <a href="#">Model X</a>
      <a href="#">Model Y</a>
      </Menu>


    <RightMenu>
      <a href="#">Shop</a>
      <a href="#">tesla Sccount</a>
      <CustomMenu onClick={() => setBurgerStatus(true)}/>
    </RightMenu>


    

    <BurgerNav show={burgerStatus}>
    <CloseWrapper>
      <Customclose onClick={() => setBurgerStatus(false)}/>
    </CloseWrapper>
      <li><a href="#">Model S</a></li>
      <li><a href="#">Model Y</a></li>
      <li><a href="#">Model 3</a></li>
      <li><a href="#">Model X</a></li>
      <li><a href="#">Solar Panels</a></li>
      <li><a href="#">Solar Roof</a></li>
      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Used Inventory</a></li>
      <li><a href="#">Trade-in</a></li>
      <li><a href="#">Cybertruck</a></li>
      <li><a href="#">Roadaster</a></li>

    </BurgerNav>
    



    </Container>




  )
}

export default Header


const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0; 
  right:0;
  z-index:1;
`

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
align-items:center;
@media (max-width: 768px) {display:none;}
  a { font-weight:bold; 
      font-size:14px;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:nowrap;

  }

`

const RightMenu = styled.div`
display:flex;
align-items:center;


a { font-weight:bold; 
  font-size:12px;
  text-transform:uppercase;
  margin-right:10px;
  flex-wrap:nowrap;
  
}

`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  background-color:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:left;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition:transform 0.5s;
  li{
      padding:15px;
      border-bottom:1px solid rgba(0,0,0,.2);
    }
  
    a{
      font-weight:bold;
    }
  
`

const Customclose = styled(CloseIcon)`
cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    
`