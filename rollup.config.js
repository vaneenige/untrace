import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  useStrict: false,
  sourceMap: true,
  entry: './src/index.js',
  plugins: [
    buble(),
    uglify({
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
    }),
  ],
};
