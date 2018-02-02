var	gulp	=	require('gulp');
var	sass	=	require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
//sass -> css
gulp.task('scss',	function()	{
		return	gulp.src('sass/style.scss')
				.pipe(sourcemaps.init() ) //inicjalizacja map kodu źródłowego
				.pipe(sass().on('error', sass.logError)) //wyświetlanie błędów w konsoli
				.pipe(autoprefixer({
					browsers:['last 4 versions']
				}))
				.pipe(sass({
					outputStyle: 'compressed' //uruchomienie konwersji SASS-->CSS w formacie skompresowanym
				}))
				.pipe(sourcemaps.write()) //dopisanie map kodu źródłowego do CSS'a
				.pipe(gulp.dest('css')) //zapis pliku CSS do folderu CSS
				.pipe(browserSync.stream()) // odświeżenie widoku
});

gulp.task( 'watch', function(){
	browserSync.init({
		server: ".",
		notify: true,
		open: true
});

//watcher
gulp.task('watch',	function(){
		gulp.watch('sass/**/*.scss',	['scss']);
});

gulp.watch('./index.html', browserSync.reload);
});
