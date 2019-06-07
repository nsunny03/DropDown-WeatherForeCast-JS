var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
  
  var choice = select.value;
  
  if(choice === 'sunny'){
    para.textContent = 'It is sunny outside today.';
  } 
  else if(choice === 'rainy'){
      para.textContent = 'It is rainy outside today';
  }
  else if (choice === 'snowing'){
    para.textContent = 'It is snowing outside today';
  }
  else if (choice === 'overcast'){
    para.textContent = 'It is Overcase outside today'
  }
  
}
