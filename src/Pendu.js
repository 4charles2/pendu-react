import React, {Component} from 'react';
import AlphaKeyboard from "./AlphaKeyboard";
import AnimatePendu from "./AnimatePendu";
import KeyWord from "./KeyWord";

export default class Pendu extends Component {

    render() {
        return (
            <div>
                <Score/>
                <AnimatePendu/>
                <KeyWord/>
                <AlphaKeyboard/>
            </div>
        )
    }
}

const Score = () =>
    <dl style={{borderLeft: '5px solid #458486', position: 'absolute', left: '10%', }}>
        <dt>Scores :</dt>
        <dd>
            <dt>Joueur 1:</dt>
            <dd>Score points</dd>
            <dt>Joueur 2:</dt>
            <dd>Scores points</dd>
        </dd>
    </dl>