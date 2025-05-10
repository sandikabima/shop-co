const { user } = require("../../models");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const { comparePassword } = require("../../helper/bcrypt");
require("dotenv").config();

class authController {
  static async register(req, res) {
    try {
      const schema = Joi.object({
        username: Joi.string().min(3).max(30).required().messages({
          "string.base": `"Username" harus berupa teks`,
          "string.min": `"Username" minimal 3 karakter`,
          "string.max": `"Username" maksimal 30 karakter`,
          "any.required": `"Username" harus diisi`,
        }),
        email: Joi.string().email().required().messages({
          "string.base": `"Email" harus berupa teks`,
          "string.email": `"Email" tidak valid`,
          "any.required": `"Email" harus diisi`,
        }),
        password: Joi.string().min(6).required().messages({
          "string.base": `"Password" harus berupa teks`,
          "string.min": `"Password" minimal 6 karakter`,
          "any.required": `"Password" harus diisi`,
        }),
      });

      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message,
        });
      }

      const { username, password, email } = req.body;

      let cekData = await user.findOne({ where: { email } });
      if (cekData) {
        return res.status(400).json({
          success: false,
          message: "Email is already registered",
        });
      }

      let data = await user.create({
        userName: username,
        email,
        password,
      });

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const loginValidationSchema = Joi.object({
        email: Joi.string().email().required().messages({
          "string.base": "Email must be a string",
          "string.email": "Email must be a valid email address",
          "any.required": "Email is required",
        }),

        password: Joi.string().min(6).required().messages({
          "string.base": "Password must be a string",
          "string.min": "Password must be at least 6 characters long",
          "any.required": "Password is required",
        }),
      });

      const { error } = loginValidationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          message: error.details[0].message,
        });
      }

      const existingUser = await user.findOne({ where: { email } });

      if (!existingUser) {
        return res.status(401).json({
          success: false,
          message: "Invalid Email / Password",
        });
      } else {
        const isPass = comparePassword(password, existingUser.password);
        if (!isPass)
          return res.status(401).json({
            success: false,
            message: "Invalid Email / Password",
          });
      }

      const accessToken = jwt.sign(
        {
          userId: existingUser.userId,
          email,
          role: existingUser.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "15m",
        }
      );

      const refreshToken = jwt.sign(
        {
          userId: existingUser.userId,
          email,
          role: existingUser.role,
        },
        process.env.REFRESH_SECRET,
        { expiresIn: "1d" }
      );

      await user.update(
        { refresh_token: refreshToken },
        { where: { userId: existingUser.userId } }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      });

      return res.status(201).json({
        success: true,
        message: "Logged in successfully",
        user: {
          email: existingUser.email,
          role: existingUser.role,
          userName: existingUser.userName,
        },
        access_token: accessToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internar Server Error",
      });
    }
  }

  static async refreshToken(req, res) {
    try {
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken)
        return res.status(401).json({ message: "No refresh token provided" });

      const users = await user.findAll({
        where: { refresh_token: refreshToken },
      });

      if (!users[0])
        return res.status(403).json({ message: "Invalid refresh token" });

      const existingUser = users[0];
      jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
        if (err)
          return res.status(403).json({ message: "Invalid refresh token" });
        const { userId, email, role } = existingUser;
        const accessToken = jwt.sign(
          { userId, email, role },
          process.env.JWT_SECRET,
          { expiresIn: "15m" }
        );
        console.log(users);
        res.status(200).json({
          success: true,
          message: "Refresh token successfuly",
          user: {
            email: existingUser.email,
            userName: existingUser.userName,
            role: existingUser.role,
            accessToken,
          },
        });
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server error",
      });
    }
  }

  static async logout(req, res) {
    const refreshToken = req.cookies.refreshToken;
    console.log(refreshToken);

    if (!refreshToken) return res.sendStatus(204);

    const existingUser = await user.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!existingUser) return res.sendStatus(204);

    await user.update(
      {
        refresh_token: null,
      },
      {
        where: {
          userId: existingUser.userId,
        },
      }
    );

    res.clearCookie("refreshToken");
    return res.status(200).json({
      success: true,
      message: "Logout successfuly",
    });
  }
}

module.exports = authController;
