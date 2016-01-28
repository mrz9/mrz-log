'use strict';
const Log = require('../log.js')();
//const Log = require('../log.js')({path:'logs',debug:true});
Log.write('error','test error',new Error("error test"));
Log.write('info','test info',"info message");
Log.write('debug','test debug',"debug test");//默认不处理
