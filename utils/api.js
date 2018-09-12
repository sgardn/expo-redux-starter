import wretch from 'wretch'

const api = wretch()
  .url('https://jsonplaceholder.typicode.com')

export default api
