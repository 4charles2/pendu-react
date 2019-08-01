import React, {Component} from 'react'
import PropTypes from 'prop-types'

import "./style/popup.css"

/**
 * Creer un popup au milieu de l'ecran puis s'efface au bout de temps renseigné en prop time
 * Par defaut il s'effacera au bout de 3 seconde
 *
 * @param {string} Le message à afficher dans le popup
 * @param {string} [optionnel] className pour appliquer des styles css différents
 * @param {number} [optionnel] time Le durée en seconde au bout duquel l'element sera suprimé par defaut 3 seconde
 */
export default class Popup extends Component{

    handleTimer = ''

    state = {
        time: this.props.time,
        className: this.props.className,
        msg: this.props.msg
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({msg: nextProps.msg})
        this.handleTimer = setTimeout(() =>
                this.setState({msg: null})
            , this.state.time*1000)

    }
    // componentWillMount() {
    //
    //     this.handleTimer = setTimeout(() =>
    //             this.setState({className: "remove"})
    //         , this.state.time*1000)
    // }

    componentWillUnmount(){
        clearTimeout(this.handleTimer)
    }
    render() {
        return (
            <div>
            {
                this.state.msg && <div className={"popup " + this.state.className}>
                    {this.state.msg}
                </div>
            }
            </div>
        );
    }
}

Popup.propTypes = {
    msg: PropTypes.string.isRequired,
    className: PropTypes.string,
    time: PropTypes.number
}

Popup.defaultProps = {
    time: 3,
    className: ''
}