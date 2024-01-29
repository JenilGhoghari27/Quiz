var express = require('express');
var router = express.Router();
var CATAGORY= require('../model/catagory');


/* GET home page. */
router.post('/add', async function (req, res, next) {
  try {
    const data = await CATAGORY.create(req.body)
    res.status(200).json({
      status: "success",
      message: "add success",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "FAIL",
      message: error.message,
    })
  }
})
router.get('/find', async function (req, res, next) {
  try {
    const data = await CATAGORY.find()
    res.status(200).json({
      status: " find ✅",
      message: "find ✅",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "FAIL",
      message: error.message,
    })
  }
})
router.patch('/update/:id', async function (req, res, next) {
  try {
    const data = await CATAGORY.findByIdAndUpdate(req.params.id , req.body)
    res.status(200).json({
      status: " update ✅",
      message: "updated ✅",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "FAIL",
      message: error.message,
    })
  }
})
router.delete('/delete/:id', async function (req, res, next) {
  try {
    const data = await CATAGORY.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: " Delete ✅",
      message: "Deleted ✅",
      data: data
    })
  } catch (error) {
    res.status(404).json({
      status: "FAIL",
      message: error.message,
    })
  }
})

module.exports = router;
