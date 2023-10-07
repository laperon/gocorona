const mix = require( 'laravel-mix' );

if (mix.inProduction()) {
    mix.version();
}

mix.babelConfig(
    {
        presets: [
            [
                "@babel/preset-env",
                {
                    "useBuiltIns": "entry",
                    "bugfixes": true,
                    "corejs": 3.26
                }
            ]
        ]
    }
);

mix.setPublicPath('assets/dist')
    .setResourceRoot('/assets/dist');

mix.autoload({
    jquery: ['$', 'jQuery'],
});

mix.js('assets/js/app.js', 'app.js')
    .less('assets/less/style.less', 'style.css');
