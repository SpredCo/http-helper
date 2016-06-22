const fs = require('fs');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const changelog = require('gulp-changelogmd');

gulp.task('default', function () {
  console.log('Default task');
});

gulp.task('lint', function () {
  return gulp.src(['./*.js', './lib/*.js', './test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('changelog', function () {
  const pkg = JSON.parse(fs.readFileSync('./package.json'));

  return gulp.src('./CHANGELOG.md')
    .pipe(changelog(pkg.version))
    .pipe(gulp.dest('./'));
});
