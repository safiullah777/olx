import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class Middle extends React.Component{
    render(){
       return(
        <div>
            <div className="image"></div>
            <div className="recom">
                <span>Fresh recommendations</span>
                <div className="cards" style={{position:"relative"}}>
                    <div><img src="https://apollo-singapore.akamaized.net:443/v1/files/b2j6d53d6eru3-PK/image;s=272x0" alt=""/>
                    <FormControlLabel style={{position:"absolute",left:"225px"}} control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}label=""/>
                    <h3 style={{margin:"10px 25px 0px"}}>Rs 19,000,000</h3>
                    <div style={{margin:"0px 20px",fontSize:"14px"}}>toyota corolla</div>
                    <div style={{margin:"0px 20px",fontSize:"14px",color:"gray"}}>toyaota col=rolla 2017 model</div>
                    <div style={{margin:"10px 20px",fontSize:"10px",color:"gray"}} id="location" >KARACHI</div>
                    </div>
                    

                </div>
            </div>
        </div>
       );
    }
}
export default Middle;