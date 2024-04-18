const pathBuild = {
  build: 'build',
  css: 'build/css',
  font: 'build/fonts',
  img: 'build/img',
  svg: 'build/img/svg',
  js: 'build/js',
};

const pathSource = {
  source: 'source',
  scss: 'source/scss',
  font: 'source/fonts',
  img: 'source/img',
  sprite: 'source/img/sprite',
  js: 'source/js',
};

// Error messages notify

const errorMessages = (error) => {
  return {
    title: error,
    message: 'Error: <%= error.message %>',
    sound: false,
  };
};

export {errorMessages, pathSource, pathBuild};