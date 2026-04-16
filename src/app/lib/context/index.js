import React from 'react';
import TimeLineContextProvider from './TimeLineContext';

const Providers = ({children}) => {
    return (
        <TimeLineContextProvider>
          {children}
        </TimeLineContextProvider>
    );
};

export default Providers;