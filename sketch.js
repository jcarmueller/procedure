var monster;
var space;
var level = 1;
var SCENE_W = 1600;
var SCENE_H = 800;
var heart_1, heart_2, heart_3, heart_4, heart_5, heart_6, heart_7, heart_8, heart_9, heart_10, heart_11, heart_12, heart_13;
var broken_heart_1, broken_heart_2, broken_heart_3, broken_heart_4, broken_heart_5, broken_heart_6, broken_heart_7, broken_heart_8, broken_heart_9, broken_heart_10;
var timer;
var score = 0

function preload() {
    heart_1 = createSprite(300, 310);
    var myAnimation = 
    heart_1.addAnimation("heart", "assets/heart.png");
    heart_2 = createSprite(40, 350);
    var myAnimation = 
    heart_2.addAnimation("heart", "assets/heart.png");
    heart_3 = createSprite(200, 170);
    var myAnimation = 
    heart_3.addAnimation("heart", "assets/heart.png");
    heart_4 = createSprite(50, 250);
    var myAnimation = 
    heart_4.addAnimation("heart", "assets/heart.png");
    heart_5 = createSprite(100, 500);
    var myAnimation = 
    heart_5.addAnimation("heart", "assets/heart.png");
    heart_6 = createSprite(600, 200);
    var myAnimation = 
    heart_6.addAnimation("heart", "assets/heart.png");
    heart_7 = createSprite(400, 500);
    var myAnimation = 
    heart_7.addAnimation("heart", "assets/heart.png");
    heart_8 = createSprite(700, 550);
    var myAnimation = 
    heart_8.addAnimation("heart", "assets/heart.png");
    heart_9 = createSprite(300, 700);
    var myAnimation = 
    heart_9.addAnimation("heart", "assets/heart.png");
    heart_10 = createSprite(25, 500);
    var myAnimation = 
    heart_10.addAnimation("heart", "assets/heart.png");
    heart_11 = createSprite(25, 50);
    var myAnimation = 
    heart_11.addAnimation("heart", "assets/heart.png");
    heart_12 = createSprite(250, 500);
    var myAnimation = 
    heart_12.addAnimation("heart", "assets/heart.png");
    heart_13 = createSprite(150, 350);
    var myAnimation = 
    heart_13.addAnimation("heart", "assets/heart.png");
    
    broken_heart_1 = createSprite(550, 500);
    var myAnimation = 
    broken_heart_1.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_2 = createSprite(450, 300);
    broken_heart_2.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_3 = createSprite(250, 350);
    broken_heart_3.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_4 = createSprite(450, 700);
    broken_heart_4.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_5 = createSprite(100, 720);
    broken_heart_5.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_6 = createSprite(450, 60);
    broken_heart_6.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_7 = createSprite(700, 550);
    broken_heart_7.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_8 = createSprite(430, 700);
    broken_heart_8.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_9 = createSprite(200, 650);
    broken_heart_9.addAnimation("broken_heart", "assets/broken_heart.png");
    broken_heart_10 = createSprite(650, 200);
    broken_heart_10.addAnimation("broken_heart", "assets/broken_heart.png");
    
    monster = createSprite(60, 90);
    var myAnimation = monster.addAnimation("standing", "assets/monster-1.png", "assets/monster-7.png");
    monster.addAnimation("moving", "assets/monster_walking-1.png", "assets/monster_walking-7.png");
    monster.addAnimation("dancing", "assets/monster_dance-1.png", "assets/monster_dance-7.png");
    space = loadAnimation("assets/space.png");
    
    
}

function setup() {
    createCanvas(800, 500);
    
}

