/*Botão Dropdown Principal */
document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownContainer = document.querySelector(".dropdown-container");

    dropdownBtn.addEventListener("click", () => {
        const isVisible = dropdownContainer.style.display === "block";
        dropdownContainer.style.display = isVisible ? "none" : "block";
    });
});
/*Botão Dropdown Gestão*/
document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector(".dropdown-btn1");
    const dropdownContainer = document.querySelector(".dropdown-container1");

    dropdownBtn.addEventListener("click", () => {
        const isVisible = dropdownContainer.style.display === "block";
        dropdownContainer.style.display = isVisible ? "none" : "block";
    });
});

/*Botão Dropdown Administrativo*/
document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector(".dropdown-btn2");
    const dropdownContainer = document.querySelector(".dropdown-container2");

    dropdownBtn.addEventListener("click", () => {
        const isVisible = dropdownContainer.style.display === "block";
        dropdownContainer.style.display = isVisible ? "none" : "block";
    });
});
/* Navegação TOP BAR Previsão do tempo */
async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '049b6b60365c39ebb4fc2fe103b5a3b2'; // Coloque sua chave de API aqui
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
    try {
        const response = await fetch(url);
        const data = await response.json();
  
        document.getElementById('city-name').innerText = `Clima em ${data.name}`;
        document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Descrição: ${data.weather[0].description}`;
        document.getElementById('humidity').innerText = `Umidade: ${data.main.humidity}%`;
        document.getElementById('wind-speed').innerText = `Velocidade do vento: ${data.wind.speed} km/h`;
    } catch (error) {
        alert("Cidade não encontrada, tente novamente.");
    }
  }
  
