import React, {Component} from 'react'
import './style/AplhaKeyboard.css'
import PropTypes from 'prop-types'


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * @name AlphaKeyboard
 * @description * <p color=#FA8072>Genere un clavier de lettre</p>
 * @version 1.0.2
 *
 * <p>Par default si la prop letters n'est pas definie retourne un clavier des lettres de l'alphabet de A-Z en majuscule</p>
 * <p>Peut prendre également via les props une fonction onClick pour les evenements au click sur une lettre</p>
 * <p>La fonction onclick retourne la lettre qui à été cliquer</p>
 *
 * @param {array.<string>} letters [Optionnel]
 * un array des Lettres que l'on souhaite generer
 * @param {function} onClick [Optionnel]
 * La fonction a executer lors d'un clique sur une touche
 * @param {string} className [Optionnel] une class que l'on veut ajouter au contenaire du keybord
 * @param {array.<string> || string} showLetter [Optionnel] un array des lettres que l'on souhaite affiche les autres ne seront pas visible
 * @author [Tognol Charles](https://charles-tognol.fr)
 */
class AlphaKeyboard extends Component {
    displayLetter(letter) {
        if(this.props.showLetter && !this.props.showLetter.letters.includes(letter)) {
            console.log(this.props.showLetter.letters, this.props.showLetter.effect)
            return this.props.showLetter.effect
        } else
            return ''
    }

    //TEST non concluent
    // const letters = [.../[A-Z]/];
    render() {
        const {letters, onClick, className} = this.props
        return <div className={"keyboard " + (className || '')}>
            {letters.map((letter, index) =>
                <div
                    key={index}
                    className={"contain-touch touch" + letter + ' ' + this.displayLetter(letter)}
                    onClick={() => onClick(letter)}>

                    {
                        // J'ai fait le choix d'utiliser une image en background mais je ne le referais pas ^^
                        // Mauvais choix car pas simple et pas optimisé pour l'interactivite
                        /*{letter}*/
                    }
                </div>
            )}
        </div>
    }
}

AlphaKeyboard.propTypes = {
    letters: PropTypes.array,
    onClick: PropTypes.func,
    className: PropTypes.string,
    showLetter: PropTypes.shape({
        effect: PropTypes.oneOf(['hidden', 'click']),
        letters: PropTypes.arrayOf(PropTypes.string)
    })
}

AlphaKeyboard.defaultProps = {
    letters: alphabet,
    onClick: () => {
    },
    className: null,
    showLetter: null
}

export default AlphaKeyboard;