import React from 'react';
import List from './list'
import Sell from './sell'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import HouseIcon from '@material-ui/icons/House';
import DevicesIcon from '@material-ui/icons/Devices';
import KingBedIcon from '@material-ui/icons/KingBed';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button'
import firebase from '../firebase'
class PostAd extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "",
            condition: "",
            type: "",
            company: "",
            title: "",
            description: "",
            price: "",
            _state: "",
            city: "",
            neighbourhood: "",
            name: "",
            phone_no: "",
            _file:[],
            imageURL:[]
        }
    }
    upload_file = (e) => {
        // for(var i=0;i<this.state.length;i++){
        
        var storageRef = firebase.storage().ref();
        
        var mountainImagesRef = storageRef.child('images/' + this.state._file[e].name).put(this.state._file[0]);
        mountainImagesRef.on('state_changed', function(snapshot){
                console.log(snapshot)
          }, function(error) {
          }, function() {
            mountainImagesRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
              var imageURL=[];
              imageURL.push(downloadURL);
              console.log(imageURL);

            });
          });
        // }
        // this.setState({imageURL:imageURL})
    }

    send_data = () => {
        // if(this.state.category=="Mobiles/Tabs"&&(this.state.condition==""||this.state.type==""||this.state.company==""||this.state.company==undefined||this.state.title==""||this.state.description==""||this.state.price==""||this.state._state==undefined||this.state.city==""||this.state.neighbourhood==""||this.state.name==""||this.state.phone_no=="")){
        //     alert("please fill all the fields");
        // }
        // else{
        firebase.database().ref('Data').push({
            category: this.state.category,
            condition: this.state.condition,
            type: this.state.type,
            company: this.state.company,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            _state: this.state._state,
            city: this.state.city,
            neighbourhood: this.state.neighbourhood,
            name: this.state.name,
            phone_no: this.state.phone_no,
            file: this.state._file,
            imageURL:this.state.imageURL
        })
        // }
    }
    render() {
        return (
            <div>
                <h1 className="heading">POST YOUR AD</h1>
                <div className="choose">
                    {console.log(this.state._file)}
                    <h3>CHOOSE A CATEGORY</h3>
                    <ul className="list">
                        <li onClick={() => { document.getElementsByClassName('choose')[0].style = "display:none"; document.getElementsByClassName('details')[0].style = "display:block !important"; this.setState({ category: "Mobiles/Tabs" }) }}><PhoneAndroidIcon /> <span className="item">Mobiles/Tabs</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li onClick={() => { document.getElementsByClassName('choose')[0].style = "display:none"; document.getElementsByClassName('details')[0].style = "display:block !important"; this.setState({ category: "Vehicles" }) }}><LocalTaxiIcon /><span className="item">Vehicles</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li onClick={() => { document.getElementsByClassName('choose')[0].style = "display:none"; document.getElementsByClassName('details')[0].style = "display:block !important"; this.setState({ category: "Property for Sale" }) }}><HouseIcon /><span className="item">Property for Sale</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li onClick={() => { document.getElementsByClassName('choose')[0].style = "display:none"; document.getElementsByClassName('details')[0].style = "display:block !important"; this.setState({ category: "Electronics & Home Appliances" }) }}><DevicesIcon /><span className="item">Electronics & Home Appliances</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li onClick={() => { document.getElementsByClassName('choose')[0].style = "display:none"; document.getElementsByClassName('details')[0].style = "display:block !important"; this.setState({ category: "Furniture & Home Decor" }) }}><KingBedIcon /><span className="item">Furniture & Home Decor</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                        <li onClick={() => { document.getElementsByClassName('choose')[0].style = "display:none"; document.getElementsByClassName('details')[0].style = "display:block !important"; this.setState({ category: "Books, Sports & Hobbies" }) }}><SportsEsportsIcon /><span className="item">Books, Sports & Hobbies</span><ArrowForwardIosIcon className="forwardarrow" /></li>
                    </ul>
                </div>
                {/* <Sell /> */}
                <div className="details">
                    {/* {console.log(this.state.category)} */}
                    <div className="head">
                        <h3>Selected Categories</h3>
                        <span className="selected-cat">{this.state.category}</span>
                    </div>
                    <div className="lower">
                        <h3>INCLUDE SOME details</h3>

                        <div className="condition">
                            <span>Condition *</span>
                            <button onClick={(e) => { this.setState({ condition: e.target.innerText }); var a = document.getElementsByClassName('focus'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('focus') } e.target.classList.add('focus') }}>New</button>
                            <button onClick={(e) => { this.setState({ condition: e.target.innerText }); var a = document.getElementsByClassName('focus'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('focus') } e.target.classList.add('focus') }}>Used</button>
                        </div>
                        <div className="condition">
                            <span>Mobile/Tablet *</span>
                            <button onClick={(e) => { this.setState({ type: e.target.innerText }); var a = document.getElementsByClassName('mobtab'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('mobtab') } this.setState({ mobtab: "Mobile" }); e.target.classList.add('mobtab') }}>Mobile</button>
                            <button onClick={(e) => { this.setState({ type: e.target.innerText }); var a = document.getElementsByClassName('mobtab'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('mobtab') } this.setState({ mobtab: "Tablet" }); e.target.classList.add('mobtab') }}>Tablet</button>
                        </div>
                        {this.state.mobtab === "Mobile" ?

                            <div className="mobdiv">
                                <span className="make">make*</span>
                                <select onChange={(e) => this.setState({ company: e.target[e.target.selectedIndex].value })} onClick={(e) => { e.target.classList.add('mobfocus') }} className="moblist company" id="moblist" width="100%">
                                    <option value=""></option>
                                    <option selected value="Apple" >Apple</option>
                                    <option value="Samsung">Samsung</option>
                                </select>
                            </div> : this.state.mobtab === "Tablet" ?
                                <div className="tablist condition">
                                    <button onClick={(e) => { this.setState({ company: e.target.innerText }); var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Apple</button>
                                    <button onClick={(e) => { this.setState({ company: e.target.innerText }); var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Dany Tabs</button>
                                    <button onClick={(e) => { this.setState({ company: e.target.innerText }); var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Q Tabs</button>
                                    <button onClick={(e) => { this.setState({ company: e.target.innerText }); var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Samsung</button>
                                    <button onClick={(e) => { this.setState({ company: e.target.innerText }); var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Other Tablets</button>
                                </div> : false}

                        <div className="title">
                            <span className="make">ad title*</span>
                            <input type="text" maxLength="70" onClick={(e) => { e.target.classList.remove('red'); e.target.classList.add('titleinput1'); document.getElementsByClassName('checktext')[0].innerText = "Mention the key features of your item (e.g. brand, model, age, type)"; document.getElementsByClassName('checktext')[0].classList.remove('red1') }} onChange={(e) => { this.setState({ title: e.target.value }); document.getElementsByClassName('counter')[0].innerText = e.target.value.length + "/70"; return (e.target.value.length >= 5 ? (e.target.classList.remove('red'), document.getElementsByClassName('checktext')[0].classList.remove("red1")) : false) }} onBlur={(e) => { if (e.target.value.length < 5) { e.target.classList.add('red'); document.getElementsByClassName('checktext')[0].classList.add("red1"); document.getElementsByClassName('checktext')[0].innerText = "A minimum length of 5 characters is required. Please edit the field." } }} className="titleinput" />
                            <span className="checktext">Mention the key features of your item (e.g. brand, model, age, type)</span><span className="counter">0/70</span>
                        </div>

                        <div className="description">
                            <span className="make">description*</span>
                            <textarea onChange={(e) => { this.setState({ description: e.target.value }); document.getElementsByClassName('counter')[1].innerText = e.target.value.length + "/4096"; return (e.target.value.length >= 20 ? (e.target.classList.remove('red'), document.getElementsByClassName('checktext')[1].classList.remove("red1")) : false) }} onClick={(e) => { e.target.classList.add('titleinput1'); e.target.classList.remove('red');; document.getElementsByClassName('checktext')[1].innerText = "Include condition, features and reason for selling"; document.getElementsByClassName('checktext')[1].classList.remove('red1') }} name="" onBlur={(e) => { if (e.target.value.length < 20) { e.target.classList.add('red'); document.getElementsByClassName('checktext')[1].classList.add("red1"); document.getElementsByClassName('checktext')[1].innerText = "A minimum length of 20 characters is required. Please edit the field." } }} id="description" maxLength="4096"></textarea>
                            <span className="checktext">Include condition, features and reason for selling</span><span className="counter">0/4096</span>
                        </div>

                        <div className="price">
                            <h3>SET A PRICE</h3>
                            <div className="title">
                                <span className="make">price*</span>
                                <div ><span className="rs">Rs</span><input onChange={(e) => { return this.setState({ price: e.target.value }) }} id="price" type="number" onClick={(e) => { e.target.classList.add('titleinput1'); }} className="titleinput" /></div>
                            </div>
                        </div>
                        <div id="photo">
                            <h3>UPLOAD UPO 12 PHOtOS</h3>
                            <div className="photos">
                                <input type="file" name="" onChange={(e) => {this.state._file[0]=(e.target.files[0]); this.upload_file(0); return this.setState({ _file:this.state._file})}}   className="addphoto" id="" />
                                <input type="file" name="" onChange={(e) => {this.state._file[1]=(e.target.files[0]); this.upload_file(1); return this.setState({ _file:this.state._file})}}   className="addphoto" id="" />
                                <input type="file" name=""  onChange={(e) => {this.state._file[2]=(e.target.files[0]); this.upload_file(2); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" />
                                <input type="file" name=""  onChange={(e) => {this.state._file[3]=(e.target.files[0]); this.upload_file(3); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" />
                                {/* <input type="file" name=""  onChange={(e) => {this.state._file.push(e.target.files[0]); this.upload_file(); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" />
                                <input type="file" name=""  onChange={(e) => {this.state._file.push(e.target.files[0]); this.upload_file(); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" />
                                <input type="file" name=""  onChange={(e) => {this.state._file.push(e.target.files[0]); this.upload_file(); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" />
                                <input type="file" name=""  onChange={(e) => {this.state._file.push(e.target.files[0]); this.upload_file(); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" />
                                <input type="file" name=""  onChange={(e) => {this.state._file.push(e.target.files[0]); this.upload_file(); return this.setState({ _file:this.state._file})}}  className="addphoto" id="" /> */}

                            </div>
                        </div>
                        <div className="condition title">
                            <h3>CONFIRM YOUR LOCATION</h3>
                            <span>State*</span>
                            <select className="titleinput" onChange={(e) => { this.setState({ _state: e.target[e.target.selectedIndex].value }); return e.target[e.target.selectedIndex].value.length > 0 ? (document.getElementById('city').classList.remove('none'), document.getElementById('city').classList.add('block')) : document.getElementById('city').classList.add('none') }} placeholder="enter your state" name="" id="" onClick={(e) => { e.target.classList.add('titleinput1') }}>

                                <option value=""></option>
                                <option value="Sindh">Sindh</option>
                                <option value="Punjab">Panjab</option>
                                <option value="Punjab">Balochistan</option>
                                <option value="Punjab">Khyber Pakhtunkhwa</option>
                                <option value="Punjab">Northen Areas</option>
                                <option value="Punjab">Islamabad Capital Territory</option>
                            </select>
                            <div id="city" className="condition none">
                                <span>City*</span>
                                <input type="text" onChange={(e) => { this.setState({ city: e.target.value }); return e.target.value.length >= 3 ? (document.getElementById('neighbourhood').classList.remove('none'), document.getElementById('neighbourhood').classList.add('block')) : document.getElementById('neighbourhood').classList.add('none') }} placeholder="enter your city name" className="titleinput" onClick={(e) => { e.target.classList.add('titleinput1') }} />
                            </div>
                            <div id="neighbourhood" className="condition none">
                                <span>Neighbourhood*</span>
                                <input type="text" className="titleinput" onChange={(e) => { this.setState({ neighbourhood: e.target.value }) }} onClick={(e) => { e.target.classList.add('titleinput1') }} />
                            </div>

                        </div>
                        <div className="condition title">
                            <h3>REVIEW YOUR DETAILS</h3>
                            <span>Name</span>
                            <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} className="titleinput" onClick={(e) => { e.target.classList.add('titleinput1') }} />
                            <span>Mobile Phone Number*</span>
                            <input type="text" className="titleinput" onChange={(e) => { this.setState({ phone_no: e.target.value }) }} onClick={(e) => { e.target.classList.add('titleinput1') }} />
                        </div>
                        <div>
                            <div className="condition title">
                                <Button variant="contained" onClick={() => { this.send_data();}}>
                                    Postnow
                        </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PostAd;
