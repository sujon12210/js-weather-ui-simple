async function getWeather(){
  const city = document.getElementById('city').value;
  const result = document.getElementById('result');

  if(city === ''){
    result.innerText = 'Enter a city';
    return;
  }

  result.innerText = 'Loading...';

  try{
    const res = await fetch(
      `https://wttr.in/${city}?format=j1`
    );
    const data = await res.json();

    const temp = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;

    result.innerText = `${temp}°C - ${desc}`;
  }catch{
    result.innerText = 'Failed to load weather';
  }
}
