import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

export default function Page() {
    return(
        <div className="flex flex-row">
            <SideNav/>
            <div className="py-32 px-32">
                <p>Dashboard Page</p>
            </div>
        </div>
    )
}