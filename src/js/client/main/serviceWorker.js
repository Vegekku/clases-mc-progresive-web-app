function onUpdateFound(registration) {
  let newWorker = registration.installing;

  registration.installing.addEventListener('statechange', function () {
    // onreadystatechange(newWorker);
    console.log(newWorker.state);
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/sw.js", {scope: "./"}).then(function (registration) {
    console.log("Registered");
    registration.addEventListener('updatefound', function () {
      onUpdateFound(registration);
    });
  }).catch(function (error) {
    console.log("Registration failed: " + error);
  });
}