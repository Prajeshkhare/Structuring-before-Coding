class Game{
    constructor(){}

    getState(){
        //read the game state from db
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        //update/change the game State in db
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}