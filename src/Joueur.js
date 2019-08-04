export default class Joueur {

    _scores = {current: 0, best: 0};
    constructor(name){
        this.setName(name);
        //todo Lire dans le fichier si joueur existe et recuperer son meilleurs score
        //this._scores.best = //Lire dans le fichier si joueur existe et recuperer son meilleurs score
        // this.setBestScore();
    }

    getScore(){
        return this._scores.current;
    }
    getBestScore(){
        return this._scores.best;
    }
    getName(){
        return this.name;
    }
    setScore = (score) => {
        this._scores.current += score;
    }
    setName(name){
        this.name = name;
    }
    saveScore = () => {
        if(this._scores.current > this._scores.best)
            this._scores.best = this._scores.current
        this._scores.current = 0;
        //Refaire un recherche du meilleur score car celui-ci à peut être changer
        // this._scores.best
        //Ecrire dans le fichier le score.json le score du joueur
        //Si c'est son meilleur score
    }
}