import React, { useState } from 'react';

export default function ShowTime(props) {
  const { time, selectedShowTime } = props;
  const timeEntries = Object.entries(time);

  const [selectedShow, setSelectedShow] = useState(-1);
  const [selectedShowTimeState, setSelectedShowTimeState] = useState(selectedShowTime);

  const handleSelectShow = (index, showTime) => {
    setSelectedShow(index);
    setSelectedShowTimeState([showTime]); // Update selectedShowTimeState with the newly selected showTime
  };

  return (
    <div className='right'>
      {timeEntries.slice(1, timeEntries.length).map(([showName, showTime], index) => (
        <div
          key={index}
          className={`show-time-container ${selectedShow === index ? 'selected' : ''}`}
          style={{ backgroundColor: selectedShowTimeState.includes(showTime) ? 'green' : '' }}
          onClick={() => handleSelectShow(index, showTime)}
        >
          <h3>{showTime}</h3>
        </div>
      ))}
    </div>
  );
}
