import React from 'react';
import { DataList } from './DataList';
import { useEnhancedRequest } from './client.hooks';

function App() {
  const [slowData, isLoadingSlowData] = useEnhancedRequest({ url: 'http://localhost:9000/slow', id: 'slow' });

  return (
    <article>
      <section>
        {isLoadingSlowData ? `Loading slow data...` : <DataList data={slowData}></DataList>}
      </section>
    </article>
  );
}

export default App;
