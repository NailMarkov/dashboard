import gulp from 'gulp';
import gulpPug from 'gulp-pug';

// import from files

import {pathBuild, pathSource} from './config.js';

const pug = () =>
  gulp
      .src(`${pathSource.source}/pug/pages/*.pug`)
      .pipe(gulpPug())
      .pipe(gulp.dest(`${pathBuild.build}`));

export {pug};