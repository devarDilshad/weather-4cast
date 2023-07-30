export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const fetchPlace = async (text) => {
  const api_key = import.meta.env.VITE_APP_MAPOX_API_KEY;
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${api_key}&cachebuster=1625641871908&autocomplete=true&types=place`
    );
    if (!res.ok) throw new Error(res.statusText);
    const data = res.json();
    return data;
  } catch (err) {
    return { error: "Unable to retrieve places" };
  }
};
export const fetchPlaceLngLat = async (text) => {
  const api_key = import.meta.env.VITE_APP_MAPOX_API_KEY;
  try {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?proximity=ip&access_token=${api_key}`
    );
    if (!res.ok) throw new Error(res.statusText);
    const data = res.json();
    return data;
  } catch (err) {
    return { error: "Unable to retrieve place" };
  }
};
