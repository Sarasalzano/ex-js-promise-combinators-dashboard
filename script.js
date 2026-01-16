async function getDashboardData(query) {
  try {
    const [destRes, weatherRes, airportRes] = await Promise.all([
      fetch(`http://localhost:3333/destinations?search=${query}`),
      fetch(`http://localhost:3333/weathers?search=${query}`),
      fetch(`http://localhost:3333/airports?search=${query}`),
    ]);
    const [destData, weatherData, airportData] = await Promise.all([
      destRes.json(),
      weatherRes.json(),
      airportRes.json(),
    ]);

    // primo elemento di ogni array
    const cityData = destData[0];
    const weather = weatherData[0];
    const airport = airportData[0];

    return {
      city: cityData.name,
      country: cityData.country,
      temperature: weather.temperature,
      weather: weather.weather_description,
      airport: airport.name,
    };
  } catch (error) {
    throw error;
  }
}


