const jwt = require('jsonwebtoken')
const Emp = require('../models/employee')

exports.empList = async (req, res) => {
    const employee = await Emp.find()

   console.log({employee})

    return res.json({
        success: true,
        message: 'fetch success',
        data:employee
    })
}

exports.getEmp = async (req, res) => {
    const employee = await Emp.findOne(req.params.id)

   console.log({employee})

    return res.json({
        success: true,
        message: 'fetch success',
        data:employee
    })
}

exports.createEmp = async (req, res) => {
    console.log({req})
    const token =req.auth
    const employee = await Emp.create(req.body)
    
    console.log({employee})

    return res.json({
        success: true,
        message: 'create success',
        data:employee
    })
}
exports.updateEmp = async (req, res) => {
    console.log({req})
await Emp.findByIdAndUpdate(req.body._id,req.body)
    return res.json({
        success: true,
        message: 'update success',
    })
}

exports.deleteEmp = async (req, res) => {
    console.log({req})
     await Emp.deleteOne({_id:req.body._id})
  
    return res.json({
        success: true,
        message: 'delete success',
    })
}