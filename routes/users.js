var express = require('express');
var router = express.Router();
var QUESTION= require('../model/question');

/* GET users listing. */
var express = require('express');
var router = express.Router();

var QUESTION= require('../model/question');

/* GET home page. */
router.post('/add', async function (req, res, next) {
  try {
    const data = await QUESTION.create(req.body)
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
router.get('/all', async function (req, res, next) {
  try {
    const que = await QUESTION.find().populate('catagory')
    res.status(200).json({
      status: " find ✅",
      message: "find ✅",
      data: que
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
    const data = await QUESTION.findByIdAndUpdate(req.params.id , req.body)
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
    const data = await QUESTION.findByIdAndDelete(req.params.id)
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
