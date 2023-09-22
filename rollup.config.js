const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

const dist = 'dist'
const bundleName = 'ovniutils'

const banner = '/*\n'
	+ ' *\n'
	+ ' *  OvniUtils v' + pkg.version + '\n'
	+ ' *  https://github.com/ovniroto/ovni-utils\n'
	+ ' *\n'
	+ ' *  (c) ' + new Date().getFullYear() + ' Lucas O. S.\n'
	+ ' *  OvniUtils may be freely distributed under the MIT license.\n'
	+ ' *\n'
	+ '*/\n';


const config = {
	input: './src/bundle.ts',
	output: {
			file: `${dist}/${bundleName}.js`,
			format: 'esm',
			banner: banner,
	},
	plugins: [
		typescript({
			tsconfig: './tsconfig.json'
		})
	]
}

if(process.env.NODE_ENV === 'production') {
	config.output = {
		file: `${dist}/${bundleName}.min.js`,
		format: 'cjs',
		banner: banner,
	}
	config.plugins.push(
		terser({
			compress: {
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true
			}
		})
	);
}

export default config;