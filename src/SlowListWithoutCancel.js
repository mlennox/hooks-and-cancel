import React from 'react';
import { DataList } from './DataList';
import { useNoCancelRequest } from './client.hooks';

function App() {
  const [slowData, isLoadingSlowData] = useNoCancelRequest({ url: 'http://localhost:9000/slow', id: 'slow_no_cancel' });

  return (
    <section>
      {isLoadingSlowData ? <p className={`loading`}>Loading slow data with no cancel...</p> : <DataList data={slowData}></DataList>}
    </section>
  );
}

export default App;
