const companyDetails = require('../../data/schema/companyDetails')

const createCompanyData = async (req, res) =>{
  try {
    const companyInfo = await companyDetails.create(req.body)
    console.log(companyInfo);
    res.send({
      data:companyInfo
    })
  } catch (error) {
    console.log(error.message);
  }
}

const getCompanyData = async (req, res) =>{
  try {
    const companyInfo = await companyDetails.find()
    console.log(companyInfo);
    res.send({
      data:companyInfo
    })
  } catch (error) {
    console.log(error.message);
  }
}

const updateCompanyData = async (req, res) =>{
  try {
    const{_id} = req.body
    const companyInfo = await companyDetails.findByIdAndUpdate(_id,req.body)
    res.send({
      data:companyInfo
    })
  } catch (error) {
    console.log(error.message);
  }
}

const deleteCompanyData = async (req, res) =>{
  try {
    const{id} = req.body
    const companyInfo = await companyDetails.findByIdAndRemove(id)
    res.send({
      data:companyInfo
    })
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {createCompanyData, updateCompanyData, deleteCompanyData, getCompanyData}