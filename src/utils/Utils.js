export function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }
  const numberDivider = (number) => {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };
   