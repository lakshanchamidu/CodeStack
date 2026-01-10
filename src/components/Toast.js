import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type = 'success', onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-900' : 'bg-red-900';
  const icon = type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />;

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-50 animate-slideIn max-w-md">
      <div className={`${bgColor} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-start gap-4`}>
        <div className="text-2xl mt-1 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-lg mb-1">
            {type === 'success' ? 'Success!' : 'Error!'}
          </p>
          <p className="text-sm opacity-95 leading-relaxed">
            {message}
          </p>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors flex-shrink-0"
        >
          <FaTimes className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
