import React, {Component} from 'react'
import "./style/AnimatePendu.css"

export default class AnimatePendu extends Component{

    render() {
        return(
            <div className={"contain-animate-pendu"}>
                <div className={"pendu"}>


                    <img className={"img-pendu"} src={require("./image/pendu.svg")} alt={"le pendu"} />
                </div>
            </div>
        )
    }
}