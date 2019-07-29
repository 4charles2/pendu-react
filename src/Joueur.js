export default class Joueur {

    scores = {current: 0, best: 0};
    constructor(name){
        this.setName(name);
        // this.setBestScore();
    }

    // setBestScore(score){
        // if(score != undefined)
        //todo chercher si le joueur est déjà present dans score.json
        //est assigner le score
        // this.scores.best =
        //     else
                //todo Vérifier score en parametre est plus grand que scores.best
                //Si c'est le cas alors enregistrer le meilleurs score dans le fichier score.json à la place de l'ancien score
    // }
    getScore(){
        return this.scores.current;
    }
    getName(){
        return this.name;
    }
    setScore(score){
        this.scores.current += score;
    }
    setName(name){
        this.name = name;
    }
}