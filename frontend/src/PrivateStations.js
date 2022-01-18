import StationList from "./StationList";
import useFetch from "./useFetch";

const PrivateStations = () => {
  const { error, isPending, data: stations } = useFetch('https://adita-car-api.herokuapp.com/private_stations')

  return (
    <div className="private-stations">
      { error && <div>{ error }</div> }
      { isPending && <h3>Loading...</h3> }
      { stations && <StationList stations={stations} /> }
    </div>
  );
}
 
export default PrivateStations;
