import yup from 'yup';
 
export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    profileUrl: yup.string().url().required(),
    email: yup.string().email().required(),
    bio: yup.string().required(),
    isAvailable: yup.boolean().required(),    
});