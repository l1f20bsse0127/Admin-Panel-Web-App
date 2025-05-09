const { z } = require("zod");

const signupSchema = z.object(
  {
    username: z
      .string({ required_error: "Name is Required" })
      .trim()
      .min(3, { message: "Name must be atleast of 3 characters" }),
  },
  {
    email: z
      .string({ required_error: "Email is Required" })
      .trim()
      .email({ message: "Invalid email address" })
      .min(3, { message: "Email must be atleast of 3 characters" }),
  },
  {
    phone: z
      .string({ required_error: "Phone is Required" })
      .trim()
      .min(10, { message: "Phone must be atleast of 10 characters" })
      .max(20, { message: "Phone must not be more than 20 characters" }),
  },
  {
    password: z
      .string({ required_error: "Password is Required" })
      .min(7, { message: "Password must be atleast of 7 characters" })
      .max(20, { message: "Password must not be more than 20 characters" }),
  }
);

module.exports = signupSchema;
