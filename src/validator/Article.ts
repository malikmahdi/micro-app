import Joi from "joi";

export const ArticleValidator = Joi.object({
  title: Joi.string().required(),
  slug: Joi.string().required(),
  date_published: Joi.date().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  created_at: Joi.date().required(),
  userId: Joi.number().required(),
});
