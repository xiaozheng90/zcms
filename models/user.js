/**
 * Created by lenovo on 2014/11/26.
 */
module.exports = function(sequelize,DataType){
    return sequelize.define("User",{
        name : DataType.STRING
    });
}