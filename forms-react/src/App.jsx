import { useState } from 'react'
import MultipleInputs from '../formsInReact/multipleInputs';
import map from './map';
import UsestateLearn from '../Hooks/useStateLearn/usestatelearn';
import UseEffectLearn from '../Hooks/useEffectLearn/useEffectLearn'
import FetchApi from '../Hooks/useEffectLearn/fetchApi';
import Child from '../Hooks/useContext/Child';
import ChildProp from '../propsReact/ChildProp';
import Parent from '../propsReact/Parent';
import Conditional from '../Conditional/Conditional';
import Lists from '../List/Lists';
import Todo from '../Projects/Todo';
import Accordion from '../Projects/Accordion/index';
import RandomColor from '../Projects/random-color/index'

function App() {



  // Single  Input
  return (
    <>
      {/* <Todo/> */}
      {/* <Accordion /> */}

      <RandomColor />
      {/* <MultipleInputs /> */}
      {/* <FetchApi /> */}
    </>
  )
}

export default App
