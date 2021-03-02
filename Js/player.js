class Player{
    constructor(){

    }

    getCount(){
        //read the player Count from db
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }

    updateCount(count){
        //update/change the player Count in db
        database.ref('/').update({
           playerCount:count
        })
    }

    update(name){
        //update name of player in db
       var playerIndex = "player"+playerCount;
       //player1, player2, player3
       database.ref(playerIndex).set({
           name:name
       })
    }
}