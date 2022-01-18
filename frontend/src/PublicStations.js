import StationList from "./StationList";
import useFetch from "./useFetch";

const PublicStations = () => {
  const { error, isPending, data: stations } = useFetch('https://adita-car-api.herokuapp.com/public_stations')

  return (
    <div className="public-stations">
      { error && <div>{ error }</div> }
      { isPending && <h3>Loading...</h3> }
      { stations && <StationList stations={stations} /> }
    </div>
  );
}
 
export default PublicStations;
