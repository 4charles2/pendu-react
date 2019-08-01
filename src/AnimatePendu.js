import React, {Component} from 'react'
import "./style/AnimatePendu.css"
import SvgPendu from "./SvgPendu";
import PropTypes from 'prop-types'

export default class AnimatePendu extends Component{

    /**
     * Affiche les elements visuel du pendu
     * chaque element possede une class element et un class element-X (X est également au numéro suivant l'ordre dans lequel il doit être affiché)
     * La premiere fois que le cette fonction va fonctionnée sera depuis la fonction componentDidMount car les elements du DOM ne sont encore généré avant
     * et l'instruction document.querySelectorAll renverra undefined
     *
     */
    displayElement(){
        const number = this.props.nbElt
        if(number > 0) {
            // Affiche les elements du pendu suivant le nombre de mauvaise lettre saisie
            for (let i = 0; i < number; i++)
                [...document.querySelectorAll(".element-" + i)].map((elmt) =>
                    elmt.style.visibility = 'visible'
                )
        }else {
            // Cache tout les elements du pendu
            [...document.querySelectorAll(".element")].map((elmt) =>
                elmt.style.visibility = 'hidden'
            )
        }
    }

    /**
     * Appel la fonction displayElement() pour cacher les elements visuel du pendu
     * L'appel s'effectue dans componentDidMount car les élément du DOM ne peuvent être accessible avant.
     */
    componentDidMount() {
        this.displayElement()
    }

    render() {
        return(
            <div className={"contain-animate-pendu"}>
                <div className={"pendu"}>
                    <SvgPendu className={"img-pendu"}/>
                    { this.displayElement()}
                </div>
            </div>
        )
    }
}

AnimatePendu.propTypes = {
    nbElt: PropTypes.number.isRequired,
}

AnimatePendu.defaultProps = {
    nbElt: 0,
}