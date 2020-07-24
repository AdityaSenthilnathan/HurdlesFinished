class Form {
    constructor() {
        this.title = createElement('h2');
        this.inputbox = createInput("name");
        this.button = createButton("ENTER");
        this.button2 = createButton("Reset");
        this.greeting = createElement('h4');
    }
    display() {
       // console.log(displayHeight);
        this.title.html("Hurdles Game");
        this.title.position(displayWidth - 800, displayHeight - 360);
        this.inputbox.position(displayWidth - 800, displayHeight - 250);
        this.button.position(displayWidth - 800, displayHeight - 200);
        this.button2.position(displayWidth - 700, displayHeight - 200);

        this.button2.mousePressed(() => {
            player.updateplayercount(0);
        Player.updateplayersFinished(0);
        player.updateplayer(0);
        game.updategameState(0);


        })

        this.button.mousePressed(() => {
           
            this.inputbox.hide();
            this.button.hide();
            player.name = this.inputbox.value();
            playercount++;
            player.index = playercount;
            player.updateplayerinfo();
            player.updateplayercount(playercount);
            this.greeting.html("Welcome " + player.name + "... please wait for the other players");
            this.greeting.position(200, 200);
           


        });

        if (gameState === 1){
            this.hide();

        }

    }
    hide() {
       // this.inputbox.hide();
        //this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

}