class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 10;
        this.rank = null; 
        this.yposition = 0;
        playercount = playercount + 1;
    }

    getplayercount(){
        var playercountref = database.ref("playerCount");
        playercountref.on("value", function(data){
        playercount = data.val();

        });

    }
   static getplayersFinished(){
        database.ref("PlayersFinished").on("value", (data) => {
           this.rank = data.val();
        });
    }

    updateplayercount(count){

        var playercountref = database.ref('/');
            playercountref.update({
            playerCount: count
        });

    }


    updateplayer(count){

        var playercountref = database.ref('/');
            playercountref.update({
            players: count
        });

    }

    static updateplayersFinished(count){

        var PlayersFinishedref = database.ref('/');
             PlayersFinishedref.update({
            PlayersFinished: count
        });

    }
    

    updateplayerinfo(){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            name: this.name,
            distance: this.distance,
            yposition: this.yposition
        });


    }

    updateplayerrankinfo(playerrank){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            distance: this.distance,
            name: this.name,
            rank: playerrank
            
        });


    }

    static getallplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data) => {
            allplayers = data.val();

          });


    }
    


}