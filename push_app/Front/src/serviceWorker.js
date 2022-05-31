export const registerServiceWorker = () => {
    
    if ('serviceWorker' in navigator) {
        console.log("ehntra",navigator.serviceWorker)
      navigator.serviceWorker
        .register('firebase-messaging-sw.js')
        .then(function (registration) {
            console.log("pasa aca");
          // eslint-disable-next-line no-console
          console.log('[SW]: SCOPE: ', registration.scope);
          return registration.scope;
        })
        .catch(function (err) {
            console.log(err,"EL ERROR PA");
          return err;
        });
    }
  };
  