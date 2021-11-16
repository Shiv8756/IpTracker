const lookupBtn = document.querySelector('.look-up-btn');
const ipDisplay = document.querySelector('.display-ip');
const locDisplay = document.querySelector('.display-location');

lookupBtn.addEventListener("click", () => {
    axios.get("https://ipapi.co/json/").then((response) => {
        ipDisplay.textContent = `Ip: ${response.data.ip}`;
        locDisplay.textContent = `Location: ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
    });
});

