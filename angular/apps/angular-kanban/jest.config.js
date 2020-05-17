module.exports = {
  name: 'angular-kanban',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-kanban',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
