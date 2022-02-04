const debug = require('debug')('doop:lock');
debug('Init gulp lock');

const gulp = require('gulp');

gulp.task('load:app.lock', gulp.series('load:app.db'), ()=>
	app.emit('locks')
);

gulp.task('locks.clear', gulp.series('load:app.lock'), ()=>
	app.lock.clear()
);
