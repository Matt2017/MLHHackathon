const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");
encodedParams.append("locationKey", "<REQUIRED>");

const options = {
  method: 'POST',
  url: 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'e7fe802448mshe736ea6b1ac5769p1127fdjsnec2046358d83',
    'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});