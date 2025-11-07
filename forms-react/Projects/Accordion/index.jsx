import React, { useState } from 'react'
import data from './data';

const index = () => {
  const [selected, setSelected] = useState(null);

  function showSingleFeature(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <div className='wrapper'>
      <div className='accordian'>
        {
          data && data.length > 0 ? data.map((dataItem) => (
            <div key={dataItem.id}>
              <h3>{dataItem.question}</h3>
              <button onClick={() => showSingleFeature(dataItem.id)}>+</button>
              {selected === dataItem.id ? dataItem.answer : null}
            </div>

          )) : (
            <div> No data to be found </div>
          )}
      </div>

    </div>
  )
}

export default index
