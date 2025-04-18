import { FC } from 'react';
import '../css/Sidebar.css';

interface Props {
    isVisible: boolean
    toggleSidebarView: Function
}

export const Sidebar: FC<Props> = ({
    isVisible,
    toggleSidebarView
}) => {
    return (
        <div className={isVisible ? "sidebar visible" : "sidebar"}>
            <div className='closeButton' onClick={() => toggleSidebarView()}>X</div>
            <p>this is the sidebar</p>
        </div>
    )
}