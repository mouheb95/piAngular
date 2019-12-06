module.exports = {
  name: 'ui-sign-up',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-sign-up',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
