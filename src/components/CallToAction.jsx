import React from 'react';

const CallToAction = () => {
    return (
        <div className='fixed right-[120px] bottom-1 z-20'>
            <button
                className='h-12 px-4 py-2 font-semibold text-lg rounded-full bg-red-600 text-white'
                aria-label="Call to Action Button"
            >
                Buy Membership
            </button>
        </div>
    );
};

export default CallToAction;
