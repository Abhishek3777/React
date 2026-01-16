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
import StarRating from '../Projects/star-rating/index';
import ImageSlider from '../Projects/image-slider/index';
import NewsApp from '../Projects/NewsApp/index';
import LoadMoreData from '../Projects/load-more-data/index';
import { store } from "../Redux/store";
import { Provider } from "react-redux";
import Reduxfile from '../Redux/reduxFile';
import Counter from '../interview-practice/counter';
import ControlledText from '../interview-practice/controlledText';
import TodoApp from '../interview-practice/todo2';
import FetchApi2 from '../interview-practice/fetchApi2';
function App() {



  // Single  Input
  return (
    <>
      <Provider store={store} >
        {/* <Todo/> */}
        {/* <Accordion /> */}
        {/* <StarRating /> */}
        {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={'5'} page={'1'} /> */}
        {/* <NewsApp /> */}
        {/* <LoadMoreData /> */}
        {/* <RandomColor /> */}
        {/* <MultipleInputs /> */}
        {/* <FetchApi />
        <Reduxfile /> */}
        {/* <Counter /> */}
        {/* <ControlledText/> */}
        {/* <TodoApp/> */}
        <FetchApi2 />
      </Provider>
    </>
  )
}

export default App
