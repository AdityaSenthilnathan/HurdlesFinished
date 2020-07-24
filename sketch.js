var player;
var hurdles;
var invisibleground1;
var invisibleground2;
var invisibleground3;
var body1 = 0;
var body2 = 0;
var body3 = 0;
var body4 = 0;
var image1;
var playersfinished = 0;
var game;
var form;
var distance2;
var playercount = 0;
var player1, player2, player3, player4;
var players;
var gameState = 0;
var a = [];
var playerGameState = 0;
var ground;
var database = firebase.database();
var rank = 0;
var person;
var index = 0;
var allplayers;
var xposition;
var x;
var yposition;
var fincount = 0;
var img1, img2, img3, img4

function preload() {


}

function setup() {
    createCanvas(1450, displayHeight);

    //IMG = loadImage("Hurdle.png");
    IMG = loadImage("hur.png");
    player = new Player();
    game = new Game();
    hurdles = new Hurdles();
    playercount = 0;
    ground = new Ground();
    form = new Form();
    
    img1 = loadAnimation("sonic/sonic1.gif", "sonic/sonic2.gif", "sonic/sonic3.gif", "sonic/sonic4.gif", "sonic/sonic5.gif", "sonic/sonic6.gif", "sonic/sonic7.gif", "sonic/sonic8.gif");
    img2 = loadAnimation("pikachu/pikachu.1.png", "pikachu/pikachu.2.png", "pikachu/pikachu.3.png", "pikachu/pikachu.4.png");
    img3 = loadAnimation("mario/mario1.png", "mario/mario2.png", "mario/mario3.png");
    img4 = loadAnimation("person/person.gif", "person/person1.gif", "person/person2.gif", "person/person3.gif", "person/person4.gif", "person/person5.gif", "person/person6.gif", "person/person7.gif", "person/person8.gif", "person/person9.gif", "person/person10.gif", "person/person11.gif", "person/person12.gif", "person/person13.gif", "person/person14.gif", "person/person15.gif", "person/person16.gif", "person/person17.gif", "person/person18.gif");
    box1 = createSprite(displayWidth - 1400, displayHeight - 450, 20, 20);
    image1 = loadImage("audence.jpg");

    player1 = createSprite(displayWidth - 1400, displayHeight - 450, 20, 20);

    player1.addAnimation("hi", img1);
    player1.scale = 0.11;
    player2 = createSprite(displayWidth - 1400, displayHeight - 590, 20, 20);
    //player2.addImage(img4);
    //animation(img2,player2.x,player2.y, player2.width, player2.height);
    player2.addAnimation("hi1", img2);
    player2.scale = 0.3;
    player3 = createSprite(displayWidth - 1400, displayHeight - 760, 20, 20);
    player3.addAnimation("hi3", img3);
    player3.scale = 0.4;
    player4 = createSprite(displayWidth - 1400, displayHeight - 850, 20, 20);
    player4.addAnimation("hi4", img4);
    player4.scale = 0.2;

    players = [player1, player2, player3, player4];

}

function draw() {
  

    camera.position.x = player.distance - 100;
    camera.position.y = displayHeight / 2 - 100;



    background("blue");
    //background(image1);
    ground.display();
    if (gameState === 0) {
        game.start();

    }
    if (gameState === 1) {
        game.play();

    }

    if (playerGameState === 2) {
        Player.getallplayerinfo();
        var ind = 0;
        
        textSize(34);
        textStyle(BOLD);
        rectMode(CENTER);
        fill("red");
        rect(3300, 250, 300, 500);
        fill("white");
        text("LEADERBOARD",3175, 50);
        textStyle(NORMAL);
        textSize(24)

        for (var plr in allplayers) {
            if (allplayers[plr]["rank"] != 0) {
                text(" Player " + allplayers[plr]["name"] + "  Rank : " + allplayers[plr]["rank"], 3175, 50 + allplayers[plr]["rank"] * 100);
            }
            ind = ind + 1;
        }
        //text(" Player:      " + player.name + "         Rank:  " +  playersfinished, 3100,20 + 500 * playersfinished);

    }


    if (gameState === 2) {
        game.end();

    }

    form.display();
    hurdles.display();

    if (hurdles.sprites) {
        for (var i = 0; i < hurdles.sprites.length; i++) {
           // hurdles.sprites[i].draw();

        }
    }
    person = window["player" + player.index];

    if (player.index != null && person != null) {
        box1.x = person.x
        box1.y = person.y - 50
       box1.shapeColor = "red"
        person.position.x = player.distance + 40;
        //person.y = player.distance2;
        person.velocityY = person.velocityY + 0.2;

        person.collide(body4);
        person.collide(body3);
        person.collide(body2);
        person.collide(body1);


    }

    
    drawSprites();

}


function keyPressed() {
    if (keyCode === UP_ARROW && gameState === 1) {
        person.velocityY = -5;

    }
    if (keyCode === RIGHT_ARROW && gameState === 1) {
        player.distance = player.distance + 20;
        player.updateplayerinfo();

    }
}