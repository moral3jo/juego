Cenit = {
	//variables globales a todo el juego
    score: 0,
	orientated: false
};
var game;
var firstRunLandscape;

Cenit.Boot = function (game) {};
Cenit.Boot.prototype = {
	preload: function () {
		firstRunLandscape = game.scale.isGameLandscape;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.forceOrientation(false, true);
		game.scale.enterIncorrectOrientation.add(handleIncorrect);
        game.scale.leaveIncorrectOrientation.add(handleCorrect);
		game.load.image("topleft", "topleft.png");
		game.load.image("center", "center.png");
		game.load.image("bottomright", "bottomright.png");
    },
	create:function(){
		game.add.sprite(0,0,"topleft");
		game.add.sprite(game.width/2,game.height/2,"center").anchor.set(0.5,0.5);	
		game.add.sprite(game.width,game.height,"bottomright").anchor.set(1,1);		
	}
}
function handleIncorrect(){
	if(!game.device.desktop){
		document.getElementById("turn").style.display="block";
	}
}
function handleCorrect(){
	if(!game.device.desktop){
		if(firstRunLandscape){
			gameRatio = window.innerWidth/window.innerHeight;		
			game.width = Math.ceil(640*gameRatio);
			game.height = 640;
			game.renderer.resize(game.width,game.height);
			game.state.start("Play");		
		}
		document.getElementById("turn").style.display="none";
	}
}
window.onload = function() {
	var gameRatio = window.innerWidth/window.innerHeight;
	game = new Phaser.Game(Math.ceil(640*gameRatio), 640, Phaser.CANVAS);
	var play = function(game){}  
	
	game.state.add('Boot', Cenit.Boot);
	//game.state.add('Preloader', Cenit.Preloader);
    //game.state.add('Menu', Cenit.Menu);
    //game.state.add('Game', Cenit.Game);
	game.state.start('Boot');
}