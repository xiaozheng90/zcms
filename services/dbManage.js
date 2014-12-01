/**
 * Created by lenovo on 2014/11/26.
 */
var express=require("express");
var path = require('path');
var Sequelize=require("sequelize");
var config=require("../config")();
var sequelize = new Sequelize(config.mysqlDb);
var dbOrm = function(tablename){
    var modelPath = path.join(config.baseDir,'/models/'+tablename+'.js');
    var model = sequelize.import(modelPath);
    return model;
};
module.exports = dbOrm;