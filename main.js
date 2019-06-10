var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
  
  var choice = select.value;
  
  if(choice === 'rainy'){
    para.textContent = 'Rainy weather';
  }else if (choice === 'sunny'){
    para.textContent = 'Sunny Weather';
  }else if(choice === 'snowing'){
    para.textContent = 'snowing weather';
  }else if (choice === 'overcast'){
    para.textContent = 'may or may not rain';
  }else {
    para.textContent = '';
  }
  
}
