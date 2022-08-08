import gulp from 'gulp';
import dartSass from 'sass'; import gulpSass from 'gulp-sass'; const sass = gulpSass(dartSass);

import prefix from 'gulp-autoprefixer';
import minify from 'gulp-clean-css';
import terser from 'gulp-terser';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imagewebp from 'gulp-webp';
import gulpEsbuild from 'gulp-esbuild';

function compilescss() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(gulp.dest('app/www/css')) 
};


function jsmin(){
  return gulp.src('src/js/*.js') 
    .pipe(terser())
    .pipe(gulp.dest('app/www/js')); 
  }


function optimizeimg() {
  return gulp.src('src/imgs/*.{jpg,png}') 
    .pipe(imagemin([
        imageminMozjpeg({ quality: 75, progressive: true }),
        imageminOptipng({ optimizationLevel: 3 }),
    ]))
    .pipe(gulp.dest('app/assets/imgs')) 
};


function webpImage() {
  return gulp.src('app/assets/imgs/*.{jpg,png}') 
    .pipe(imagewebp())
    .pipe(gulp.dest('app/assets/imgs')) 
};


export function watchTask(){
    gulp.watch('src/scss/*.scss', compilescss); 
    gulp.watch('src/js/main.js', bundle);
    // gulp.watch('src/js/main.js', jsmin); 
    //gulp.watch('src/images/*', optimizeimg); 
    //gulp.watch('dist/images/*.{jpg,png}', webpImage); 
}


const isProd = (process.env.NODE_ENV == "Production")? true : false;

export function bundle(){
  return gulp.src('src/js/main.js')
    .pipe(gulpEsbuild({
      bundle: true,
      minify: isProd,
      sourcemap: !isProd,
      target: [
        'es6',
        'chrome71',
        'firefox78',
        'safari12.1'
      ],
      outfile: "bundle.js",
      bundle: true
    }))
    .pipe(gulp.dest('app/www/js'))
}



export default gulp.series(
  compilescss,
  bundle,
  //jsmin,
  //optimizeimg,
  //webpImage,
  watchTask
);