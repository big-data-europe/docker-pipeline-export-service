import Joi from 'joi'

const graph = process.env.MU_APPLICATION_GRAPH !== undefined
  ? process.env.MU_APPLICATION_GRAPH
  : 'http://mu.semte.ch/application'

export default [
  {
    path: '/pipelines',
    query: `
      PREFIX core: <http://mu.semte.ch/vocabularies/core/>
      CONSTRUCT {
        ?pipeline ?p ?o .
        ?step ?x ?y
      }
      FROM <${graph}>
      WHERE {
        ?pipeline core:uuid ?uuid .
        ?pipeline ?p ?o .
        ?pipeline <http://purl.org/spar/pwo/hasStep> ?step .
        ?step ?x ?y
      }`,
    config: {
      validate: {
        query: {
          'uuid': Joi.string().required()
        }
      }
    }
  }
]
