Cenit.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
};

Cenit.Preloader.prototype = {
	preload: function () {
		console.log("preloader:preload");
		//barra loading
		this.load.image('preloaderBar', 'imgs/preload.png');
		this.preloadBar = this.add.sprite(0, 100, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		//cargar imagenes de juego
		//this.load.image('plane', 'images/plane.png');
		//this.load.image('bomb', 'images/bomb.png');
		//this.load.image('land', 'images/land.png');
		//this.load.image('sky', 'imgs/sky.png');
		//this.load.image('photonstorm', 'images/photonstorm.png');
		//this.load.spritesheet('particles', 'images/particles.png', 2, 2);
		//this.load.spritesheet('city', 'images/city.png', 16, 16);
		//this.load.bitmapFont('rollingThunder', 'images/rolling-thunder.png', 'images/rolling-thunder.xml');
	},

	create: function () {
		console.log("preloader:create")
		this.load.image('sky', 'imgs/sky.png');
		this.preloadBar.cropEnabled = false;
		this.state.start('Menu');
	},
	update: function () {
	}
};
