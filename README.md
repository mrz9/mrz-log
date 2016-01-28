# mrz-log
nodejs日志项目，支持按天划分日志,支持'debug','info','error'，三种日志

##依赖
* [moment](https://www.npmjs.com/package/moment)
* [file-stream-rotator](https://www.npmjs.com/package/file-stream-rotator)

##使用方法

```javascript

'use strict';
const Log = require('../log.js')();
//const Log = require('../log.js')({path:'logs',debug:true});
Log.write('error','test error',new Error("error test"));
Log.write('info','test info',"info message");
Log.write('debug','test debug',"debug test");//默认不处理
 
 
```