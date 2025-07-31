import User from "../modals/userModal.js"
const registerUser =async(req,res)=>{
    const {email,name,location,site,phone,image}= req.body
    console.log(req.body)
    if (!email || !name || !location || !site || !phone || !image) {
  return res.status(400).json({ message: "All details are required" });
}

    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).json({message:"User already exists"})
    }
    const newUser = await User.create({email,name,location,site,phone,image})
    if(!newUser){
        return res.status(400).json({message:"Failed to create a User"})
    }
    return res.status(200).json({
  success: true,
  user: {
    email: newUser.email,
    name: newUser.name,
    location: newUser.location,
    site: newUser.site,
    phone: newUser.phone,
    image: newUser.image,
  }
});

}
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { registerUser, getAllUsers };