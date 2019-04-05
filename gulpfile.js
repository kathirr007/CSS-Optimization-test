/* eslint-disable */
// Include gulp and plugins
var
    gulp = require('gulp'),
    del = require('del'),
    pkg = require('./package.json'),
    $ = require('gulp-load-plugins')({
        lazy: true
    }),
    autoprefixer = require('autoprefixer');
    cssnano = require('cssnano');
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;



// file locations
var
    devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),

    source = './',
    dest = devBuild ? 'builds/development/' : 'builds/production/',
    nodeModules = './node_modules/',
    bootstrapSources = nodeModules + 'bootstrap-sass/assets/stylesheets/**/*.scss',
    html = {
        partials: [source + '_partials/**/*'],
        in: [source + '*.html'],
        watch: ['*.html', '_partials/**/*'],
        out: dest,
        context: {
            devBuild: devBuild
        }
    },
    css = {
        in: [source + 'lbd/sass/light-bootstrap-dashboard.scss'],
        watch: ['lbd/sass/**/*.scss'],
        out: dest + 'lbd/css/',
        pluginCSS: {
            in: [source + 'lbd/css/**/*'],
            liveIn: [
                source + 'lbd/css/bootstrap.min.css',
                source + 'lbd/css/bootstrap-table.min.css',
                source + 'lbd/css/font-awesome.min.css',
                source + 'lbd/css/jquery.ui.min.css',
                source + 'lbd/css/jquery.mCustomScrollbar.min.css',
                source + 'lbd/css/material-icons.css',
                source + 'lbd/css/jquery-ui-1.8.20.custom.css',
                source + 'lbd/css/*images/**/*'
            ],
            watch: ['lbd/css/**/*.css'],
            liveWatch: ['lbd/css-live/**/*.css'],
            out: dest + 'lbd/css/'
        },
        sassOpts: {
            outputStyle: devBuild ? 'compressed' : 'compressed',
            imagePath: '../img',
            precision: 3,
            errLogToConsole: true
        }
    },

    fonts = {
        in: source + 'lbd/fonts/*.*',
        out: dest + 'lbd/fonts/'
    },
    syncOpts = {
        server: {
            baseDir: dest,
            index: 'index.html'
        },
        open: false,
        injectChanges: true,
        reloadDelay: 0,
        notify: true
    };

// show build type
console.log(pkg.name + ' ' + pkg.version + ', ' + (devBuild ? 'development' : 'production') + ' build');


// Clean tasks
gulp.task('clean', function (done) {
    del([
        dest + '*'
    ]);
    done();
});

gulp.task('clean-html', function () {
    del([
        dest + '**/*.html'
    ]);
});

gulp.task('clean-css', function () {
    del([
        dest + 'lbd/css/**/*'
    ]);
});


// reload task
gulp.task('reload', done => {
    browserSync.reload();
    done();
});

// build HTML files
gulp.task('html', () => {
    var page = gulp
        .src(html.in)
        .pipe($.newer(html.out))
        .pipe($.preprocess({
            context: html.context
        }));
    /*.pipe($.replace(/.\jpg|\.png|\.tiff/g, '.webp'))*/
    if (!devBuild) {
        page = page
            .pipe($.size({
                title: 'HTML in'
            }))
            .pipe($.htmlclean())
            .pipe($.size({
                title: 'HTML out'
            }));
    }
    return (
        page
        // .pipe($.indent({
        //       tabs:true,
        //    amount:1
        //   }))
        // .pipe($.jsbeautifier())
        .pipe(gulp.dest(html.out))
    );
});

// manage images

// copy fonts
gulp.task('fonts', function () {
    return gulp.src(fonts.in)
        .pipe($.newer(dest + 'lbd/fonts/'))
        .pipe(gulp.dest(dest + 'lbd/fonts/'));
});


// copy plugin css

// compile Sass and pipe it to Postcss
gulp.task(
    'sasspostcss',
    gulp.series('fonts', () => {
        var processors = [
            autoprefixer,
            cssnano
        ];
        return gulp
            .src(css.in)
            .pipe($.size({
                title: 'SCSS in '
            }))
            .pipe($.sourcemaps.init())
            .pipe($.plumber())
            .pipe($.sass(css.sassOpts))
            /* .pipe($.plumber())
            .pipe($.cssnano())
            .pipe($.csso())
            .pipe($.cleanCss({level: {2: {all: true}}})) */
            .pipe($.postcss(processors))
            .pipe($.size({
                title: 'SCSS out '
            }))
            .pipe($.sourcemaps.write('./maps'))
            .pipe(gulp.dest(dest + 'lbd/css/'))
            .pipe(browserSync.stream({
                match: '**/*.css'
            }));
    })
);


// browser sync
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: dest,
            index: 'index.html'
        },
        // files: [dest + 'lbd/css/light-bootstrap-dashboard.css', dest + 'lbd/js/custom.js'],
        open: false,
        // port: 3000,
        injectChanges: true,
        notify: true

    });
});


var exec = require('child_process').exec;

gulp.task('watch', gulp.parallel('serve', () => {
    // html changes
    gulp.watch(html.watch, gulp.series('html', 'reload'));

    // sass changes
    gulp.watch(css.watch, gulp.series('sasspostcss'));
}));

// default task
gulp.task('default', gulp.parallel('html', 'sasspostcss', 'watch'), done => {
    done();
});
