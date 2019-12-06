module.exports = {
  name: 'ui-footer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-footer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
