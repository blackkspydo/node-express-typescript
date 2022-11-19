import yup from 'yup';

export const userSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

export const profileSchema = yup.object().shape({
  profileUrl: yup.string().required(),
  bio: yup.string().required(),
  isAvailable: yup.boolean().required(),
})
