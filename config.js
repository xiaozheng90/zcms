/**
 * Created by SS on 2014/11/25.
 */
var config={
    cookieSecret:'zsslab',
    sessionDb:'mongodb://localhost/zsslab111?poolSize=20',
    mysqlDb:'mysql://root:qinkin@127.0.0.1:3306/zcms',
    appPath:'http://localhost:3000/',
    baseDir:__dirname
}
module.exports = function(){
    return config;
}