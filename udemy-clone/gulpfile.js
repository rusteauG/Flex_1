const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compile
function buildStyles() {
	return src("*.scss").pipe(sass()).pipe(dest("css"));
}

// Watch
function watchTask() {
	watch(["*.scss"], buildStyles);
}

// run
exports.default = series(buildStyles, watchTask);
