const weekdays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

function numberToDay(number: number): string {
  if (number < 0 || number > 6) {
    console.info("Number should be between 0 and 6");
    return "N/A";
  }
  return weekdays[number];
}

export default numberToDay;
