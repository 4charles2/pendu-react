import React, {Component} from 'react'
import './style/Menu.css'
import Joueur from "./Joueur"
import HallOfFame from "./HallOfFame";

/**
 * Component du menu principal
 */
class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: 'nbJoueur',
            joueurs: this.props.joueurs
        }
    }

    /**
     * Gére les clicks pour le choix du nombre de joueurs
     * @param typeMenu
     * @param arg
     */
    handleClickMenu = (typeMenu, arg) => {
        this.setState({menu: typeMenu, nbJoueur: arg})
    };

    /**
     * Gére les clicks après que le joueur ai entrer son nom dans le champs texte
     * @param name
     */
    handleClickJoueur = (name) => {
        if(name !== '')
            this.setState((state) => ({
                  joueurs: [...state.joueurs, new Joueur(name)]
                })
             )
    }

    /**
     * Affiche le menu adequate selon la valeur de this.state.menu
     * @param arg Optionnel si component à besoin d'un argument pour être affiche
     * @returns {*}
     */
    displayMenu() {
        switch (this.state.menu) {
            case 'nbJoueur':

                return <NbJoueur onClick={this.handleClickMenu}/>;
            case 'NameJoueur':
                return <NameJoueur numJoueur={this.state.joueurs.length + 1} onClick={this.handleClickJoueur}/>;
            default:
                return
        }
    }
    //Cette méthode est plus optimisé car elle arrete le rendu avant sa création si la condition est juste
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.state.nbJoueur === nextState.joueurs.length){
            this.props.ends({frame: 'game', joueurs: nextState.joueurs})
            return false
        }
        return true
    }
    //Cette méthode n'étais pas très optimisé car la vérification se fesait apres avoir réaliser le render
    // componentDidUpdate() {
    //     console.log(this)
    //     console.log(this.props);
    //     console.log(this.state.nbJoueur);
    //     console.log(this.state.joueurs.length);
    //     if (this.state.nbJoueur === this.state.joueurs.length) {
    //         this.props.ends({frame: 'game', joueurs: this.state.joueurs})
    //     }
    // }

    render() {
        return (
            <section className={"center-child"} style={{display: 'flex', 'flexFlow': 'row wrap'}}>
                <Regle/>
                {/*style={{position: 'relative'}}*/}
                <div style={{'flexGrow': '1'}}>
                    {this.displayMenu()}
                    <img style={{margin: 'auto', display: 'block'}} src={require("./image/potence_pendu.png")}
                         alt="potence de pendu" width={300}/>
                </div>
                {/*style={{position: 'absolute', right: '20%', top: '30%'}} */}
                {/*Modifier entrie qu contiendra les trois meilleur score par une lecture du fichier scrore.json */}
                <HallOfFame entries={entrie}/>
            </section>
        )
    }
}

const Regle = () => <div style={{'paddingLeft': '35px'}}>
    <h2>Règles du jeu : </h2>
    <p>Le joueur qui aura le plus de points à la fin de la partie gagne</p>
    <p>Le joueur qui perd est celui fait apparaitre le dernier element du pendu</p>
</div>

const NbJoueur = ({onClick}) =>
    <div>
        <h3 className="title">Combien de joueurs seront de la partie :</h3>
        <div className="center-child contain-column">
            <button className="field button" onClick={() => onClick('NameJoueur', 1)}>1 Joueur</button>
            <button className="field button" onClick={() => onClick('NameJoueur', 2)}>2 joueurs</button>
        </div>
    </div>;

const NameJoueur = ({numJoueur, onClick}) =>
    <div className="center-child contain-column">
        <h3 className="title">Joueur {numJoueur} Entrez votre nom (Pseudo)</h3>
        <div className="center-child  contain-column">
            <input id="inputName" className="field" type="text"
                   placeholder={"Joueur " + numJoueur}
                   autoFocus required
            />
            <button
                className="field button"
                onClick={
                    () => {
                        let input = document.getElementById('inputName');
                        onClick(input.value);
                        input.value = '';
                        input.focus();
                    }
                }>
                Valider
            </button>
        </div>
    </div>;


const entrie = [{id: 3, guesses: 18, date: '10/10/2017', player: 'Jane'},
    {id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin'},
    {id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa'},
    {id: 0, guesses: 48, date: '14/10/2017', player: 'Marc'},
]

export default Menu