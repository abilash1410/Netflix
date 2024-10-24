export const ValidateData = (formType,name,email,password) =>{

    const emailIDValidation =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    const passwordValidation =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    let errMsg = null;

    if(formType === 'Sign Up' && name === ''){
        errMsg = 'Name is required for '+formType;
        return errMsg;
    }
    
   
    errMsg = passwordValidation?null:'Password is not valid';
    errMsg = emailIDValidation?errMsg:'Email ID is not valid';

    return errMsg;




}