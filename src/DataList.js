import React from 'react';

export const DataList = ({ data = [] }) => <ul>
  {data.map(item => <li key={item.id}>{item.id}: {item.name}</li>)}
</ul>;