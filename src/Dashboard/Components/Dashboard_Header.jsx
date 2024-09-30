import { SearchOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import React from 'react';
import ProfileComponent from './UserProfile';

function DashboardHeader() {
    const suffix = (
        <SearchOutlined />
    );
    return (
        <div className='dash-head d-flex'>
            <div className='Logo_header'>
                <h4>Dashboard</h4>
            </div>
            <div className='dashboard-header'>
                <div className="header-search-bar">
                    {/* <Search
                        placeholder="Search"
                        allowClear
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={''}
                    /> */}
                </div>
                <div>
                    <ProfileComponent />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;