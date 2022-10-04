 const GET_CATEGORY = `query ($bountyIds: [ID!]!) {
  nodes(ids: $bountyIds) {
    ... on Issue {
	id
      labels(first: 10) {
        
        nodes {
          name
        }
      }
    }
  }
}`

module.exports={GET_CATEGORY}