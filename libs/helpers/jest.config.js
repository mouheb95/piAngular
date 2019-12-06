module.exports = {
  name: 'helpers',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/helpers',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
