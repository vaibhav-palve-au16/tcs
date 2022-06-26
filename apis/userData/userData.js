const companyDetails = require('../../data/schema/companyDetails')
const userData = require('../../data/schema/userSchema')


const  createUserDetails = async (req, res)=>{
  try {
    const {name ,
    password ,
    email ,
    employID,
    phoneNumber,
    dateOfJoining,
    } = req.body
    const user = {
      name: name,
      password: password,
      email: email,
      employID: employID,
      phoneNumber:phoneNumber,
      dateOfJoining:dateOfJoining,
    }
    if(req.file.path){
      const path = req.file.path
      user.avatar = path
    }
    console.log(user);
    const task = await userData.create(user)

    res.send({message:'done', task: task})

  } catch (error) {
    console.log(error.message);
  }
  
}
const getUserDetails = async (req, res)=>{
  try {
    const data = await userData.find({})
    console.log(data);
    res.send({data:data})
  } catch (error) {
    console.log(error);
  }
  
}
const getUserInformation = async(req, res) =>{
  try {
    const {id} = req.body
    const userInfo = await userData.findById(id)
    console.log(id);
    console.log('user information as per we want '+userInfo);
    res.send({data:userInfo})
  } catch (error) {
    console.log(error.message)
    
  }
}
const updateUserAllData = async (req, res)=>{
  try {
    console.log('updation started');
    const {id, name, password, email,employID ,phoneNumber} = req.body
    const updateuserdata = await userData.findByIdAndUpdate(id, {name: name, password: password,  email: email, employID: employID, phoneNumber: phoneNumber })
    console.log('updation end ');
    res.send({details:updateuserdata})
  } catch (error) {
    console.log(error.message);
  }  
}
const  deleteUserData = async(req, res) => {
  try {
    console.log('user deletaion process started ');
    const {id} = req.body 
    const deleteUserData = await userData.findOneAndDelete(id )
    console.log("deleteUserData " + deleteUserData);
    console.log('user deleted ');
    res.status(200).send({deleteUserData:deleteUserData})
  } catch (error) {
    console.log(error.message);
  }
  
}


module.exports = {getUserDetails, createUserDetails, updateUserAllData, deleteUserData, getUserInformation}