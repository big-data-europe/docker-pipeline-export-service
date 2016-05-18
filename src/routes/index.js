import constructEndpoints from './construct'

const routes = constructEndpoints.map((item) => {
  const {query, ...options} = item
  return {
    method: 'GET',
    handler: {
      'sparql': {
        type: 'construct',
        query
      }
    },
    ...options
  }
})

export default routes
