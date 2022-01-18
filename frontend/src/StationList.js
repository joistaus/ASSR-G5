const StationList = ({ stations }) => {
  return (
    <div className="station-list">
      {stations.map(station => (
        <div className="station-preview" key={station._id} >
          <h2>{station['Station Name']}</h2>
          <p>{station['City']}, {station['Street Address']}</p>
        </div>
      ))}
    </div>
  );
}

export default StationList;