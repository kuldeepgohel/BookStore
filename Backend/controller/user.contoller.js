import User from "../model/user.model.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({ name, email, password: hashedPassword });
    await createdUser.save();
    res.status(201).json({ message: "User created successfully",
      user:{
        name: createdUser.name,
        email: createdUser.email,
        id: createdUser._id,
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect || !user) return res.status(400).json({ message: "soemthing went wrong" });
    res.status(200).json({ message: "Login successful" ,user:{
      name: user.name,
      email: user.email,
      id: user._id,
    }});
  }
    catch(error) {
    res.status(500).json({ message: error.message });
  }
}