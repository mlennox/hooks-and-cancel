import React from 'react';
import { DataList } from './DataList';
import { useEnhancedRequest } from './client.hooks';

function App() {
  const [quickData, isLoadingQuickData] = useEnhancedRequest({ url: 'http://localhost:9000/quick', id: 'quick' });

  return (
    <section>
      {isLoadingQuickData ? <p className={`loading`}>Loading quick data...</p> : <DataList data={quickData}></DataList>}
    </section>
  );
}

export default App;
