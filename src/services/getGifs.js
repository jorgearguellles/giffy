const API_KEY = 'ZWQAvvRRPDQe5qVs15sshECKYL22aG1J';

function getGifs({ keyword = 'pokemon' } = {}){
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { id, title , images } = image
        const { url } = images.downsized_medium
        return { id, title, url };
      })
      return gifs;
    })
};

export { getGifs };