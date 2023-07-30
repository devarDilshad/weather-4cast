import { useState } from "react";
import { fetchPlace, fetchPlaceLngLat } from "../utils/fetchData";

const LiveSearch = ({ setPlace }) => {
  const [city, setCity] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);

  const handleCityChange = async (e) => {
    setCity(e.target.value);
    if (!city) return;

    const res = await fetchPlace(city);

    !autocompleteCities.includes(e.target.value) &&
      res.features &&
      setAutocompleteCities(res.features.map((place) => place.place_name));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await fetchPlaceLngLat(city);
    setPlace({
      lng: res.features[0].center[0],
      lat: res.features[0].center[1],
    });
  };

  return (
    <form onSubmit={handleSumbit} className="md:w-full">
      <div className="flex justify-center items-center py-2 gap-3 rounded md:px-4">
        <div className="md:w-full">
          <input
            className=" bg-transparent border-[1px] rounded text-primary pl-1 md:w-full placeholder:text-primary"
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join("|")}
            autoComplete="off"
            placeholder="Type a Place then press space"
          />
          <datalist id="places">
            {autocompleteCities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </datalist>
        </div>
        <button
          className="capitalize border-[1px] px-2 rounded bg-primary"
          type="submit"
        >
          select
        </button>
      </div>
    </form>
  );
};

export default LiveSearch;
