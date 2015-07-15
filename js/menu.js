Cenit.Menu = function (game) {
	this.music = null;
	this.playButton = null;
    this.cities = [];
    this.heights = [ 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 10, 12, 14, 14 ];
};

Cenit.Menu.prototype = {
	create: function () {
		console.log("menu:create");
        this.add.image(10, 10, 'sky');
		this.startGame();//a llamar desde el botón play
	},
	update: function () {
	},
	startGame: function (pointer) {
		this.state.start('Game');
	}
};