function draw() {
    background(200);
    //monster trails the mouse
    monster.velocity.x = (camera.mouseX - monster.position.x) / 20;
    monster.velocity.y = (camera.mouseY - monster.position.y) / 20;
    //camera follows monster
    camera.position.x = monster.position.x;
    camera.position.y = monster.position.y;
    //boundaries
    if (monster.position.x < 0) monster.position.x = 0;
    if (monster.position.y < 0) monster.position.y = 0;
    if (monster.position.x > SCENE_W) monster.position.x = SCENE_W;
    if (monster.position.y > SCENE_H) monster.position.y = SCENE_H;
    textFont("Source Code Pro");
    textSize(20);
    //levels
    if (level == 0) {
        text("hey")
    }
    if (level == 1) {
        animation(space, 800, 400);
    }
    fill(255, 255, 255);
    text("Welcome to the universe!", 20, 20);
    text("Collect as many hearts as you can before the time runs out.", 20, 40)
    text("timer: ", 40, 60);
    text("score: "+score, 40, 90);
    
    //remove hearts
    if (monster.overlap(heart_1) && !heart_1.removed) {
        heart_1.remove();
        score = score +1;
        }
    if (monster.overlap(heart_2) && !heart_2.removed) {
        heart_2.remove();
        score = score +1;
        }
    if (monster.overlap(heart_3) && !heart_3.removed) {
        heart_3.remove();
        score = score +1;
        }
    if (monster.overlap(heart_4) && !heart_4.removed) {
        heart_4.remove();
        score = score +1;
        }
    if (monster.overlap(heart_5) && !heart_5.removed) {
        heart_5.remove();
        score = score +1;
        }
    if (monster.overlap(heart_6) && !heart_6.removed) {
        heart_6.remove();
        score = score +1;
        }
    if (monster.overlap(heart_7) && !heart_7.removed) {
        heart_7.remove();
        score = score +1;
        }
    if (monster.overlap(heart_8) && !heart_8.removed) {
        heart_8.remove();
        score = score +1;
        }
    if (monster.overlap(heart_9) && !heart_9.removed) {
        heart_9.remove();
        score = score +1;
        }
    if (monster.overlap(heart_10) && !heart_10.removed) {
        heart_10.remove();
        score = score +1;
        }
    if (monster.overlap(heart_11) && !heart_11.removed) {
        heart_11.remove();
        score = score +1;
        }
    if (monster.overlap(heart_12) && !heart_12.removed) {
        heart_12.remove();
        score = score +1;
        }
    if (monster.overlap(heart_13) && !heart_13.removed) {
        heart_13.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_1) && !broken_heart_1.removed) {
        broken_heart_1.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_2) && !broken_heart_2.removed) {
        broken_heart_2.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_3) && !broken_heart_3.removed) {
        broken_heart_3.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_4) && !broken_heart_4.removed) {
        broken_heart_4.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_5) && !broken_heart_5.removed) {
        broken_heart_5.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_6) && !broken_heart_6.removed) {
        broken_heart_6.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_7) && !broken_heart_7.removed) {
        broken_heart_7.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_8) && !broken_heart_8.removed) {
        broken_heart_8.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_9) && !broken_heart_9.removed) {
        broken_heart_9.remove();
        score = score +1;
        }
    if (monster.overlap(broken_heart_10) && !broken_heart_10.removed) {
        broken_heart_10.remove();
        score = score +1;
        }
    
        
    //if mouse is to the left
    if (mouseX < monster.position.x - 10) {
        monster.changeAnimation("moving");
        //flip horizontally
        monster.mirrorX(-1);
        //negative x velocity: move left
        monster.velocity.x = -2;
    }
    else if (mouseX > monster.position.x + 10) {
        monster.changeAnimation("moving");
        //unflip 
        monster.mirrorX(1);
        monster.velocity.x = 2;
    }
    else {
        //if close to the mouse, don't move
        monster.changeAnimation("standing");
        monster.velocity.x = 0;
    }
    if (mouseIsPressed) {
        //monster.rotation -= 10;
        monster.changeAnimation("dancing");
    }
    else monster.rotation = 0;
    //up and down keys to change the scale
    if (keyIsDown(UP_ARROW)) monster.scale += 0.05;
    if (keyIsDown(DOWN_ARROW)) monster.scale -= 0.05;
    //draw the sprite
    drawSprites();
    //timer
    var timer = 15 - int(millis() / 1000);
    text(timer, 90, 60);
    
    
    if (timer <= 0) {
        fill(255);
        strokeWeight(3);
        rect(monster.position.x, monster.position.y, 300, 100);strokeWeight(.5);
        fill(0);
        textSize(18);
        textAlign(LEFT, TOP);
        text("You found love by collecting both whole and broken hearts! Refresh the page to try and get a higher score and find love again ♡", monster.position.x, monster.position.y, 300, 200);
        noLoop();
        
    }   
    
    
}
