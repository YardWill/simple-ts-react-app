module.exports = {
  'roots': [
    '<rootDir>/src',
  ],
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  'moduleDirectories': [
    'node_modules',
  ],
  'setupFiles': [
    '<rootDir>/src/tests/setup.ts',
  ],
  'moduleNameMapper': {
    '\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  'transform': {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/tests/__mock__/fileTransformer.js',
  },
};