import * as angular from 'angular';
import module from './module';
import oldModule from './oldModule';

require('./template.html');
require('./style.scss');

angular
  .module('app', [])
  .config(() => {
    console.log(module, oldModule);
  });