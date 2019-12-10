import React, { Component } from 'react';
import Background from './bali.png';
import Foto from "./assets/img/download.png";
import { Button } from "./components";
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


    render() {
        const { matches } = this.state
        return (
            <Router>
                <div style={styles.background}>
                    <div style={styles.overlay}>


                        <Switch>

                            <Route path="/">
                                <div style={styles.gogreen}>
                                    <div>
                                        <center>  <img src={Foto} alt="" style={{ height: 168, width: 150 }} /></center>
                                    </div>
                                    <div style={matches ? styles.h1 : styles.h2}>
                                        A Better way to <div style={styles.travel}>travel  to bali</div>
                                    </div>
                                    <div style={styles.wrapperScroll}>
                                        <p style={styles.textScroll}>Cheapest and Easyer</p>
                                    </div>
                                    <div style={styles.wrapperInput}>

                                        <button style={styles.button1} >Red more</button>
                                        <button style={styles.button} >Reservation</button>
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
        display: 'flex',
        backgroundImage: `url(${Background})`,
        /*full height*/
        height: '100%',
        backgoundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    overlay: {
        backgroundColor: "rgba(81, 77, 67, 0.7)",
        height: h,
        width: '100%'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',

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
    h1: {
        alignSelf: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        maxWidth: 300,
        fontFamily: 'pacifico',

        color: '#FFFFFF'

    },
    h2: {
        alignSelf: 'center',
        marginTop: 50,
        color: 'white',
        fontSize: 36,

        textAlign: 'center'
    },
    wrapperInput: {
        // display: 'flex',
        // alignSelf: 'center',
        // marginTop: 60,
        // backgroundColor: 'red'
    },
    bgInput: {
        display: 'flex',
        backgroundColor: '#fff',
        borderRadius: 40,
        marginRight: 16
    },

    button: {
        position: 'absolute',
        width: '156px',
        height: '46px',
        left: '646px',
        top: '481px',
        fontFamily: 'pacifico',
        background: '#FCB371',
    },
    button1: {
        position: 'absolute',
        width: '156px',
        height: '46px',
        left: '450px',
        top: '481px',
        fontFamily: 'pacifico',
        background: '#FFFF',
    },
    wrapperScroll: {
        display: 'flex', alignSelf: 'center', marginTop: 20, flexDirection: 'column'
    },
    textScroll: {
        color: '#fff', maxWidth: 150, textAlign: 'center'
    },
    icon: {
        alignSelf: 'center'
    },
    travel: {
        color: '#FCB371'
    },
    section: {
        margin: 8,
        padding: 8,
        borderStyle: 'groove',
        borderWidth: 1,
        color: '#000'
    },
    Link: {
        textDecoration: 'none'
    }
};

export default App;