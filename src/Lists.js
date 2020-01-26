import React from 'react';
import { DataList } from './DataList';
import { useEnhancedRequest, useNoCancelRequest } from './client.hooks';

const useDummyData = () => {

  const [quickData, isLoadingQuickData] = useEnhancedRequest({ url: 'http://localhost:9000/quick', id: 'quick' });
  const [slowData, isLoadingSlowData] = useEnhancedRequest({ url: 'http://localhost:9000/slow', id: 'slow' });

  const [slowDataNoCancel, isLoadingSlowDataNoCancel] = useNoCancelRequest({ url: 'http://localhost:9000/slow', id: 'slow_no_cancel' });

  return [quickData, isLoadingQuickData, slowData, isLoadingSlowData, slowDataNoCancel, isLoadingSlowDataNoCancel];
}

function App() {
  const [
    quickData,
    isLoadingQuickData,
    slowData,
    isLoadingSlowData,
    slowDataNoCancel,
    isLoadingSlowDataNoCancel
  ] = useDummyData();

  return (
    <article>
      <section>
        {isLoadingQuickData ? `Loading quick data...` : <DataList data={quickData}></DataList>}
      </section>

      <section>
        {isLoadingSlowData ? `Loading slow data...` : <DataList data={slowData}></DataList>}
      </section>
      <section>
        {isLoadingSlowDataNoCancel ? `Loading slow, no-cancel data...` : <DataList data={slowDataNoCancel}></DataList>}
      </section>
    </article>
  );
}

export default App;
