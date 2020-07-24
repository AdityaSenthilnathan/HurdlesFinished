class Hurdles{
    constructor(){
        this.sprites = [];
        this.sprite = 0;
        this.x = 1000;
        this.y = 420;

     
        for (var i = 0; i<7; i++){

            for (var k = 0; k<4; k++){

                var sprite = createSprite(displayWidth - this.x, displayHeight - this.y,20,20);
                
                sprite.addImage(IMG);
                sprite.scale = .4;
               
                this.sprites.push(sprite);
                this.y = this.y + 150;
            }
            this.y = 420;
            this.x = this.x - 400;
        }
    }


    display(){
        }

    check(){
        
    }



}