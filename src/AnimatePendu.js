import React, {Component} from 'react'
import "./style/AnimatePendu.css"
import SvgPendu from "./SvgPendu";
import PropTypes from 'prop-types'

export default class AnimatePendu extends Component{

    // /*todo Gerer les apparision des elements du pendu*/
    displayElement(){
        const number = this.props.nbElt
        if(number > 0) {
            for (let i = 0; i < number; i++)
                [...document.querySelectorAll(".element-" + i)].map((elmt) =>
                    elmt.style.visibility = 'visible'
                )
        }else {
            [...document.querySelectorAll(".element")].map((elmt) =>
                elmt.style.visibility = 'hidden'
            )
        }
    }
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