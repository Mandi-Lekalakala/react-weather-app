// Fetching Date data from SheCodes Weather Api //
export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let localDate = new Date(
    props.date.toLocaleString("en-US", { timeZone: props.timezone }),
  );

  let day = days[localDate.getDay()];
  let hours = localDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = localDate.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
