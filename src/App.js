import React, {Component} from 'react';
import './style/App.css';
import Menu from './menu'
import Pendu from './Pendu'
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            frame: 'menu',
            joueurs: []
        };
    }

    /**
     * Si element enfant à terminé sont travaille
     * @param even objet pour mettre a jour l'etat local
     *             Name new frame to display and array joueurs for update
     */
    outputEvent = (even) => {
        this.setState({
            frame: even.frame,
            joueurs: even.joueurs
        })
    }

    /**
     * Retourne le component a rendre suivant la valeur de this.state.frame
     * @returns Component {*}
     */
    displayElement() {
        switch (this.state.frame) {
            case 'menu':
                return <Menu ends={this.outputEvent} joueurs={this.state.joueurs}/>;
            case 'game':
                console.log(this.state.joueurs)
                return <Pendu joueurs={this.state.joueurs} />
            default:
                return <Menu/>
        }
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 style={{fontWeight: 100,
                        fontSize: '3em', color: '#e64b6c'}}>$ Le jeu du pendu #</h1>
                </header>
                <div>
                {
                    /*Affiche le contenu voulue suivant les actions de l'utilisateur*/
                    this.displayElement()
                }
                </div>
                <footer className="App-header">
                    <a className="App-link"
                       rel="noopener noreferrer"
                       target="_blank"
                       href="https://charles-tognol.fr">
                        By TOGNOL Charles ©2019
                    </a>
                </footer>

            </div>
        )
    };
}

export default App;
