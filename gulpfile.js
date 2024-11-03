// Importando dependências
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Comprimir as imagens
function style() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Comprimir os scripts
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Minificar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Definindo Tarefas Padrão e de Monitoramento
exports.default = gulp.parallel(style, images, scripts);

// Tarefa watch para Monitoramento de Alterações
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(style));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};
