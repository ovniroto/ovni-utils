const typescript = require('@rollup/plugin-typescript');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');

const dist = 'dist'
const bundleName = 'bundle'

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
	input: './src/index.ts',
	output: {
			file: `${dist}/${bundleName}.js`,
			format: 'esm',
			banner: banner,
	},
	plugins: [
		typescript({
			tsconfig: './tsconfig.json'
		}),
		babel({
			babelHelpers: 'bundled',
			presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
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








// import terser from '@rollup/plugin-terser';
// import { babel } from '@rollup/plugin-babel';
// import * as pkg from './package.json' assert {type: 'json'};

// var banner = '//  OvniUtils v' + pkg.version + '\n'
//   + '//  https://github.com/ovniroto/ovni-utils\n'
//   + '//  (c) ' + new Date().getFullYear() + ' Lucas O. S.\n'
//   + '//  OvniUtils may be freely distributed under the MIT license.\n';

// var input = 'src/index.ts';

// var config = {
// 	input: input,
// 	output: {
// 		format: 'umd',
// 		name: 'OU',
// 		exports: 'named',
// 		banner: banner
// 	},
// 	plugins: [
// 		babel({
// 			babelHelpers: 'bundled',
// 			presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
// 		})
// 	]
// };

// if(process.env.NODE_ENV === 'production') {
// 	config.plugins.push(
// 		terser({
// 			compress: {
// 				pure_getters: true,
// 				unsafe: true,
// 				unsafe_comps: true,
// 			}
// 		})
// 	);
// }

// export default config;