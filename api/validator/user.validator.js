const { z } = require("zod");
const userCreateSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  status: z
    .string()
    .regex(/CUSTOMER|SELLER|DRIVER/)
    .default("CUSTOMER"),
  address: z.string().nonempty(),
  phone: z.string().nonempty(),
  password: z.string().regex(/^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/),
});
const userUpdateSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  status: z
    .string()
    .regex(/CUSTOMER|SELLER|DRIVER/)
    .default("CUSTOMER"),
  address: z.string().nonempty(),
  phone: z.string().nonempty(),
  password: z.string().regex(/^(?=.*[A-Za-z0-9])(?=.*[^A-Za-z0-9]).{6,}$/),
});

module.exports = { userCreateSchema, userUpdateSchema };
