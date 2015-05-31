/**
 * 작성자 : 장성용, jsy@adain.kr
 * 날짜 : 15. 4. 14.
 * 내용 : Class JS https://github.com/FinalAngel/classjs/blob/master/src/class.js package
 */
Package.describe({
  name: 'adain:classjs',
  summary: 'Class JS https://classjs.readthedocs.org/en/latest/index.html',
  version: '1.0.3',
  git: 'https://github.com/ADAIN/meteor-classjs.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles('classjs.js', ['client', 'server']);
  api.export('Class', ['client', 'server']);
});