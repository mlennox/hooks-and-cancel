import React from 'react';
import { DataList } from './DataList';
import { createClient } from './axios.utils';

class OldStyle extends React.Component {
  constructor() {
    super();
    const { client, cancel } = createClient({ url: 'http://localhost:9000/slow', id: 'oldSkool' });
    this.client = client;
    this.cancel = cancel;
    this.state = {
      isLoading: false,
      list: []
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.client()
      .then(result => {
        this.setState({
          isLoading: false,
          list: result
        })
      })
      .catch(console.error);
  }

  componentWillUnmount() {
    this.cancel();
  }

  render() {
    return <section>
      {this.state.isLoading ? <p className={`loading`}>Loading quick data...</p> : <DataList data={this.state.list}></DataList>}
    </section>
  }
}

export default OldStyle;
