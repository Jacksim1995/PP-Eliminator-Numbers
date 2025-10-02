const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();


  const picks = parseInt(document.getElementById('picks').value);
  const runners = parseInt(document.getElementById('runners').value);

  const horses = [];

  if (picks > runners) {
    alert('Picks must be lower than runners.');
    return;
  }

  while (horses.length < picks) {
      let number = Math.ceil(Math.random()*runners);
      if (horses.includes(number) === false) { 
        horses.push(number);
      }
    }
  horses.sort((a, b) => b-a);
  document.getElementById('result').innerHTML = horses.join(", ");
})
