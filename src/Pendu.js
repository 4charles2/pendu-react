import React, {Component, ReactDOM} from 'react'
import AlphaKeyboard from "./AlphaKeyboard"
import AnimatePendu from "./AnimatePendu"

import "./style/Pendu.css"
import Popup from "./Popup";


const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Comme j'ai gérer les symboles via un elemnt after pas besoin de cette constante
//Il est dans le code CSS
// const HIDDEN = '⚔'

export default class Pendu extends Component {
    state = {
        keyWord: this.generateKeyWord(),
        errorLetter: [],
        foundLetter: [],
        joueurs: this.props.joueurs,
        currentJoueur: 0
    }

    handleKeyboardClick = (letter) => {
        const {keyWord, currentJoueur, foundLetter, joueurs, errorLetter} = this.state

        if (keyWord.includes(letter)) {

            //Enregistre le score dans l'instance du Joueur
            //SI le joueur n'a pas déjà trouvé cette lettre
            if (!foundLetter.includes(letter)) {
                joueurs[currentJoueur].setScore(1)

                this.setState({
                    foundLetter: [...foundLetter, ...Array.from(keyWord).filter((charact) => charact === letter)],
                });
            }
        } else {
            this.setState({errorLetter: [...errorLetter, letter]})
            joueurs[currentJoueur].setScore(-1)
        }
        if (joueurs.length > 1)
            this.setState({currentJoueur: (currentJoueur ? 0 : 1)})

    }

    generateKeyWord() {
        return dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase()
    }

    //Cette méthode est plus optimisé car elle arrete le rendu avant sa création si la condition est juste
    showMsg() {
        let msg = ''
        let type = ''

        if (this.state.errorLetter.length > 9) {
            msg = "Dommage vous avez perdu"
            type = "perdu"
        } else if (this.state.foundLetter.length === this.state.keyWord.length) {
            msg = "Bravo vous avez gagné"
            type = "win"
        } else if (this.state.joueurs.length > 1) {
            type = "play"
            msg = this.state.joueurs[this.state.currentJoueur].name + " c'est à vous de jouer"
        }

        return msg && <Popup msg={msg} className={type} time={3}/>
    }

    render() {
        const {keyWord, errorLetter, foundLetter} = this.state

        return (
            <div>
                <Score joueurs={this.state.joueurs}/>
                <AnimatePendu nbElt={errorLetter.length}/>
                <div className={"contain-keyword"}>
                    {/*Mot caché à deviner*/}
                    <AlphaKeyboard
                        showLetter={{
                            effect: "hidden",
                            letters: foundLetter
                        }}
                        letters={Array.from(keyWord)}
                    />
                </div>
                {/*Clavier pour entrer les lettres de l'alphabet*/}
                <AlphaKeyboard
                    // alphabet.map((letter) => {if(![...errorLetter, ...foundLetter].includes(letter)) return letter})
                    showLetter={{
                        effect: "click",
                        letters: alphabet.filter(letter => ![...errorLetter, ...foundLetter].includes(letter))
                    }}
                    className={"clavier"}
                    onClick={this.handleKeyboardClick}
                />
                {this.showMsg()}
            </div>
        )
    }
}

const Score = (props) =>
    <div style={{borderLeft: '5px solid #458486', position: 'absolute', left: '10%', paddingLeft: '1px'}}>
        {props.joueurs.map((joueur, index) =>
            <dl style={{
                borderLeft: '1px solid black',
                background: '#dedddd',
                padding: '2px 11px'
            }}
                key={index}
            >

                <dt>JOUEUR {index + 1}</dt>
                <dd>{joueur.getName()}</dd>
                <dd>Scores : {joueur.getScore()}</dd>
            </dl>
        )}
    </div>


