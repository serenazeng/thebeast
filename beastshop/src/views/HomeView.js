import React, {Component} from 'react';
import  HeaderBar from '../components/HeaderBar';
import  NavBar from '../components/NavBar';
import  Banner from '../components/Banner';
import  Daily from '../components/Daily';
import  Products_title from '../components/Products_title';
import  Products from '../components/Products';

class HomeView extends Component {
    render(){
        return(
            <div>
                <HeaderBar/>
                <NavBar/>
                <Banner/>
                <Daily/>
                <Products_title/>
                <Products/>

            </div>
        )
    }
}

export default HomeView;