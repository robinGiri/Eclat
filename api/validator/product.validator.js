const { z } = require("zod");

const productCreateSchema = z.object({
  name: z.string().min(3),
  description: z.string(),
  category: z.string(),
  brands: z.string().default(null),
  price: z.number().default(0),
  discount: z.number().min(0).max(100),
  sellerId: z.number().nullable(false),
  isFeatured: z.boolean().default(false),
  stock: z.number().min(0),
  status: z
    .string()
    .regex(/active|inactive/)
    .default("inactive"),
});

const productUpdateSchema = z.object({
  name: z.string().min(3).optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  brands: z.string().default(null).optional(),
  price: z.number().default(0).optional(),
  discount: z.number().min(0).max(100).optional(),
  sellerId: z.number().nullable(false).optional(),
  isFeatured: z.boolean().default(false).optional(),
  stock: z.number().min(0).optional(),
  status: z
    .string()
    .regex(/active|inactive/)
    .default("inactive")
    .optional(),
});

module.exports = { productCreateSchema, productUpdateSchema };
