
Cenit = {
	//variables globales a todo el juego
    score: 0
};
var game;
var firstRunLandscape;

Cenit.Boot = function (game) {};
Cenit.Boot.prototype = {
	preload: function () {
		console.log("boot:preload")
		firstRunLandscape = game.scale.isGameLandscape;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.forceOrientation(false, true);
		game.scale.enterIncorrectOrientation.add(handleIncorrect);
        game.scale.leaveIncorrectOrientation.add(handleCorrect);
		game.load.image("topleft", "topleft.png");
		game.load.image("center", "center.png");
		game.load.image("bottomright", "bottomright.png");
		//carga imagenes para pantalla de loading
		this.load.image('preloaderBar', 'imgs/preload.png');//barra de preloader
    },
	create:function(){
		console.log("boot:create");
		//game.add.sprite(0,0,"topleft");
		//game.add.sprite(game.width/2,game.height/2,"center").anchor.set(0.5,0.5);	
		//game.add.sprite(game.width,game.height,"bottomright").anchor.set(1,1);		
		game.state.start("Preloader");
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
			//game.state.start("Play");		
		}
		document.getElementById("turn").style.display="none";
	}
}
window.onload = function() {
	var gameRatio = window.innerWidth/window.innerHeight;
	game = new Phaser.Game(Math.ceil(640*gameRatio), 640, Phaser.CANVAS);
	var play = function(game){}  
	
	game.state.add('Boot', Cenit.Boot);
	game.state.add('Preloader', Cenit.Preloader);
    game.state.add('Menu', Cenit.Menu);
    game.state.add('Game', Cenit.Game);
	game.state.start('Boot');
}