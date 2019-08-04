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
export default class Popup extends Component {

    handleTimer = ''



    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className,
            msg: this.props.msg,
            buttons: this.addButton(this.props.buttons),
            show: 'show-popup'
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            className: nextProps.className,
            msg: nextProps.msg,
            buttons: this.addButton(nextProps.buttons),
            show: 'show-popup'
        })
    }

    addButton(elements) {
        let buttons = null
        if (this.props.buttons) {
            console.log(elements)
            buttons = elements.map((button, index) =>
                <button type={"button"} key={index} className={"btn-popup"}
                        onClick={() => button.onClick(button.msg)}>{button.msg}</button>
            )
        }else{
            this.handleTimer = setTimeout(() =>
                    this.setState({
                        show: "remove"
                    })
                , this.props.time * 1000
            )
        }
        return buttons
    }

    componentDidUpdate(nextProps, nextState, nextContext) {
        // Si un boutton a été créer ne pas mettre de timer
    }

    // componentWillMount() {
    //
    //     this.handleTimer = setTimeout(() =>
    //             this.setState({className: "remove"})
    //         , this.state.time*1000)
    // }

    render() {
        return (

            <div className={this.state.show} key={this.props.key} >
                {
                    this.state.msg && <div className={"popup " + this.state.className}>
                        {this.state.msg}
                    </div>
                }
                <div className={"contain-button"}>
                    {this.state.buttons}
                </div>

            </div>

        );
    }
}

Popup.propTypes = {
    msg: PropTypes.string.isRequired,
    className: PropTypes.string,
    time: PropTypes.number,
    button: PropTypes.oneOfType([
        PropTypes.oneOf(false),
        PropTypes.arrayOf(
            PropTypes.shape({
                msg: PropTypes.string,
                onClick: PropTypes.func
            })
        )
    ])
}

Popup.defaultProps = {
    time: 3,
    className: '',
    button: false
}