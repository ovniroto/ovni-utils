const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const nodeResolve = require('@rollup/plugin-node-resolve');

const dist = 'dist'
const bundleName = 'ovniutils'

const banner = '/*\n'
	+ ' *\n'
	+ ' *  OvniUtils v' + process.env.npm_package_version + '\n'
	+ ' *  https://github.com/ovniroto/ovni-utils\n'
	+ ' *\n'
	+ ' *  (c) ' + new Date().getFullYear() + ' Lucas O. S.\n'
	+ ' *  OvniUtils may be freely distributed under the MIT license.\n'
	+ ' *\n'
	+ '*/\n';

const config = {
	input: './src/index.ts',
	output: {
			file: `${dist}/${bundleName}.js`,
			format: 'esm',
			banner: banner,
	},
	plugins: [
		nodeResolve({}),
		typescript({
			tsconfig: './tsconfig.json'
		})
	]
}

if(process.env.NODE_ENV === 'minify') {
	config.output = {
		file: `${dist}/${bundleName}.min.js`,
		format: 'iife',
		name: 'OU',
		banner: banner,
	}
	config.plugins.push(nodeResolve({ browser: true }));
	config.plugins.push(terser({}));
}

export default config;