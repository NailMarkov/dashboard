import gulp from 'gulp';
import browserSync from 'browser-sync';
import {deleteAsync} from 'del';

// import from files

import { pathSource, pathBuild } from './gulp/config.js';
import { pug } from './gulp/compileHtml.js';
import { copy, copySvg } from './gulp/copyAssets.js';
import {optimizeSvg, sprite, createWebp, optimizePng, optimizeJpg} from './gulp/optimizeImages.js';

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
  gulp.watch('source/data/**/*.{js,json}', gulp.series(copy, refresh));
  gulp.watch('source/img/**/*.svg', gulp.series(copySvg, sprite, refresh));
};

const refresh = (done) => {
  server.reload();
  done();
};

const start = gulp.series(clean, copy, sprite, gulp.parallel(pug), syncServer);

export { start };