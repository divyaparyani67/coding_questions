const getData = async () => {
    try {
      const response = await axios.get('API-URL');
      console.log(response.data.data)
    }
    catch (error) {
        console.log('err')
    }
  }
getData();