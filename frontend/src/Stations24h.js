import StationList from "./StationList";
import useFetch from "./useFetch";

const Stations24h = () => {
  const { error, isPending, data: stations } = useFetch('https://adita-car-api.herokuapp.com/24h_city_stations')

  return (
    <div className="stations-24h">
      {error && <div>{error}</div>}
      {isPending && <h3>Loading...</h3>}
      {stations && Object.keys(stations).sort().map((city) => (
        <div key={city}>
          <h2>{city.toUpperCase()}</h2>
          <StationList stations={stations[city]} />
        </div>
      ))}
    </div>
  );
}

export default Stations24h;
