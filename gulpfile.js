import gulp from 'gulp';
import browserSync from 'browser-sync';
import {deleteAsync} from 'del';

// import from files

import { pathSource, pathBuild } from './gulp/config.js';
import { pug } from './gulp/compileHtml.js';

const server = browserSync.create();

const clean = () => deleteAsync(`${pathBuild.build}`);

const syncServer = () => {
  server.init({
    server: `${pathBuild.build}`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(`${pathSource.source}/pug/**/*.pug`, gulp.series(pug, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const start = gulp.series(clean, gulp.parallel(pug), syncServer);

export { start };