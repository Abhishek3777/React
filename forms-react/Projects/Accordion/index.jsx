import React, { useState } from 'react';
import data from './data';
import './style.css'

const index = () => {

  const [selected, setSelected] = useState(null);

  function showSingleFeature(id) {
    setSelected(selected === id ? null : id);
  }

  return (
    <div className='wrapper'>
      <div className='accordian'>
        {
          data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className='item'>
                <div className='title'>
                  <h3>{dataItem.question}</h3>
                  <span>

                    <button onClick={() => showSingleFeature(dataItem.id)}>+</button></span>
                  <div>
                    {
                      selected === dataItem.id ?
                        <div className='content'> {dataItem.answer} </div> : null
                    }
                  </div>
                </div> </div>
            ))
          )
            : (<div> No data to be found </div>)


        }
      </div>
    </div>
  )
}

export default index
