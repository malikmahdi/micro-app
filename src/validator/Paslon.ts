import Joi from "joi";

export const PaslonValidator = Joi.object({
  serial_number: Joi.number().required(),
  image: Joi.string().required(),
  name: Joi.string().required(),
  visi_misi: Joi.string().required(),
});
