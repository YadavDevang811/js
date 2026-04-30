console.log("basic concept of event and using loops done live events operations")
const buttons = document.querySelectorAll('.button');  // gives nodelist
const body = document.querySelector('body');           // gives only first matching element

buttons.forEach(function (button) {                    // foreach loop

  console.log(button);                                 // just checking what we can get 

  button.addEventListener('click', function (e) {      // adding a event listner so that we can find out that event is done / e is function object that is basically a parameter
    console.log(e);
    console.log(e.target);                             // just checking       
    if (e.target.id === 'grey') {                      // e.target gives the exact clicked element
      body.style.backgroundColor = e.target.id;        // gives body a new style.background color by what targeted elemnt hold in thair id in this case we have color names
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

