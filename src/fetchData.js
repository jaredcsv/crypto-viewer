function getSuspender(promise) {
    let status = "pending";
    let response;
  
    const suspender = promise.then(
      (res) => {
        status = "success";
        response = res;
      },
      (err) => {
        status = "error";
        response = err;
      }
    );
  
    // Method to read the result of the promise based on its current status
    const read = () => {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw response;
        default:
          return response;
      }
    };
  
    // Return an object with the read method
    return { read };
  }
  
  // Function to fetch data from a given URL and create a Suspender
  function fetchData(url) {

    const options = {method: 'GET'};

    const promise = fetch(url, options)
      .then((response) => response.json())
      .then((data) => data)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  
    return getSuspender(promise);
  }
  
  export default fetchData;
  