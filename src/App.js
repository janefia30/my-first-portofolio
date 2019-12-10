import React, { Component } from 'react';
import Background from './bgmoss.png';

import Icon from "./assets/img/calendar_view_day_24px.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: window.matchMedia("(min-width: 648px)").matches,

        };
    }

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 648px)").addListener(handler);
    }



    render() {
        const { matches } = this.state

        return (
            <Router>

                <div style={styles.background}>
                    <div style={styles.overlay}>
                        <div style={{ display: 'flex', position: "absolute", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.75)", justifyContent: 'center' }}>
                        </div>
                        <Switch>

                            <Route path="/">
                                <div style={styles.container}>
                                    <div style={styles.gogreen}>
                                        GO GREEN
                                </div>
                                    <div style={styles.path}>
                                        <img src={Icon} alt="" />
                                    </div>
                                    <div style={styles.make}>
                                        Make It Green
                                </div>
                                    <div style={styles.now}>
                                        Now more than ever. Our planet is need our
                                </div>


                                    <div style={styles.rectangle} />
                                    <div style={styles.Do}>
                                        Do it Now
                                </div>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>


        );
    }
}
let w = window.innerWidth;
let h = window.innerHeight;
const styles = {
    background: {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        position: 'absolute',
        width: '1497px',
        height: '842px',
        left: '0px',
        top: '0px',
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        alignSelf: 'center',
        marginTop: 50,
        borderStyle: 'solid',
        borderWidth: 5,
        maxWidth: 50,
        color: '#fff',
        justifyContent: 'center',
        padding: 10,
        fontWeight: 'bold'
    },

    gogreen: {
        position: 'absolute',
        left: '73px',
        top: '57px',

        fontFamily: 'Poppins',
        fontstyle: 'normal',
        fontweight: 'normal',
        fontsize: '24px',
        lineheight: '36px',

        /* identical to box height */

        textalign: 'center',

        color: '#FFFFFF'
    },
    make: {
        position: 'absolute',
        left: '471px',
        top: '253px',
        display: 'flex',
        borderRadius: 10,
        marginRight: 16,

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '48px',
        lineHeight: '72px',
        /* identical to box height */


        color: '#FFFFFF'
    },
    path: {

        position: 'absolute',
        width: '48px',
        height: '48px',
        left: '1160px',
        top: '51px',

    },
    now: {
        position: 'absolute',
        left: '380px',
        top: '325px',

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '36px',
        /* identical to box height */

        textAlign: 'center',

        color: '#FFFFFF',
    },
    Do: {
        position: 'absolute',
        left: '582px',
        top: '410px',

        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '36px',
        /* identical to box height */


        color: '#FFFFFF',
    },
    rectangle: {
        position: 'absolute',
        width: '195px',
        height: '55px',
        left: '542px',
        top: '400px',

        background: '#E67E22',
        borderRadius: '100px'
    },
    overlay: {
        backgroundColor: "",
        height: h,
        width: '100%'
    },
}

export default App;