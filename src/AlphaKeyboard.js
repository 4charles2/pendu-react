import React, {Component} from 'react'
import './style/AplhaKeyboard.css'
import PropTypes from 'prop-types'


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * Genere un clavier de lettre fournit via un tableau de lettre
 * Par default si la prop letters n'est pas definie retourne un clavier des lettres de l'alphabet de A-Z en majuscule
 * Peut prendre également via les props une fonction onClick pour les evenements au click sur une lettre
 * La fonction onclick retourne la lettre qui à été cliquer
 */
class AlphaKeyboard extends Component {
    //TEST non concluent
    // const letters = [.../[A-Z]/];
    render() {
        const {letters, onClick} = this.props
        return <div className={"keyboard " + (this.props.className || '')} >
            {letters.map((letter, index) =>
                <div
                    key={index}
                    className={"contain-touch"}
                    id={"touche" + letter}
                    onClick={() => onClick(letter)}>
                    {/*{letter}*/}
                </div>
            )}
        </div>
    }
}

AlphaKeyboard.propTypes = {
    letters: PropTypes.array,
    onClick: PropTypes.func
}

AlphaKeyboard.defaultProps = {
    letters: alphabet,
    onClick: () => {}
}

export default AlphaKeyboard;