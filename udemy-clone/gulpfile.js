const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compile
function buildStyles() {
	return src("index.scss").pipe(sass()).pipe(dest("css"));
}

// Watch
function watchTask() {
	watch(["index.scss"], buildStyles);
}

// run
exports.default = series(buildStyles, watchTask);
