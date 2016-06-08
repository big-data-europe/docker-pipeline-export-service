import Joi from 'joi'
import { graph } from 'helpers/sparql'

export default [
  {
    path: '/pipelines',
    query: `
      PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
      PREFIX pwo: <http://purl.org/spar/pwo/>
      CONSTRUCT {
        ?pipeline ?p ?o .
        ?step ?x ?y
      }
      FROM <${graph}>
      WHERE {
        ?pipeline mu:uuid ?uuid .
        ?pipeline ?p ?o .
        ?pipeline pwo:hasStep ?step .
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
