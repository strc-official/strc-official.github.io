const GLOW1 = document.querySelector('.glow1');
const GLOW2 = document.querySelector('.glow2');

// Größe des Fensters als Variable nutzbar machen
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Bewegung der Maus erkennen und als Variable nutzbar machen
const getMouseMovePos = (event) => {

    // Mouse Koordinaten definieren
    const MOUSE_X = event.clientX;
    const MOUSE_Y = event.clientY;
    console.log(MOUSE_Y + ' : ' + MOUSE_X);

    // Differenz berechnen
    const DELTA_X1 = Math.round((MOUSE_X / WIDTH * 100)/3,0);
    const DELTA_Y1 = Math.round((MOUSE_Y / HEIGHT * 100)/3, 0);
    const DELTA_X2 = Math.round((MOUSE_X / WIDTH * 100)/3,0);
    const DELTA_Y2 = Math.round((MOUSE_Y / HEIGHT * 100)/3, 0);

    // Glow Elemente Bewegen
    GLOW1.style.bottom =  `${DELTA_Y1}%`;
    GLOW1.style.right = `${DELTA_X1}%`;
    GLOW2.style.top =  `${DELTA_Y2}%`;
    GLOW2.style.left = `${DELTA_X2}%`;

};

// Function zum triggern eines Events erstellen
document.onmousemove = getMouseMovePos;



//---------------------------------------



// Set the date we're counting down to
var countDownDate = new Date("Oct 30, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="time"
  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);