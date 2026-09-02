class Game{
    play(){
        console.log("The game is fun to play");
    }
}
class BoardGame extends Game {
    players(){
        console.log("Players take turns making moves");
    }
}
class Chess extends BoardGame {
    strategy(){
        console.log("Chess requires strategy");
    }
}
const chess1=new Chess();
chess1.play();
chess1.players();
chess1.strategy();