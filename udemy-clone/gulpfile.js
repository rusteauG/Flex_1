const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const merge = require("merge-stream");

// Define your source and destination directories
const sources = [
	{
		srcPath: "./shinobi/**/*.scss",
		destPath: "./css",
	},
	{
		srcPath: "./Testing..123/**/*.scss",
		destPath: "./Testing..123/css",
	},
];

function compileSass() {
	const streams = sources.map(({ srcPath, destPath }) => {
		return src(srcPath)
			.pipe(sass().on("error", sass.logError))
			.pipe(dest(destPath));
	});
	return merge(streams);
}

function watchSass() {
	watch(
		sources.map(({ srcPath }) => srcPath),
		compileSass
	);
}

exports.build = compileSass;
exports.watch = watchSass;
exports.default = series(compileSass, watchSass);
