// Countdown Timer //

const startingMinutes = 30;

// Get seconds
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

// Set interval
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Seconds time / 60 give minutes. Math floor not to get decimals 
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 30 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--; 
} 

// Hide POP UP

setTimeout(function() {
  $('#hide').show()
}, 5000);

// POP UP   
    var r_text = new Array ();
r_text[0] = "Afolabi Emmanuel";
r_text[1] = "Funmi P.";
r_text[2] = "Adams C.";
r_text[3] = "Sunday K. Derinde";
r_text[5] = "Chioma Esther";
r_text[4] = "Precious Chinaba";
r_text[6] = "Femi Sukanmi";
r_text[7] = "Bart";
r_text[8] = "David O.";
r_text[9] = "Riliwan Ogunlana";


    var r_map = new Array ();
r_map[0] = "https://s3.amazonaws.com/provely-public/images/maps/02a342794409deaf5f29216201d9da30.jpg";
r_map[1] = "https://s3.amazonaws.com/provely-public/images/maps/359f4e0ae29d7fb7af480e4e87ced439.jpg";
r_map[2] = "https://s3.amazonaws.com/provely-public/images/maps/4b2aee97b83b39dd44d9be1041e06a83.jpg";
r_map[4] = "https://s3.amazonaws.com/provely-public/images/maps/2211ef3aabad24eb566b23da26669662.jpg";
r_map[5] = "https://s3.amazonaws.com/provely-public/images/maps/3d147c6ba113929f5a004a5e9dcc832e.jpg";
r_map[6] = "https://s3.amazonaws.com/provely-public/images/maps/e10212e09e6eb3b49d00e046870445af.jpg";

 
var r_product = new Array ();
r_product[0] = "purchased this product.";
r_product[1] = "purchased this product.";
r_product[2] = "purchased this product.";
r_product[3] = "purchased this product.";
r_product[4] = "purchased this product.";
r_product[5] = "purchased this product.";
r_product[6] = "purchased this product.";
r_product[7] = "purchased this product.";
     setInterval(function(){ $(".custom-social-proof").stop().slideToggle('slow'); }, 10000);
      $(".custom-close").click(function() {
        $(".custom-social-proof").stop().slideToggle('slow');
      });
        setInterval(function(){    
        	var myNumber = Math.floor(7*Math.random());
        	$("#map1").attr("src",r_map[myNumber]);
 			$('#customer').text(r_text[myNumber]);

          	$('#product').text(r_product[Math.floor(7*Math.random())]);
 			var timeVal = Math.floor(7*Math.random());
 	
 			$('#time').text(timeVal);
 		
 		 
     // console.log(timeVal); 
 }, 15000);