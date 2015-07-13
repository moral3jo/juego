(function () {

    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

    game.state.add('Boot', Cenit.Boot);
    game.state.add('Preloader', Cenit.Preloader);
    game.state.add('Menu', Cenit.Menu);
    game.state.add('Game', Cenit.Game);

    game.state.start('Boot');

})();