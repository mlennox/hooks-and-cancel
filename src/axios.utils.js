import axios from 'axios';

export const createAxios = (clientConfig) => {
  const canceler = axios.CancelToken.source();
  const client = axios.create(clientConfig);
  return {
    client,
    canceler,
    isCancel: axios.isCancel
  }
}

export const createClient = ({ url, id, method, ...config }, setIsLoading = () => { }) => {
  const { client, canceler, isCancel } = createAxios(config);
  return {
    client: async () => {
      setIsLoading(true);
      console.log(`${id} : About to fetch data`, url);
      return await client.request({
        ...config,
        url: url,
        method: method || 'GET',
        cancelToken: canceler.token,
      })
        .then(response => {
          console.log(`${id} : in axios "then"`, response);
          setIsLoading(false);
          return response;
        })
        .catch(error => {
          // we swallow the cancel error, throw all others
          if (!isCancel(error)) {
            console.error(`${id} : ... it wasn't a cancel, so we'll throw`, error);
            // we only update state if we have not been cancelled...
            setIsLoading(false);
            throw error;
          }
        });
    },
    cancel: canceler.cancel,
  }
}


export const createClientWithoutCancel = ({ url, id, method, ...config }, setIsLoading = () => { }) => {
  const { client } = createAxios(config);
  return async () => {
    setIsLoading(true);
    console.log(`${id} : About to fetch data`, url);
    return await client.request({
      ...config,
      url: url,
      method: method || 'GET',
    })
      .then(response => {
        console.log(`${id} : We got the data`, response);
        setIsLoading(false);
        return response;
      })
      .catch(error => {
        console.error(`${id} : there was some error`, error);
        setIsLoading(false);
        throw error;
      });
  };
}