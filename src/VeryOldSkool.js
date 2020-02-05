import React from 'react';
import { DataList } from './DataList';
import { createClientWithoutCancel } from './axios.utils';

class VeryOldStyle extends React.Component {
  constructor() {
    super();
    const client = createClientWithoutCancel({ url: 'http://localhost:9000/slow', id: 'oldSkool' });
    this.client = client;
    this._isMounted = false;
    this.state = {
      isLoading: false,
      list: []
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    this.setState({ isLoading: true });
    await this.client()
      .then(result => {
        this._isMounted &&
          this.setState({
            isLoading: false,
            list: result.data
          })
      })
      .catch(() => { this.setState({ isLoading: false }); })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return <section>
      {this.state.isLoading ? <p className={`loading`}>Loading quick data...</p> : <DataList data={this.state.list}></DataList>}
    </section>
  }
}

export default VeryOldStyle;
