import React from 'react';

const Card = ({ title, children, counter }) => {
  return (
    <div className="bg-white dark:bg-gray-100 shadow-md rounded-lg p-6">
      {title && (
        <h2 className="font-semibold text-gray-900 mb-4">
          {title}
        </h2>
      )}
      <div className="text-gray-900<HandHelping />">{children}</div>
      {counter !== undefined && (
        <div className="bg-gray-200 dark:bg-gray-300 roDashboardunded-full overflow-hidden h-4">
          <div className="bg-blue-600 dark:bg-blue-400 h-full text-xs text-center text-white rounded-full"
           style={{width:`${counter}%`}}>{counter}%</div>
        </div>
           
      )}
    </div>
  );
};

export default Card;