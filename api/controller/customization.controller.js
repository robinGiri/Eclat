const router = require("express").Router();
const customizationService = require('../service/customizatiton.service')

const add = async(req,res,next)=>{
  await customizationService.add(req.body).then(() => {
    res.json({
      result: null,
      message: "Model saved successfully",
      meta: null,
    });
  }).catch((e) =>{
    res.status(500).json({
      result: null,
      message: "Internal Server Error",
      meta: null,
    });
  })  
}
module.exports = {add}
