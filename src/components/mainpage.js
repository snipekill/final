import React, {Component} from 'react';

import NavBar from "./navbar";
import MainDisplay from "./main_display";
import FeatureDisplay from "./features_display";
import Footer from "./footer";
import NavBAr from "./navbar3";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <NavBAr/>
                <MainDisplay/>
                <FeatureDisplay/>
                <Footer/>
            </div>
        );
    }
}

