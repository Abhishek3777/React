import { useState } from 'react'
import MultipleInputs from '../src/multipleInputs';
import map from './map';
import UsestateLearn from '../useStateLearn/usestatelearn';
import UseEffectLearn from '../useEffectLearn/useEffectLearn';
import FetchApi from '../useEffectLearn/fetchApi';
function App() {



  // Single  Input
  return (
    <>
      {/* <UsestateLearn /> */}
      <UseEffectLearn />
      <MultipleInputs />
      <FetchApi />
    </>
  )
}

export default App
