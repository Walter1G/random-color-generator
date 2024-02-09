import { useState } from "react";

const RandomColor = () => {
    const [colortype, setColorType] = useState('hex')
    const [color, setColor]= useState('#000000')
    

  return (
    <div className="container" style={{width:'100vw', height:'100vh', background:color}}>
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
};

export default RandomColor;
