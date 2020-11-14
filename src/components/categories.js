import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
class Categories extends React.Component{
    render(){
        return(
            <div className="categories">
                <h4 className="all">ALL CATEGORIES <KeyboardArrowDownIcon className="downarrow"/></h4>
                <ul>
                    <a href=""><li>Mobile Phones</li></a>
                    <a href=""><li>Cars</li></a>
                    <a href=""><li>Motorcycles</li></a>
                    <a href=""><li>Houses</li></a><a href=""><li>Tv-Video-Audio</li></a>
                    <a href=""><li>Tablets</li></a>
                    <a href=""><li>Land & Ports</li></a>
                </ul>
            </div>
        );
    }
}
export default Categories;