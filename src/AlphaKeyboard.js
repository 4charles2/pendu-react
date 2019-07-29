import React from 'react'
import './style/AplhaKeyboard.css'

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * Genere les touches alaphabétiques cliquablent
 * @param onClick
 * @constructor
 */
const AlphaKeyboard = (onClick) => {
    //TEST non concluent
    // const letters = [.../[A-Z]/];
    return <div className={"keyboard"}>
        {letters.map((letter, index) =>
            <div
                key={index}
                className={"contain-touch"}
                id={"touche" + letter}
                onClick={(letter) => onClick(letter)}>
                {/*{letter}*/}
            </div>
        )}
    </div>
}

export default AlphaKeyboard;