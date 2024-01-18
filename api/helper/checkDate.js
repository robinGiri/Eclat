//this function will receive the date and day and then check if that date exceed the days or not
function isDateMoreThan10DaysOld(dateString) {
  // Convert the input date string to a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Calculate the difference in days
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  // Check if the difference is more than 10 days
  return daysDifference > 10;
}
module.exports = isDateMoreThan10DaysOld;
