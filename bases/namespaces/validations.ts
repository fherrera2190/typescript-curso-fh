namespace Validations {
  export const validateText = (text: string) => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (date: Date) => {
    console.log(date.valueOf());
    return isNaN(date.valueOf()) ? false : true;
  };
  // validateDate(new Date());
}

// console.log(Validations.validateText("Fernando"));
