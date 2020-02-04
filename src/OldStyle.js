import React, { Fragment } from 'react';
import { DataList } from './DataList';
import { render } from '@testing-library/react';
import { createClientWithoutCancel } from './axios.utils';


class OldStyle extends React.Component {
  constructor() {
    super();
    this.client = createClientWithoutCancel({ url: 'http://localhost:9000/slow', id: 'slow' });
  }

  async componentDidMount() {
    await this.client()
      .then(result => {
        console.log("rsult", result)
      })
      .catch(console.error);
  }

  render() {
    return <Fragment></Fragment>
  }
}


export default OldStyle;


// const SampleComponent = () => {

//   const [counter, setCounter] = useState(0)

//   // Here's how we'll keep track of our component's mounted state
//   const componentIsMounted = useRef(true)
//   useEffect(() => {
//     return () => {
//       componentIsMounted.current = false
//     }
//   }.[]) // Using an empty dependency array ensures this only runs on unmount

//   const incrementCounterAsync = useCallback(() => {
//     async () => {
//       try {
//         await someLongRunningProcess()
//         if (componentIsMounted.current) {
//           setCounter(counter + 1)
//         }
//       } catch (err) {
//         // Handle your error
//       }
//     }
//   }, [setCounter])

//   render(
//     // Display the counter + a button to increment it 
//   )
// }