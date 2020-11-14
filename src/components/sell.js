import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Button from '@material-ui/core/Button'
import firebase from '../firebase'

class Sell extends React.Component {
    constructor() {
        super();
        this.state = {
            condition:"",
            type:""
        }
    }


    send_data = () => {
        firebase.database().ref('Data').push({
            condition: this.state.condition
        })
    }

    render() {
        return (
            <div className="details">
                {console.log(this.state.condition)}
                <div className="head">
                    <h3>Selected Categories</h3>
                    <span className="selected-cat">Mobile/Tabs</span>
                </div>
                <div className="lower">
                    <h3>INCLUDE SOME details</h3>

                    <div className="condition">
                        <span>Condition *</span>
                        <button onClick={(e) => { this.setState({condition: e.target.innerText}) ; var a = document.getElementsByClassName('focus'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('focus') } e.target.classList.add('focus') }}>New</button>
                        <button onClick={(e) => { this.setState({condition: e.target.innerText}) ; var a = document.getElementsByClassName('focus'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('focus') } e.target.classList.add('focus') }}>Used</button>
                    </div>
                    <div className="condition">
                        <span>Mobile/Tablet *</span>
                        <button onClick={(e) => {this.setState({type: e.target.innerText}); var a = document.getElementsByClassName('mobtab'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('mobtab') } this.setState({ mobtab: "Mobile" }); e.target.classList.add('mobtab') }}>Mobile</button>
                        <button onClick={(e) => {this.setState({type: e.target.innerText}) ; var a = document.getElementsByClassName('mobtab'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('mobtab') } this.setState({ mobtab: "Tablet" }); e.target.classList.add('mobtab') }}>Tablet</button>
                    </div>
                    {this.state.mobtab === "Mobile" ?

                        <div className="mobdiv">
                            <span className="make">make*</span>
                            <select onChange={(e)=>console.log(e.target[e.target.selectedIndex].value) } onClick={(e) => { e.target.classList.add('mobfocus') }} className="moblist company" id="moblist" width="100%">

                                <option selected value="Apple" >Apple</option>
                                <option value="Samsung">Samsung</option>
                            </select>
                        </div> : this.state.mobtab === "Tablet" ?
                            <div className="tablist condition">
                                <button onClick={(e) => { var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Apple</button>
                                <button onClick={(e) => { var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Dany Tabs</button>
                                <button onClick={(e) => { var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Q Tabs</button>
                                <button onClick={(e) => { var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Samsung</button>
                                <button onClick={(e) => { var a = document.getElementsByClassName('tablet'); for (var i = 0; i < a.length; i++) { a[i].classList.remove('tablet') } e.target.classList.add('tablet') }}>Other Tablets</button>
                            </div> : false}

                    <div className="title">
                        <span className="make">ad title*</span>
                        <input type="text" maxLength="70" onClick={(e) => { e.target.classList.remove('red'); e.target.classList.add('titleinput1'); document.getElementsByClassName('checktext')[0].innerText = "Mention the key features of your item (e.g. brand, model, age, type)"; document.getElementsByClassName('checktext')[0].classList.remove('red1') }} onChange={(e) => { document.getElementsByClassName('counter')[0].innerText = e.target.value.length + "/70"; return (e.target.value.length >= 5 ? (e.target.classList.remove('red'), document.getElementsByClassName('checktext')[0].classList.remove("red1")) : false) }} onBlur={(e) => { if (e.target.value.length < 5) { e.target.classList.add('red'); document.getElementsByClassName('checktext')[0].classList.add("red1"); document.getElementsByClassName('checktext')[0].innerText = "A minimum length of 5 characters is required. Please edit the field." } }} className="titleinput" />
                        <span className="checktext">Mention the key features of your item (e.g. brand, model, age, type)</span><span className="counter">0/70</span>
                    </div>

                    <div className="description">
                        <span className="make">description*</span>
                        <textarea onChange={(e) => { document.getElementsByClassName('counter')[1].innerText = e.target.value.length + "/4096"; return (e.target.value.length >= 20 ? (e.target.classList.remove('red'), document.getElementsByClassName('checktext')[1].classList.remove("red1")) : false) }} onClick={(e) => { e.target.classList.add('titleinput1'); e.target.classList.remove('red');; document.getElementsByClassName('checktext')[1].innerText = "Include condition, features and reason for selling"; document.getElementsByClassName('checktext')[1].classList.remove('red1') }} name="" onBlur={(e) => { if (e.target.value.length < 20) { e.target.classList.add('red'); document.getElementsByClassName('checktext')[1].classList.add("red1"); document.getElementsByClassName('checktext')[1].innerText = "A minimum length of 20 characters is required. Please edit the field." } }} id="description" maxLength="4096"></textarea>
                        <span className="checktext">Include condition, features and reason for selling</span><span className="counter">0/4096</span>
                    </div>

                    <div className="price">
                        <h3>SET A PRICE</h3>
                        <div className="title">
                            <span className="make">price*</span>
                            <div ><span className="rs">Rs</span><input id="price" type="number" onClick={(e) => { e.target.classList.add('titleinput1'); }} className="titleinput" /></div>
                        </div>
                    </div>
                    <div id="photo">
                        <h3>UPLOAD UPO 12 PHOtOS</h3>
                        <div className="photos">
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />
                            <input type="file" name="" className="addphoto" id="" />

                        </div>
                    </div>
                    <div className="location">

                    </div>
                    <div>
                        <Button variant="contained" onClick={() => this.send_data()}>
                            Postnow
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sell;