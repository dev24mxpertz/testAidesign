// import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, MenuOutlined, } from '@ant-design/icons';
// import { Layout, Menu, theme, Button } from 'antd';
// import React, { useEffect, useState } from 'react';
// import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Chat from '../Pages/Chat';
// import ChatBotScreen from '../Pages/ChatBotScreen';
// import CompanyProfile from '../Pages/Company_Profile';
// import Dashboard from '../Pages/Dashboard';
// import EmployeePage from '../Pages/EmployeePage';
// import ModalCreate from '../Pages/Modal_Create';
// import Notifications from '../Pages/Notification';
// import Payment from '../Pages/Payment';
// import Setting from '../Pages/Setting';
// import AddUser from '../Pages/AddUser';
// import '../Styles/chat.css';
// import '../Styles/dash_board.css';
// import '../Styles/employeePage.css';
// import '../Styles/modalCreate.css';
// import '../Styles/payment.css';
// import DashboardHeader from './Dashboard_Header';
// import ChatBotScreen2 from '../Pages/ChatBotScreen_2';
// import ModalChat from '../Pages/Modal_Chat';
// import ChatBoat_codeGenerate from '../Pages/ChatBoat_codeGenerate';

// const { Header, Content, Sider } = Layout;
// function getItem(label, key, icon, children) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     };
// }
// const items = [
//     getItem('Dashboard', '1', <PieChartOutlined />),
//     getItem('Company Profile', '2', <DesktopOutlined />),
//     getItem('Model Create Page', '3', <UserOutlined />),
//     getItem('Employee Page', '4', <TeamOutlined />),
//     getItem('Payment', '5', <FileOutlined />),
//     getItem('Chat', '6', <PieChartOutlined />),
//     getItem('Chatbot', '7', <DesktopOutlined />),
//     getItem('Settings', '8', <UserOutlined />),
//     getItem('Notification', '9', <TeamOutlined />),
//     getItem('Logout', '10', <FileOutlined />),
//     getItem('AddUser','11',<TeamOutlined />)
// ];

// const DashBoardlayout = () => {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const getSelectedMenuItem = () => {
//         const paths = {
//             '/dashboard/': '1',
//             '/dashboard/Profile': '2',
//             '/dashboard/Modal': '3',
//             '/dashboard/EmloyeeSettings': '4',
//             '/dashboard/Payment': '5',
//             '/dashboard/Chat': '6',
//             '/dashboard/ChatBot': '7',
//             '/dashboard/Setting': '8',
//             '/dashboard/Notifications': '9',
//             '/': '10',
//             '/dashboard/AddUser': '11',
//         };

//         const currentPath = location.pathname;
//         for (const key in paths) {
//             if (currentPath.match(key)) {
//                 return paths[key];
//             }
//         }
//         return '1';
//     };

