import React from 'react';

type Props = {
    children: React.ReactNode;
}

const ActionBtn = ({children}: Props) => {
  return (
    <div>
        <button
         className='font-robotoCondensed bg-gradient-to-r from-secondary-100 to-secondary-200 px-2 py-2 text-white text-[10px] w-28'>
            {children}
        </button>
    </div>
  )
}

export default ActionBtn