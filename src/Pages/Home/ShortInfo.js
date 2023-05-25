import React from 'react';
import { Link } from 'react-router-dom';


const ShortInfo = () => {

  const SizeNav={
    "color":"white",
    "font-family": "'Roboto Condensed', sans-serif"
};

    return (
      <div>
        <div style={SizeNav} className="c_padding grid grid-cols-1 lg:grid-cols-2 gap-2 ">
        <div>
          <h1 style={{"color":"#d4d4d4 !important"}} className='text-3xl font-bold ' >PROFESSIONAL BARBERSHOP <br /> FOR MEN ONLY</h1>
        </div>
        <div>
            <p className='text-slate-300 text-sm' >Et tellus rhoncus urna a. Tempus felis, sociis lorem aliquet nibh pellentesque. Vitae nunc, dolor, blandit eget eleifend etiam id. Amet arcu lobortis sed pulvinar cursus pretium sit pretium.
</p>
    <div className=" my-3.5 grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div className='my-3.5'>
        <h1 className='text-xl font-bold' > SINCE 2015</h1>
        <p className='my-3.5 text-slate-300 text-sm'>Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis cras odio.
</p>
<button className="btn btn-primary"> <Link to="/about">Learn More</Link></button>
      </div >
      <div className='my-3.5'>
        <h1 className='text-xl font-bold' >1000+ CLIENTS</h1>
        <p className='my-3.5 text-slate-300 text-sm'>Dui cursus neque et at ipsum. Cursus urna fringilla nisl enim duis cras odio.
</p>
      </div>
    </div>    
        </div>
</div>

      </div>
    );
};

export default ShortInfo;

