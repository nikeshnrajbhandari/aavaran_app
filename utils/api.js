import { API_URL, STRAPI_API_TOKEN } from "./urls";

async function fetchDataFromApi() {

  
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + STRAPI_API_TOKEN,
    }
  }
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const res = await fetch(`${API_URL}/api/products?populate=*`, options)
 
  return res.json()
}