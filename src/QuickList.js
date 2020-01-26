import React from 'react';
import { DataList } from './DataList';
import { useEnhancedRequest } from './client.hooks';

function App() {
  const [quickData, isLoadingQuickData] = useEnhancedRequest({ url: 'http://localhost:9000/quick', id: 'quick' });

  return (
    <article>
      <section>
        {isLoadingQuickData ? `Loading quick data...` : <DataList data={quickData}></DataList>}
      </section>
    </article>
  );
}

export default App;
