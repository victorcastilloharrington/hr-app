type variables = {id: string} | {id: string, department_id: string}

export const createQuery =(query: string, variables?: variables) => {
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

      console.log(body)
    return fetch(url, options)

}

