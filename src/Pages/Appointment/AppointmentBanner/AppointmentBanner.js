import React from 'react';

import { DayPicker } from 'react-day-picker';
import AppointmentImg from '../../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg';
// import styles from 'react-day-picker/dist/style.module.css';
import { format } from 'date-fns';
// const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    // const classNames: abcd = {
    //     ...styles,
    //     head: 'style_root__Vd1RM'
    //   };
      const css = `
      .style_root__Vd1RM { --rdp-background-color: #ff0000;
         --rdp-accent-color: #ff0000;}
    `;
    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={AppointmentImg} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6 sm:w-full'>
{/* <style>{`.style_root__Vd1RM { --rdp-background-color: #ff0000; --rdp-accent-color: #ff0000;}`}</style>  */}
            <style>{css}</style>
                        <DayPicker  
                            mode='single'
// classNames={classNames}
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        
                    <p>You have selected date: {format(selectedDate,'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;

// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';

// import React from 'react';
// import styles from 'react-day-picker/dist/style.module.css';

// const AppointmentBanner = () => {
//     const [selected, setSelected] = React.useState(new Date());

//     const classNames: classNames = {
//         ...styles,
//         head: 'style_root__Vd1RM'
//       };

//     let footer = <p>Please pick a day.</p>;
//     if (selected) {
//       footer = <p>You picked {format(selected, 'PP')}.</p>;
//     }
//     return (
//         <div >
//             <style>{`.style_root__Vd1RM { --rdp-background-color: #ff0000; --rdp-accent-color: #ff0000;}`}</style>
//              <DayPicker
//       mode="single"
//       classNames={classNames}
//       selected={selected}
//       onSelect={setSelected}
//       footer={footer}
//     />
//         </div>
//     );
// };

// export default AppointmentBanner;