import React, { ReactNode, FC } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ButtonProps {
    children: ReactNode;
    onClick: () => any;
    icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, onClick, icon }) => {
    return(
        <div>
            <button className="flex items-center gap-3 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base text-nowrap">
                {icon === 'arrowRight' ? <ArrowRightIcon className="h-5 w-5" /> : icon}
                {children}
            </button>
        </div>
    )
}