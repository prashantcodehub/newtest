import React from 'react'
import "./TotalVolume.css";

const Totalvolume = ({ total_volume }) => {
  return (
    <div className="Totalvolume">
      Totalvolume : <span>{total_volume}</span>
    </div>
  );
};

export default Totalvolume