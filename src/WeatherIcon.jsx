import clearDay from "@meteocons/svg/fill/clear-day.svg";
import clearNight from "@meteocons/svg/fill/clear-night.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import partlyCloudyNight from "@meteocons/svg/fill/partly-cloudy-night.svg";
import cloudy from "@meteocons/svg/fill/cloudy.svg";
import overcastDay from "@meteocons/svg/fill/overcast-day.svg";
import overcastNight from "@meteocons/svg/fill/overcast-night.svg";
import drizzle from "@meteocons/svg/fill/drizzle.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import thunderstormsDay from "@meteocons/svg/fill/thunderstorms-day.svg";
import thunderstormsNight from "@meteocons/svg/fill/thunderstorms-night.svg";
import snow from "@meteocons/svg/fill/snow.svg";
import mist from "@meteocons/svg/fill/mist.svg";

const iconMapping = {
  "clear-sky-day": clearDay,
  "clear-sky-night": clearNight,
  "few-clouds-day": partlyCloudyDay,
  "few-clouds-night": partlyCloudyNight,
  "scattered-clouds-day": cloudy,
  "scattered-clouds-night": cloudy,
  "broken-clouds-day": overcastDay,
  "broken-clouds-night": overcastNight,
  "shower-rain-day": drizzle,
  "shower-rain-night": drizzle,
  "rain-day": rain,
  "rain-night": rain,
  "thunderstorm-day": thunderstormsDay,
  "thunderstorm-night": thunderstormsNight,
  "snow-day": snow,
  "snow-night": snow,
  "mist-day": mist,
  "mist-night": mist,
};

export default function WeatherIcon(props) {
  return (
    <img
      src={iconMapping[props.code] || cloudy}
      alt={props.alt}
      className={props.className}
      width={props.size}
      height={props.size}
    />
  );
}
