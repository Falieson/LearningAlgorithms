// This file is auto-generated
// Any change will be overriden
const ignoreTarget = Meteor.isServer ? 'client' : 'server';

let testFiles = [];

if (Meteor.isAppTest) {
  testFiles = testFiles.concat(require.context('./client', true, /.(test|spec|app-test|app-spec)(s)?.(.+)$/i).keys()).map(file => './client' + file.substr(1));
  testFiles = testFiles.concat(require.context('./server', true, /.(test|spec|app-test|app-spec)(s)?.(.+)$/i).keys()).map(file => './server' + file.substr(1));
} else {
  testFiles = testFiles.concat(require.context('./client', true, /.(test|spec)(s)?.(.+)$/i).keys()).map(file => './client' + file.substr(1));
  testFiles = testFiles.concat(require.context('./server', true, /.(test|spec)(s)?.(.+)$/i).keys()).map(file => './server' + file.substr(1));
}

testFiles
  .filter(file => file.indexOf('/' + ignoreTarget + '/') < 0)
  .map(file => require(file));
