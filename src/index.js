import https from 'https';

const config = {
  URL: 'https://jsonmock.hackerrank.com/api/countries/search',
};

const get = (url, substring, minPopulation, count, currentPage) => {
  https.get(`${url}?name=${substring}&page=${currentPage}`, (response) => {
    response.on('data', (bufferData) => {
      const jsonData = bufferData.toString();

      const { data, page, total_pages } = JSON.parse(jsonData);

      const countries = data.filter((country) => country.population > minPopulation);

      const countriesCount = count + countries.length;

      if (page < total_pages) {
        get(url, substring, minPopulation, countriesCount, +page + 1);
      } else {
        console.log(countriesCount);
      }
    });
  });
};

const getCountries = async (substring, minPopulation) => {
  const count = 0;
  const page = 1;

  get(config.URL, substring, minPopulation, count, page);
};

getCountries('un', 100090); // 8 expected
getCountries('united', 200); // 4 expected
getCountries('in', 1000000); // 21 expected
getCountries('co', 500); // 13 expected
