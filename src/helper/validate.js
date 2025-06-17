

const emailRegex = /^[a-zA-Z0-9._]{2,64}@[a-zA-Z0-9-]{2,64}\.[a-zA-Z]{2,3}(\.in)?$/;
const nameRegex = /^[A-Za-z']+$/;


const emailvalidate = (email) => {
  console.log(emailRegex.test(email))
    return emailRegex.test(email);
  };
const namevalidate=(name)=>{
  return nameRegex.test(name);
}

const validate = (data) => {
  const err = {};
  if (!data.name || !namevalidate(data.name)) {
    err.name = "Please enter a valid name.";
  }
  if (!data.email || !emailvalidate(data.email)) {
    err.email = "Please enter a valid email.";
  }
   if (!data.message || data.message.trim().length === 0|| data.message.trim().length > 255) {
    err.message = "Please provide a message.";
  }

  if (!data.budget) {
    err.budget = "Please select a budget.";
  }

  if (!data.interested_in || data.interested_in.length === 0) {
    err.interested_in = "Please select at least one interest.";
  }
  return err;
};

const validatevalue = (error,name, value) => {
    let newErrors = { ...error };
    console.log()
    if (name === "name") {
      if (!namevalidate(value)) {
        newErrors.name = "Name can only contain alphabets, spaces, apostrophes, and hyphens.";
      } else {
        delete newErrors.name;
      }
    }

    if (name === "email") {
      if (!emailvalidate(value)) {
        newErrors.email = "The email address you entered is not in a valid format. Please check and try again.";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "message") {
      if (value.trim().length>255) {
        newErrors.message = "The email address you entered is not in a valid format. Please check and try again.";
      } else {
        delete newErrors.message;
      }
    }

    console.log(newErrors)
    return newErrors
  };


module.exports={emailvalidate,namevalidate,validate,validatevalue}