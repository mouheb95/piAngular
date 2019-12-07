module.exports = {
  name: 'ui-header',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-header',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
