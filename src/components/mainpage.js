import React, {Component} from 'react';

import NavBar from "./navbar";
import MainDisplay from "./main_display";
import FeatureDisplay from "./features_display";
import Footer from "./footer";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <MainDisplay/>
                <FeatureDisplay/>
                {/*<Footer className={"footer1"}/>*/}
            </div>
        );
    }
}

