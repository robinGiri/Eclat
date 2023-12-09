export const millisecondsToHourMinSecond = (milliseconds) => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (60 * 1000)) % 60);
  const hours = Math.floor((milliseconds / (60 * 60 * 1000)) % 60);

  return [hours, minutes, seconds];
};
