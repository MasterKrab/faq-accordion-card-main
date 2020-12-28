/* HTML */
import htmlmin from "gulp-htmlmin"

/* CSS */
import postcss from "gulp-css"
import cssnano from "cssnano"
import autoprefixer from "autoprefixer"

/* Javascript */
import gulp from "gulp"
import babel from "gulp-babel"
import terser from "gulp-terser"
import concat from "gulp-concat"

/* Varibables/constantes */

const cssPlugins = [
    cssnano(),
    autoprefixer()
]

gulp.task("htmlmin", () =>{
    return gulp
        .src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest("./"))
})

gulp.task("styles", () =>{
    return gulp
        .src("./src/css/*.css")
        .pipe(concat("styles-min.css"))
        .pipe(postcss(cssPlugins))
        .pipe(gulp.dest("./public/css"))
})

gulp.task("babel", () =>{
    return gulp
        .src("./src/js/*.js")
        .pipe(concat("scripts-min.js"))
        .pipe(babel({
            presets:["@babel/env"]
        }))
        .pipe(terser())
        .pipe(gulp.dest("./public/js"))
}) 


