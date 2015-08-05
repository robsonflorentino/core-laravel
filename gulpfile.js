var elixir = require('laravel-elixir');
var bowerDir = 'vendor/bower_components/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        
        /**********
         * JQUERY *
         **********/
        
        // jQuery JS
        .copy(bowerDir + 'adminlte/plugins/jQuery/jQuery-2.1.4.min.js', 'public/theme/js/jQuery-2.1.4.min.js')

        
        /*******************
         * BOOTSTRAP FILES *
         *******************/
    
        // Bootstrap CSS
        .copy(bowerDir + 'adminlte/bootstrap/css/bootstrap.min.css', 'public/theme/bootstrap/css/bootstrap.min.css')
        .copy(bowerDir + 'adminlte/bootstrap/css/bootstrap.css.map', 'public/theme/bootstrap/css/bootstrap.css.map')

        // Bootstrap Fonts
        .copy(bowerDir + 'adminlte/bootstrap/fonts', 'public/theme/bootstrap/fonts')
        
        // Bootstrap JS
        .copy(bowerDir + 'adminlte/bootstrap/js/bootstrap.min.js', 'public/theme/bootstrap/js/bootstrap.min.js')

        /******************
         * ADMINLTE FILES *
         ******************/

        // AdminLTE CSS
        .copy(bowerDir + 'adminlte/dist/css/skins/_all-skins.min.css', 'public/theme/css/skins/_all-skins.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-black-light.min.css', 'public/theme/css/skins/skin-black-light.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-black.min.css', 'public/theme/css/skins/skin-black.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-blue-light.min.css', 'public/theme/css/skins/skin-blue-light.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-blue.min.css', 'public/theme/css/skins/skin-blue.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-green-light.min.css', 'public/theme/css/skins/skin-green-light.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-green.min.css', 'public/theme/css/skins/skin-green.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-purple-light.min.css', 'public/theme/css/skins/skin-purple-light.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-purple.min.css', 'public/theme/css/skins/skin-purple.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-red-light.min.css', 'public/theme/css/skins/skin-red-light.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-red.min.css', 'public/theme/css/skins/skin-red.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-yellow-light.min.css', 'public/theme/css/skins/skin-yellow-light.min.css')
        .copy(bowerDir + 'adminlte/dist/css/skins/skin-yellow.min.css', 'public/theme/css/skins/skin-yellow.min.css')

        //.copy(bowerDir + 'adminlte/dist/css/AdminLTE.min.css', 'public/theme/css/AdminLTE.min.css')

        // AdminLTE IMG
        .copy(bowerDir + 'adminlte/dist/img', 'public/theme/img')

        // AdminLTE Plugins
        .copy(bowerDir + 'adminlte/plugins', 'public/theme/plugins')

        // AdminLTE JS
        .copy(bowerDir + 'adminlte/dist/js/app.js', 'public/theme/js/app.min.js')

        // AdminLTR SamplePage
        .copy(bowerDir + 'adminlte/starter.html', 'public/theme/starter.html')


        /****************
         * FONT-AWESOME *
         ****************/
        
        // Font-Awesome CSS
        .copy(bowerDir + 'components-font-awesome/css/font-awesome.min.css', 'public/theme/css/font-awesome.min.css')
        
        // Font-Awesome FONTS
        .copy(bowerDir + 'components-font-awesome/fonts', 'public/theme/fonts')

        
        /*****************
         * FONT-IONICONS *
         *****************/
        
        // Font-Ionicons CSS
        .copy(bowerDir + 'ionicons/css/ionicons.min.css', 'public/theme/css/ionicons.min.css')

        // Font-Ionicons FONTS
        .copy(bowerDir + 'ionicons/fonts', 'public/theme/fonts')


        /*************
         * HTML5SHIV *
         *************/

         // Html5shiv JS
        .copy(bowerDir + 'html5shiv-complete/dist/html5shiv.js', 'public/theme/js/html5shiv.js')

        
        /***********
         * RESPOND *
         ***********/
        
        // Respond JS
        .copy(bowerDir + 'respond/dest/respond.min.js', 'public/theme/js/respond.min.js')


        /*************
         * LESS FILE *
         *************/

        // Less File
        .less('app.less');
});
