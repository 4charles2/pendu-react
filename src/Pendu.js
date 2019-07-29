import React, {Component} from 'react';
import AlphaKeyboard from "./AlphaKeyboard";
import AnimatePendu from "./AnimatePendu";


export default class Pendu extends Component {


    render() {
        return (

            <AlphaKeyboard/>
        )
    }
}

const HideWord = () =>
    <h1>Le mot caché</h1>