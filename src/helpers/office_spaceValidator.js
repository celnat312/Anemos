export function office_spaceValidator(office_space) {
    if (!office_space) return "Please fill in this field.";
    if (Number.isInteger(office_space) == false)
      return "Office Space should be in numbers";
    return "";
  }