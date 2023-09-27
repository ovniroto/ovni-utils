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
	plugins: [
		typescript({ tsconfig: './tsconfig.json' })
	]
}

if(process.env.NODE_ENV === 'cjs') {
	config.output = {
		file: `${dist}/${bundleName}.cjs.js`,
		format: 'cjs',
		banner: banner,
	}
}

if(process.env.NODE_ENV === 'umd') {
	config.output = {
		file: `${dist}/${bundleName}.umd.js`,
		format: 'umd',
		name: 'OU',
		banner: banner,
	}
}

if(process.env.NODE_ENV === 'esm') {
	config.output = {
		file: `${dist}/${bundleName}.esm.js`,
		format: 'esm',
		banner: banner,
	}
}

if(process.env.NODE_ENV === 'minify') {
	config.output = {
		file: `${dist}/${bundleName}.min.js`,
		format: 'iife',
		name: 'OU',
	}
	config.plugins.push(nodeResolve({ browser: true }));
	config.plugins.push(terser({}));
}

export default config;