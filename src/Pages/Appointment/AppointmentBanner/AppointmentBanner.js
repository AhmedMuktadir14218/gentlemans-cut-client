import React from 'react';

import { DayPicker } from 'react-day-picker';
import AppointmentImg from '../../../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg';
const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    const css = {"--rdp-cell-size": "40px",
    "--rdp-accent-color": "#0000ff",
    "--rdp-background-color": "#ff0000",
    /* Switch to dark colors for dark themes */
    "--rdp-accent-color-dark": "#3003e1",
    "--rdp-background-color-dark": "#ff0000",
    /* Outline border for focused elements */
    "--rdp-outline": "2px solid var(--rdp-accent-color)",
    /* Outline border for focused and selected elements */
    "--rdp-outline-selected": "2px solid rgba(0, 0, 0, 0.75)"}
    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={AppointmentImg} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <div style={css} className='mr-6 sm:w-full'>
                        <DayPicker 
                            mode='single'
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