const dictionary = [
    'accentuer',
    'acceptable',
    'acceptait',
    'acceptant',
    'acceptation',
    'accepte',
    'accepte',
    'acceptee',
    'acceptees',
    'acceptent',
    'accepter',
    'accepterait',
    'accepteront',
    'achete',
    'achetee',
    'achetees',
    'achetent',
    'acheter',
    'achetes',
    'acheteur',
    'acheteurs',
    'acheve',
    'acheve',
    'achevee',
    'achevees',
    'achevement',
    'actionnaires',
    'actionnariat',
    'actionner',
    'actions',
    'activation',
    'active',
    'activement',
    'activer',
    'actives',
    'activiste',
    'activistes',
    'activite',
    'activites',
    'actrice',
    'actualisation',
    'actualiser',
    'actualite',
    'affirmatif',
    'affirmation',
    'affirmations',
    'affirme',
    'affirme',
    'affirmee',
    'affirment',
    'affirmer',
    'affliction',
    'afflige',
    'affliger',
    'affluence',
    'besoin',
    'besoins',
    'Besson',
    'best',
    'bestiaux',
    'bestiole',
    'betail',
    'boîtes',
    'bâtisse',
    'beton',
    'bette',
    'betterave',
    'beurre',
    'beurrer',
    'beuverie',
    'bevue',
    'biais',
    'biaiser',
    'bibelot',
    'bibelots',
    'biberonner',
    'bible',
    'Bible',
    'bibliographie',
    'bibliotheque',
    'bibliotheques',
    'biblique',
    'Bic',
    'cartels',
    'carter',
    'cartes',
    'cartier',
    'cartilage',
    'cartographie',
    'carton',
    'cartons',
    'cartouche',
    'casanova',
    'cascade',
    'case',
    'caser',
    'caserne',
    'casernement',
    'casernes',
    'cases',
    'cash',
    'casino',
    'casinos',
    'casque',
    'casques',
    'casquette',
    'cassable',
    'cassant',
    'cassation',
    'casse',
    'embonpoint',
    'embouchure',
    'embouteillage',
    'embouteillages',
    'embranchement',
    'embraser',
    'embrasse',
    'embrasser',
    'embrasure',
    'embrouillement',
    'embrouiller',
    'embryon',
    'films',
    'filon',
    'filou',
    'filouter',
    'fils',
    'filtre',
    'filtrer',
    'fin',
    'final',
    'goudronner',
    'gouffre',
    'goujat',
    'goujaterie',
    'goulag',
    'goulet',
    'goulot',
    'goulu',
    'gourmand',
    'gourmandise',
    'gousse',
    'hutte',
    'hyacinthe',
    'hybrides',
    'hydraulique',
    'hydravion',
    'hydrocarbures',
    'insolence',
    'insolent',
    'insolite',
    'insolvable',
    'insomnie',
    'insouciance',
    'insouciant',
    'insoucieux',
    'inspecter',
    'inspecteur',
    'inspecteurs',
    'inspection',
    'inspectorat',
    'inspiration',
    'inspire',
    'japonais',
    'japonaise',
    'japonaises',
    'jaquette',
    'jardin',
    'jardinier',
    'jardins',
    'jargon',
    'jarret',
    'jars',
    'jaser',
    'jaseuse',
    'jauge',
    'jauger',
    'jaune',
    'labeur',
    'laboratoire',
    'laboratoires',
    'laborieuse',
    'laborieusement',
    'laborieuses',
    'laborieux',
    'labour',
    'labourer',
    'labyrinthe',
    'linguiste',
    'linguistes',
    'linguistique',
    'linguistiques',
    'magie',
    'magique',
    'magiquement',
    'magistrat',
    'magistrats',
    'magistrature',
    'magnanime',
    'menotte',
    'menottes',
    'mensonge',
    'mensonger',
    'mensonges',
    'menstruation',
    'menstrues',
    'mensuel',
    'mensuelle',
    'mensuelles',
    'mensuels',
    'mental',
    'mentale',
    'mentales',
    'merle',
    'merlin',
    'mers',
    'merveille',
    'merveilles',
    'merveilleux',
    'normal',
    'normale',
    'normalement',
    'normales',
    'normalisation',
    'normand',
    'normande',
    'normatif',
    'normaux',
    'norme',
    'occasion',
    'occasionner',
    'occasions',
    'occident',
    'occidental',
    'occidentale',
    'occidentales',
    'occidentaux',
    'occultation',
    'occulte',
    'occupaient',
    'occupait',
    'occupant',
    'occupants',
    'occupation',
    'panique',
    'paniquer',
    'panne',
    'panneau',
    'panneaux',
    'pannes',
    'panoplie',
    'panorama',
    'pans',
    'philologie',
    'philologique',
    'philologue',
    'philosophe',
    'philosopher',
    'philosophes',
    'philosophie',
    'philosophique',
    'philosophiques',
    'phones',
    'phonographe',
    'phoque',
    'phosphore',
    'photo',
    'photocopie',
    'photographe',
    'photographes',
    'photographie',
    'photographier',
    'photographies',
    'photographique',
    'photos',
    'raid',
    'raide',
    'raids',
    'raie',
    'rail',
    'railler',
    'raillerie',
    'railleur',
    'rails',
    'rais',
    'raisin',
    'raison',
    'raisonnable',
    'raisonnablement',
    'raisonnables',
    'recueil',
    'recueille',
    'recueilli',
    'recueillies',
    'recueillir',
    'recueillis',
    'recrutement',
    'recrutements',
    'recrutent',
    'recruter',
    'satellite',
    'satellites',
    'satin',
    'satire',
    'satirique',
    'satiriste',
    'satisfaction',
    'satisfaisant',
    'satisfaisante',
    'satisfait',
    'satisfaite',
    'satisfaites',
    'satisfaits',
    'satisfont',
    'saturation',
    'saturer',
    'satyre',
    'sauce',
    'saucisse',
    'services',
    'servie',
    'serviette',
    'servile',
    'servir',
    'servira',
    'serviront',
    'servis',
    'serviteurs',
    'servitude',
    'techniquement',
    'techniques',
    'technocratie',
    'technocratique',
    'technologie',
    'technologies',
    'technologique',
    'technologiques',
    'technologiste',
    'technologue',
    'tonifier',
    'tonique',
    'tonitruant',
    'tonnage',
    'tonne',
    'tonneau',
    'tonner',
    'tonnerre',
    'tonnes',
    'tons',
    'tonus',
    'touriste',
    'touristes',
    'touristique',
    'touristiques',
    'tourment',
    'tourmente',
    'tourmenter',
    'tournage',
    'tournait',
    'tournant',
    'tourne',
    'univers',
    'universel',
    'universelle',
    'universitaire',
    'universitaires',
    'urbaine',
    'urbaines',
    'urbains',
    'urbanisation',
    'urbaniser',
    'urbanisme',
    'urgence',
    'urgences',
    'urgent',
    'urgente',
    'urgents',
    'vagabonder',
    'vague',
    'vaguement',
    'vaillamment',
    'vaillance',
    'vaillant',
    'vaille',
    'vain',
    'vaincre',
    'vaincu',
    'vainement',
    'vaines',
    'vainqueur',
    'vainqueurs',
    'wagon',
    'western',
    'yacht',
    'yack',
    'yeux',
    'yoga',
    'zigzag',
    'Zimbabwe',
    'zinc',
    'zingueur',
    'zombie',
    'zone',
    'zones',
    'zoologie',
    'zozoter'
]