Cenit.Preloader = function (game) {
	this.background = null;
	this.preloadBar = null;
	this.ready = false;
};

Cenit.Preloader.prototype = {
	preload: function () {
		console.log("preloader:preload");
		//barra loading
		this.preloadBar = this.add.sprite(game.world.centerX-200, 100, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		
		//cargar imagenes de juego
		this.load.spritesheet('hero', 'imgs/hero.png', 37, 45, 18);//heroe
		this.load.bitmapFont('rollingThunder', 'imgs/rolling-thunder.png', 'imgs/rolling-thunder.xml'); //texto
		this.load.atlas('button', 'imgs/button_texture_atlas.png', 'imgs/button_texture_atlas.json'); //boton inicio de loader
		//this.load.image('background','assets/misc/starfield.jpg'); //boton inicio de loader		
		//this.load.image('plane', 'ims/plane.png');
		//this.load.image('bomb', 'ims/bomb.png');
		//this.load.image('land', 'images/land.png');
		//this.load.image('sky', 'imgs/sky.png');
		//this.load.image('photonstorm', 'images/photonstorm.png');
		//this.load.spritesheet('particles', 'images/particles.png', 2, 2);
		//this.load.spritesheet('city', 'images/city.png', 16, 16);
	},

	create: function () {
		console.log("preloader:create")
		this.preloadBar.cropEnabled = false;
		button = game.add.button(game.world.centerX - 95, 400, 'button', clickEnInicio, this, 'over', 'out', 'down'); //boton inicio de esta pantalla
	},
	update: function () {
	}
	
};

function clickEnInicio () {
    this.state.start('Menu');
}