//     const [selectedMenuItem, setSelectedMenuItem] = useState('1');
//     useEffect(() => {
//         const initialMenuItem = getSelectedMenuItem();
//         setSelectedMenuItem(initialMenuItem);
//     }, []);
//     useEffect(() => {
//         handleMenuClick(selectedMenuItem);
//     }, []);
//     const handleMenuClick = (key) => {
//         setSelectedMenuItem(key);
//         const paths = {
//             '1': '/dashboard/',
//             '2': '/dashboard/Profile',
//             '3': '/dashboard/Modal',
//             '4': '/dashboard/EmloyeeSettings',
//             '5': '/dashboard/Payment',
//             '6': '/dashboard/Chat',
//             '7': '/dashboard/ChatBot',
//             '8': '/dashboard/Setting',
//             '9': '/dashboard/Notifications',
//             '10': '/',
//             '11':'/dashboard/AddUser'
//         };
//         setToggleCollapsed(true);
//         navigate(paths[key]);
//     };
//     const [collapsed, setCollapsed] = useState(false);
//     const [newToggleCollapsed, setToggleCollapsed] = useState(true);
//     const toggleCollapsedMenu = () => {
//         setToggleCollapsed(!newToggleCollapsed);
//     };
//     const { token: { transparent }, } = theme.useToken();
//     const getMenuHeading = () => {
//         const selectedItem = items.find(item => item.key === selectedMenuItem);
//         return selectedItem ? selectedItem.label : '';
//     };
//     return (
//         <div className='dashbord-bg'>
//             <Layout style={{ minHeight: '100vh' }} className='bg-transparent'>
//                 <Header className='bg-transparent p-0'>
//                     <div className='d-flex justify-content-between align-items-center header-align'>
//                         <Button className='d-md-none toggle-sider' icon={collapsed ? 'menu-unfold' : ''} onClick={toggleCollapsedMenu} ><MenuOutlined /></Button>
//                         <DashboardHeader />
//                     </div>
//                 </Header>
//                 <Layout>
//                     <Sider style={{ paddingTop: '35px 15px;' }} className={`bg-transparent dash-slider ${newToggleCollapsed ? 'd-none' : "d-block"} d-md-block`} collapsible collapsed={collapsed} onCollapse={(value) => {
//                         if (collapsed) {
//                             setCollapsed(value);
//                         } else {
//                             setToggleCollapsed(true);
//                         }
//                     }}>
//                         <Menu style={{ marginTop: '35px 10px' }} className='bg-transparent' theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({ key }) => handleMenuClick(key)} />
//                     </Sider>
//                     <Content style={{ margin: '16xp 16px', padding: '35px', color: 'white', background: transparent }}>
//                         <div className='Layout_wrapper'>
//                             <div className='Layout_heading'>
//                                 <h1>{getMenuHeading()}</h1>
//                             </div>
//                             <div className='p-2 p-md-4'>
//                                 {selectedMenuItem === '1' && (
//                                     <Routes>
//                                         <Route path="/" element={<Dashboard />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '2' && (
//                                     <Routes>
//                                         <Route path="/Profile" element={<CompanyProfile />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '3' && (
//                                     <Routes>
//                                         <Route path="/Modal" element={<ModalCreate />} />
//                                         <Route path='/Modal/Modalchat' element={<ModalChat />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '4' && (
//                                     <Routes>
//                                         <Route path="/EmloyeeSettings" element={<EmployeePage />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '5' && (
//                                     <Routes>
//                                         <Route path="/Payment" element={<Payment />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '6' && (
//                                     <Routes>
//                                         <Route path="/Chat" element={<Chat />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '7' && (
//                                     <Routes>
//                                         <Route path="/ChatBot" element={<ChatBotScreen />} />
//                                         <Route path='/ChatBot/chat' element={<ChatBotScreen2 />} />
//                                         <Route path='/ChatBot/chat/CodeGenerate' element={<ChatBoat_codeGenerate />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '8' && (
//                                     <Routes>
//                                         <Route path="/Setting" element={<Setting />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '9' && (
//                                     <Routes>
//                                         <Route path="/Notifications" element={<Notifications />} />
//                                     </Routes>
//                                 )}
//                                 {selectedMenuItem === '10' && <Navigate to="/" />}
//                                 {selectedMenuItem === '11' && (
//                                     <Routes>
//                                         <Route path="/AddUser" element={<AddUser />} />
//                                     </Routes>
//                                 )}
//                             </div>
//                         </div>
//                     </Content>
//                 </Layout>
//             </Layout>
//         </div>
//     );
// };

// export default DashBoardlayout;

import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Chat from '../Pages/Chat';
import ChatBotScreen from '../Pages/ChatBotScreen';
import CompanyProfile from '../Pages/Company_Profile';
import Dashboard from '../Pages/Dashboard';
import EmployeePage from '../Pages/EmployeePage';
import ModalCreate from '../Pages/Modal_Create';
import Notifications from '../Pages/Notification';
import Payment from '../Pages/Payment';
import Setting from '../Pages/Setting';
import AddUser from '../Pages/AddUser';
import DashboardHeader from './Dashboard_Header';
import ChatBotScreen2 from '../Pages/ChatBotScreen_2';
import ModalChat from '../Pages/Modal_Chat';
import ChatBoat_codeGenerate from '../Pages/ChatBoat_codeGenerate';
import UserDetails from '../Pages/UserDetails';
import AllUser from '../Pages/AllUser';


