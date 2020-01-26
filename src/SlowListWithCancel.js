import React from 'react';
import { DataList } from './DataList';
import { useEnhancedRequest } from './client.hooks';

function App() {
  const [slowData, isLoadingSlowData] = useEnhancedRequest({ url: 'http://localhost:9000/slow', id: 'slow' });

  return (
    <section>
      {isLoadingSlowData ? <p className={`loading`}>Loading slow data...</p> : <DataList data={slowData}></DataList>}
    </section>
  );
}

export default App;
