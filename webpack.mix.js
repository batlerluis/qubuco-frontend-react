let mix = require("laravel-mix");

require("laravel-mix-react-typescript-extension");

mix
  .reactTypeScript("resources/js/app.js", "public/js")
  .sass("resources/sass/app.scss", "public/css");
