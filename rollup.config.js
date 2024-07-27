export default [
  {
    input: [
      './src/default-import-multiple-entries/duplicate/entry-1.js',
      './src/default-import-multiple-entries/duplicate/entry-2.js',

      './src/default-import-multiple-entries/circular/dependency/index.js',
      './src/default-import-multiple-entries/circular/index.js',
    ],
    output: {
      dir: 'output-default-import-multiple-entries',
      format: 'es'
    }
  },
  {
    input: [
      './src/default-import-single-entry/duplicate/entry-1.js',
      './src/default-import-single-entry/duplicate/entry-2.js',
    ],
    output: {
      dir: 'output-default-import-single-entry',
      format: 'es'
    }
  },
  {
    input: [
      './src/selective-import/duplicate/entry-1.js',
      './src/selective-import/duplicate/entry-2.js',

      './src/selective-import/circular/index.js',
    ],
    output: {
      dir: 'output-selective-import',
      format: 'es'
    }
  },
];
