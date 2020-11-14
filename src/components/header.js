import React from 'react';
import logo from '../pics/olx.png'
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'
class Header extends React.Component{
    render(){
      return(
        <div className="header">
          <div>
            <img src={logo} alt="" className="logo" />
            <div className="search"><SearchIcon className="search1" style={{ fontSize: 35 }}/></div>
            <input type="search" name="" id="search"/>
            <input type="search" name="" id="search2" placeholder="Find Cars, Mobile Phones and more..."/>
            <div className="search1"><SearchIcon style={{ fontSize: 35 }} className="search_icon"/></div>
            <h4 className="login">Login <span></span></h4> 
            <Link to="/postad" ><button className="sell-btn"><AddIcon className="addicon"/> SELL</button></Link>
          </div>
  
        </div>
      );
    }
  }
  export default Header;