import React from 'react';
import "./AppointmentBanner.css"

import { ClassNames, DayPicker } from 'react-day-picker';
import AppointmentImg from '../../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg';
import styles from 'react-day-picker/dist/style.module.css';
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    const classNames: ClassNames = {
        ...styles,
        head: 'style_root__Vd1RM'
      };
 
    const SizeNav={
       
        "color":"white",
        "font-family": "'Roboto Condensed', sans-serif"
         
    
    };
    
    return (
        <header style={SizeNav} className='my-6'>
            <div className="hero">
                <div className="hero-content h_padding flex-col lg:flex-row-reverse">
                    <img src={AppointmentImg} alt=" " className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='xl:mr-40 lg:mr-10 md:mr-6 sm:w-full'>
<style>{`.style_root__Vd1RM { --rdp-background-color: #ff0000; --rdp-accent-color: #ff0000 !important;}`}</style> 
                        <DayPicker  
                            mode='single'
                            classNames={classNames}
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                          
                        />
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;

