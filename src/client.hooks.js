import { useEffect, useState } from 'react';
import {
  createClient,
  createClientWithoutCancel
} from './axios.utils';

export const useEnhancedRequest = ({ url, id, defaultData }) => {
  const [isLoading, setIsLoading] = useState();
  const { cancel, client } = createClient({ url, id }, setIsLoading);
  const [data, setData] = useState(defaultData || []);

  useEffect(() => {
    client()
      .then(response => {
        console.log(`${id} : in client "then"`, response);
        response && setData(response.data);
      })
      .catch(console.error);

    return () => {
      cancel();
    }
  },
    // create-react-app eslint requires dependencies to be listed
    // we don't want them as we only want the effect to run once
    // so we suppress the eslint rule here
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [data, isLoading];
}

export const useNoCancelRequest = ({ url, id, defaultData }) => {
  const [isLoading, setIsLoading] = useState();
  const client = createClientWithoutCancel({ url, id }, setIsLoading);
  const [data, setData] = useState(defaultData || []);

  useEffect(() => {
    client()
      .then(response => setData(response.data))
      .catch(console.error);
  },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [data, isLoading];
}