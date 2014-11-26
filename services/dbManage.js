/**
 * Created by lenovo on 2014/11/26.
 */
var express=require("express");
var Sequelize=require("sequelize");
var config=require("../config")();
var sequelize = new Sequelize(config.mysqlDb);
var dbOrm = function(tablename){

    var model = sequelize.import("../models/"+tablename+".js");
    return model;
};
module.exports = dbOrm;