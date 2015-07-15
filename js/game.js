Cenit.Game = function (game) {
    this.score;
	this.scoreText;
	this.hero;
};

Cenit.Game.prototype = {

	create: function () {
		this.hero = game.add.sprite(300, 200, 'hero');
		this.hero.animations.add('walk');
		this.hero.animations.play('walk', 20, true);
		//inicializacion variables y fisicas
		this.score = 0;
        this.scoreText = this.add.bitmapText(8, 8, 'rollingThunder', 'score: 0', 16);
	},
	update: function () {
        this.scoreText.text = 'score:' + this.score;
	},

    funcionPersonalizada: function () {
		//se puede llamar con this.funcionPersonalizada()
		console.log("funcion personalizada");
    },
	quitGame: function () {
		this.state.start('MainMenu');
	}
};
