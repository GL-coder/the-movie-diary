export default class MovieAPI {
  __urlAPI = 'https://www.omdbapi.com/?t=';
  __keyAPI = '&apikey=e11befaa';

  getResource = async (url, year) => {
    const res = await fetch(this.__urlAPI + url + `&y=${year}` + this.__keyAPI);
  
    if (!res.ok) throw new Error('error')

    return await res.json()
  }
}