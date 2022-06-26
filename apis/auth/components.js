const yup = require('yup');
const bcrypt = require('bcrypt')
const JWT = require('./jwt')
const authUser = require('../../data/schema/authUserSchema')

const schema = yup.object({
  username: yup.string().required().trim().min(3),
  email: yup.string().required().trim().email(),
  password: yup.string().min(2).max(256).required()
})

const errorMessages = {
  invalidLogin: 'Invalid login.',
  emailInUse: 'Email in use.',
  provideAllInformation:'Please provide all information we can not find user account in our system',
  firstSignUp: "first register user details",
};

// payload user email and password 
const signup =  async(req, res) =>{
  try {
    const { username, email, password} = req.body
    const createUser = {
      username , email, password
    }
    await schema.validate(createUser)
    const userPresnt = await authUser.findOne({email:email})
    if(userPresnt){
      const error = new Error(errorMessages.emailInUse);
      res.status(403);
      throw error;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    await authUser.create({ username: username, email: email, password: hashedPassword})
    const payload = {
      username,
      email,
    };
    const token = await JWT.sign(payload)
    res.json({
      user: payload,
      token,
    });
  } catch (error) {
    res.send(error.message);
  }
}
//login into user account
const login = async(req, res) =>{
  try {
    const { email, password } = req.body;

    if(!email || !password){
      const error = new Error(errorMessages.provideAllInformation);
      res.status(403);
      throw error;
    }
    const data = await authUser.findOne({email:email})
    if (!data){
      const error = new Error(errorMessages.firstSignUp);
      res.status(403);
      throw error;
    }
    const compaire = bcrypt.compare(password, data.password )
    if(!compaire){
      const error = new Error(errorMessages.invalidLogin);
      res.status(403);
      throw error;
    }
    const payload = {
      name: data.name,
      email,
    };
    const token = await JWT.sign(payload);
    console.log('user login succefully ');
    res.json({
      payload,
      token 
    })
    
  } catch (error) {
    res.send(error.message)
  }

}

module.exports = {signup, login}