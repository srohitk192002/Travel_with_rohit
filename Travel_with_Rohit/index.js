$(document).ready(function () {
  
  // modal popup
    $("#myModal").modal("show");
  
    $("#shortKey").on("click", function () {
      $("#alert").css("display", "block");
      $('#alert').fadeIn('slow').delay(3000).fadeOut('slow'); //-------this is for alert section when we click okay btn
    })

    // remind me later pop up
    $("#later").on("click", function () {   
        setTimeout(function () {
          $("#myModal").modal("show");
        },30000);
    });

    

  });

  
  
  
  
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install short cut on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('#shortKey');
  
  window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.addEventListener('click', () => {
   
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
  });