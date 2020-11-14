import React from 'react'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import HouseIcon from '@material-ui/icons/House';
import DevicesIcon from '@material-ui/icons/Devices';
import KingBedIcon from '@material-ui/icons/KingBed';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class List extends React.Component{
        render(){
            return(
                <>
                <h3>CHOOSE A CATEGORY</h3>
                    <ul className="list">
                        <li onClick={(e)=>{}}><PhoneAndroidIcon /> <span className="item">Mobiles</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li><LocalTaxiIcon /><span className="item">Vehicles</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li><HouseIcon /><span className="item">Property for Sale</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li><DevicesIcon /><span className="item">Electronics & Home Appliances</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li><KingBedIcon /><span className="item">Furniture & Home Decor</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li><SportsEsportsIcon /><span className="item">Books, Sports & Hobbies</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                    </ul>
                </>
            );
        }
}
export default List