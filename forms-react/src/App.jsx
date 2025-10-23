import { useState } from 'react'
import MultipleInputs from '../formsInReact/multipleInputs';
import map from './map';
import UsestateLearn from '../Hooks/useStateLearn/usestatelearn';
import UseEffectLearn from '../Hooks/useEffectLearn/useEffectLearn'
import FetchApi from '../Hooks/useEffectLearn/fetchApi';
import Child from '../Hooks/useContext/Child';
function App() {



  // Single  Input
  return (
    <>
      <UsestateLearn />
      <UseEffectLearn />
      
      {/* <MultipleInputs /> */}
      {/* <FetchApi /> */}
    </>
  )
}

export default App
