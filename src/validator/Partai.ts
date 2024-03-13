import Joi from "joi";

export const PartaiValidator = Joi.object({
  name: Joi.string().required(),
  logo: Joi.string().required(),
  chairman: Joi.string().required(),
  visi_misi: Joi.string().required(),
  address: Joi.string().required(),
});
