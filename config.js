/**
 * Created by SS on 2014/11/25.
 */
var config={
    cookieSecret:'zsslab',
    db:'mongodb://localhost/zsslab111?poolSize=20'
}
module.exports = function(){
    return config;
}