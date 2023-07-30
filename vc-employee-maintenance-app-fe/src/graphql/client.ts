export const createQuery =(query: string, variables?: TVariables) => {
 return JSON.stringify({query, variables})
}

export const graphqlFetch = (url: string, body: string) => {
  const headers = {
        'content-type': 'application/json',
      };
   const options = {
        method: 'POST',
        headers,
        body
      };

    return fetch(url, options)

}

