import React from 'react';
import { DataList } from './DataList';
import { useNoCancelRequest } from './client.hooks';

function App() {
  const [slowData, isLoadingSlowData] = useNoCancelRequest({ url: 'http://localhost:9000/slow', id: 'slow_no_cancel' });

  return (
    <article>
      <section>
        {isLoadingSlowData ? `Loading slow data with no cancel...` : <DataList data={slowData}></DataList>}
      </section>
    </article>
  );
}

export default App;