import '../Styles/chat.css';
import '../Styles/dash_board.css';
import '../Styles/employeePage.css';
import '../Styles/modalCreate.css';
import '../Styles/payment.css';
import UserPayment from '../Pages/UserPayment';
import AlluserPayment from '../Pages/AlluserPayment';
import PlanDetail from '../Pages/PlanDetail';
import ViewallQandA from '../Pages/ViewallQandA';

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}

const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Model Create Page', '2', <UserOutlined />),
    getItem('Chat', '3', <PieChartOutlined />),
    getItem('Chatbot', '4', <DesktopOutlined />),
    getItem('AddUserRole', '5', <TeamOutlined />),
    getItem('Employee Page', '6', <TeamOutlined />),
    getItem('Payment', '7', <FileOutlined />),
    getItem('Notification', '8', <TeamOutlined />),
    getItem('Company Profile', '9', <DesktopOutlined />),
    getItem('Settings', '10', <UserOutlined />),
    getItem('User Details', '12', <UserOutlined />),
    getItem('AllUser', '13', <TeamOutlined />),
    getItem('Payment detail', '14', <TeamOutlined />),
    getItem('Logout', '11', <FileOutlined />),
];

const DashBoardlayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userRole = useSelector(state => state.auth.role);
    // console.log('userRole:', userRole);

    const [selectedMenuItem, setSelectedMenuItem] = useState('1');

    useEffect(() => {
        const initialMenuItem = getSelectedMenuItem();
        setSelectedMenuItem(initialMenuItem);
    }, []);

    useEffect(() => {
        handleMenuClick(selectedMenuItem);
    }, []);

    const handleMenuClick = (key) => {
        setSelectedMenuItem(key);
        const paths = {
            '1': '/dashboard/',
            '2': '/dashboard/Modal',
            '3': '/dashboard/Chat',
            '4': '/dashboard/ChatBot',
            '5': '/dashboard/AddUser',
            '6': '/dashboard/EmloyeeSettings',
            '7': '/dashboard/Payment',
            '8': '/dashboard/Notifications',
            '9': '/dashboard/Profile',
            '10': '/dashboard/Setting',
            '12': '/dashboard/UserDetails',
            '13': '/dashboard/AllUser',
            '14': '/dashboard/Paymentdetail',
            '11': '/',
            
        };
        navigate(paths[key]);
    };

    const [collapsed, setCollapsed] = useState(false);
    const [newToggleCollapsed, setToggleCollapsed] = useState(false);

    const toggleCollapsedMenu = () => {
        setToggleCollapsed(!newToggleCollapsed);
    };

    const getMenuHeading = () => {
        const selectedItem = items.find(item => item.key === selectedMenuItem);
        return selectedItem ? selectedItem.label : '';
    };

    // Define getSelectedMenuItem function to determine the selected menu item based on the current URL path
    const getSelectedMenuItem = () => {
        const paths = {
            '/dashboard/': '1',
            '/dashboard/Modal': '2',
            '/dashboard/Chat': '3',
            '/dashboard/ChatBot': '4',
            '/dashboard/AddUser': '5',
            '/dashboard/EmloyeeSettings': '6',
            '/dashboard/Payment': '7',
            '/dashboard/Notifications': '8',
            '/dashboard/Profile': '9',
            '/dashboard/Setting': '10',
            '/dashboard/UserDetails': '12',
            '/dashboard/AllUser': '13',
            '/dashboard/Paymentdetail': '14',
            '/': '11',
        };

        const currentPath = location.pathname;
        for (const key in paths) {
            if (currentPath.match(key)) {
                return paths[key];
            }
        }
        return '1';
    };

    return (
        <div className='dashbord-bg'>
            <Layout style={{ minHeight: '100vh' }} className='bg-transparent'>
                <Header className='bg-transparent p-0'>
                    <div className='d-flex justify-content-between align-items-center header-align'>
                        <Button className='d-md-none toggle-sider' icon={collapsed ? 'menu-unfold' : ''} onClick={toggleCollapsedMenu}><MenuOutlined /></Button>
                        <DashboardHeader />
                    </div>
                </Header>
                <Layout>
                    <Sider style={{ paddingTop: '35px 15px' }} className={`bg-transparent dash-slider ${newToggleCollapsed ? 'd-none' : "d-block"} d-md-block`} collapsible collapsed={collapsed} onCollapse={(value) => {
                        if (collapsed) {
                            setCollapsed(value);
                        } else {
                            setToggleCollapsed(true);
                        }
                    }}>
                        <Menu style={{ marginTop: '35px 10px' }} className='bg-transparent' theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={({ key }) => handleMenuClick(key)}>
                            {items.map(item => {
                                if ((userRole === 'admin' && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',].includes(item.key)) ||
                                    (userRole === 'manager' && ['1', '3', '4', '6', '7', '8', '10', '11'].includes(item.key)) ||
                                    (userRole === 'employee' && ['1', '3', '4', '8', '10', '12', '11'].includes(item.key)) ||
                                    (userRole === 'user' && ['1', '3', '4', '8', '10', '11'].includes(item.key)) ||
                                    (userRole === 'superadmin' && ['1', '13', '8', '9', '10', '14','11'].includes(item.key))
                                ) {
                                    return (
                                        <Menu.Item key={item.key} icon={item.icon}>
                                            {item.label}
                                        </Menu.Item>
                                    );
                                } else {
                                    return null; // Do not render the item
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Content style={{ margin: '16xp 16px', padding: '35px', color: 'white', background: 'transparent' }}>
                        <div className='Layout_wrapper'>
                            <div className='Layout_heading'>
                                <h1>{getMenuHeading()}</h1>
                            </div>
                            <div className='p-2 p-md-4'>
                                {/* Add routes for the selected menu item */}
                                {selectedMenuItem === '1' && (
                                    <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '2' && (
                                    <Routes>
                                        <Route path="/Modal" element={<ModalCreate />} />
                                        <Route path='/Modal/Modalchat' element={<ModalChat />} />
                                        <Route path='/Modal/ViewallQandA' element={<ViewallQandA />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '3' && (
                                    <Routes>
                                        <Route path="/Chat" element={<Chat />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '4' && (
                                    <Routes>
                                        <Route path="/ChatBot/chat" element={<ChatBotScreen />} />
                                        <Route path='/ChatBot' element={<ChatBotScreen2 />} />
                                        <Route path='/ChatBot/chat/CodeGenerate' element={<ChatBoat_codeGenerate />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '5' && (
                                    <Routes>
                                        <Route path="/AddUser" element={<AddUser />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '6' && (
                                    <Routes>
                                        <Route path="/EmloyeeSettings" element={<EmployeePage />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '7' && (
                                    <Routes>
                                        <Route path="/Payment" element={<Payment />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '8' && (
                                    <Routes>
                                        <Route path="/Notifications" element={<Notifications />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '9' && (
                                    <Routes>
                                        <Route path="/Profile" element={<CompanyProfile />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '10' && (
                                    <Routes>
                                        <Route path="/Setting" element={<Setting />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '11' && <Navigate to="/" />}
                                {selectedMenuItem === '12' && (
                                    <Routes>
                                        <Route path="/UserDetails" element={<UserDetails />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '13' && (
                                    <Routes>
                                        <Route path="/AllUser" element={<AllUser />} />
                                        <Route path='/AllUser/UserPayment' element={<UserPayment />} />
                                    </Routes>
                                )}
                                {selectedMenuItem === '14' && (
                                    <Routes>
                                        <Route path="/Paymentdetail" element={<AlluserPayment />} />
                                        <Route path="/Paymentdetail/PlanDetail" element={<PlanDetail />} />
                                    </Routes>
                                )}
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default DashBoardlayout;



// import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
// import { Layout, Menu, Button } from 'antd';
// import { useSelector } from 'react-redux';
// import React, { useEffect, useState } from 'react';
// import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Chat from '../Pages/Chat';
// import ChatBotScreen from '../Pages/ChatBotScreen';
// import CompanyProfile from '../Pages/Company_Profile';
// import Dashboard from '../Pages/Dashboard';
// import EmployeePage from '../Pages/EmployeePage';
// import ModalCreate from '../Pages/Modal_Create';
// import Notifications from '../Pages/Notification';
// import Payment from '../Pages/Payment';
// import Setting from '../Pages/Setting';
// import AddUser from '../Pages/AddUser';
// import DashboardHeader from './Dashboard_Header';
// import ChatBotScreen2 from '../Pages/ChatBotScreen_2';
// import ModalChat from '../Pages/Modal_Chat';
// import ChatBoat_codeGenerate from '../Pages/ChatBoat_codeGenerate';

// import '../Styles/chat.css';
// import '../Styles/dash_board.css';
// import '../Styles/employeePage.css';
// import '../Styles/modalCreate.css';
// import '../Styles/payment.css';

// const { Header, Content, Sider } = Layout;

// function getItem(label, key, icon) {
//     return {
//         key,
//         icon,
//         label,
//     };
// }

// const items = [
//     getItem('Dashboard', '1', <PieChartOutlined />),
//     getItem('Model Create Page', '2', <UserOutlined />),
//     getItem('Chat', '3', <PieChartOutlined />),
//     getItem('Chatbot', '4', <DesktopOutlined />),
//     getItem('AddUserRole', '5', <TeamOutlined />),
//     getItem('Employee Page', '6', <TeamOutlined />),
//     getItem('Payment', '7', <FileOutlined />),
//     getItem('Notification', '8', <TeamOutlined />),
//     getItem('Company Profile', '9', <DesktopOutlined />),
//     getItem('Settings', '10', <UserOutlined />),
//     getItem('Logout', '11', <FileOutlined />),
// ];

// const DashBoardlayout = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const userRole = useSelector(state => state.auth.role);

//     const getSelectedMenuItem = () => {
//         const paths = {
//             '/dashboard/': '1',
//             '/dashboard/Modal': '2',
//             '/dashboard/Chat': '3',
//             '/dashboard/ChatBot': '4',
//             '/dashboard/AddUser': '5',
//             '/dashboard/EmployeeSettings': '6',
//             '/dashboard/Payment': '7',
//             '/dashboard/Notifications': '8',
//             '/dashboard/Profile': '9',
//             '/dashboard/Setting': '10',
//             '/': '11',
//         };

//         const currentPath = location.pathname;
//         for (const key in paths) {
//             if (currentPath.match(key)) {
//                 return paths[key];
//             }
//         }
//         return '1';
//     };

//     const [selectedMenuItem, setSelectedMenuItem] = useState('1');

//     useEffect(() => {
//         const initialMenuItem = getSelectedMenuItem();
//         setSelectedMenuItem(initialMenuItem);
//     }, []);

//     useEffect(() => {
//         handleMenuClick(selectedMenuItem);
//     }, []);

//     const handleMenuClick = (key) => {
//         setSelectedMenuItem(key);
//         const paths = {
//             '1': '/dashboard/',
//             '2': '/dashboard/Modal',
//             '3': '/dashboard/Chat',
//             '4': '/dashboard/ChatBot',
//             '5': '/dashboard/AddUser',
//             '6': '/dashboard/EmployeeSettings',
//             '7': '/dashboard/Payment',
//             '8': '/dashboard/Notifications',
//             '9': '/dashboard/Profile',
//             '10': '/dashboard/Setting',
//             '11': '/',
//         };
//         navigate(paths[key]);
//     };

//     const [collapsed, setCollapsed] = useState(false);
//     const [newToggleCollapsed, setToggleCollapsed] = useState(true);

//     const toggleCollapsedMenu = () => {
//         setToggleCollapsed(!newToggleCollapsed);
//     };

//     const getMenuHeading = () => {
//         const selectedItem = items.find(item => item.key === selectedMenuItem);
//         return selectedItem ? selectedItem.label : '';
//     };

//     let componentToRender;
//     if (userRole === 'manager') {
//         if (selectedMenuItem === '6') {
//             componentToRender = <EmployeePage />;
//         } else if (selectedMenuItem === '7') {
//             componentToRender = <Payment />;
//         } else if (selectedMenuItem === '3') {
//             componentToRender = <Chat />;
//         } else if (selectedMenuItem === '4') {
//             componentToRender = <ChatBotScreen />;
//         } else if (selectedMenuItem === '10') {
//             componentToRender = <Setting />;
//         } else if (selectedMenuItem === '8') {
//             componentToRender = <Notifications />;
//         } else if (selectedMenuItem === '11') {
//             componentToRender = <Navigate to="/" />;
//         }
//     } else if (userRole === 'employee') {
//         if (selectedMenuItem === '3') {
//             componentToRender = <Chat />;
//         } else if (selectedMenuItem === '4') {
//             componentToRender = <ChatBotScreen />;
//         } else if (selectedMenuItem === '8') {
//             componentToRender = <Notifications />;
//         } else if (selectedMenuItem === '10') {
//             componentToRender = <Setting />;
//         } else if (selectedMenuItem === '11') {
//             componentToRender = <Navigate to="/" />;
//         }
//     } else {
//         // Default role (admin or other roles)
//         if (selectedMenuItem === '1') {
//             componentToRender = <Dashboard />;
//         } else if (selectedMenuItem === '2') {
//             componentToRender = <ModalCreate />;
//         } else if (selectedMenuItem === '3') {
//             componentToRender = <Chat />;
//         } else if (selectedMenuItem === '4') {
//             componentToRender = <ChatBotScreen />;
//         } else if (selectedMenuItem === '5') {
//             componentToRender = <AddUser />;
//         } else if (selectedMenuItem === '6') {
//             componentToRender = <EmployeePage />;
//         } else if (selectedMenuItem === '7') {
//             componentToRender = <Payment />;
//         } else if (selectedMenuItem === '8') {
//             componentToRender = <Notifications />;
//         } else if (selectedMenuItem === '9') {
//             componentToRender = <CompanyProfile />;
//         } else if (selectedMenuItem === '10') {
//             componentToRender = <Setting />;
//         } else if (selectedMenuItem === '11') {
//             componentToRender = <Navigate to="/" />;
//         }
//     }

//     return (
//         <div className='dashbord-bg'>
//             <Layout style={{ minHeight: '100vh' }} className='bg-transparent'>
//                 <Header className='bg-transparent p-0'>
//                     <div className='d-flex justify-content-between align-items-center header-align'>
//                         <Button className='d-md-none toggle-sider' icon={collapsed ? 'menu-unfold' : ''} onClick={toggleCollapsedMenu} ><MenuOutlined /></Button>
//                         <DashboardHeader />
//                     </div>
//                 </Header>
//                 <Layout>
//                     <Sider style={{ paddingTop: '35px 15px;' }} className={`bg-transparent dash-slider ${newToggleCollapsed ? 'd-none' : "d-block"} d-md-block`} collapsible collapsed={collapsed} onCollapse={(value) => {
//                         if (collapsed) {
//                             setCollapsed(value);
//                         } else {
//                             setToggleCollapsed(true);
//                         }
//                     }}>
//                         <Menu style={{ marginTop: '35px 10px' }} className='bg-transparent' theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={({ key }) => handleMenuClick(key)} />
//                     </Sider>
//                     <Content style={{ margin: '16xp 16px', padding: '35px', color: 'white', background: "transparent" }}>
//                         <div className='Layout_wrapper'>
//                             <div className='Layout_heading'>
//                                 <h1>{getMenuHeading()}</h1>
//                             </div>
//                             <div className='p-2 p-md-4'>
//                                 {componentToRender}
//                             </div>
//                         </div>
//                     </Content>
//                 </Layout>
//             </Layout>
//         </div>
//     );
// };

// export default DashBoardlayout;
