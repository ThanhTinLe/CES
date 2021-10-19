import React, { useState } from 'react'
import { Route } from 'react-router'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function HomeTemplate(props) {

    const [state, setstate] = useState({ collapsed: false })


    const onCollapse = collapsed => {
        console.log(collapsed);
        setstate({ collapsed });
    };

    const { collapsed } = state;


    return <Route exact path={props.path} render={(propsRoute) => {
        return <div>

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} width="250" onCollapse={onCollapse}>
                    <div className="logo text-center" >
                        <img src="./Access/LOGO.png" alt="logo" width="80px" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<DesktopOutlined />}>
                            <NavLink to="/home">Trang chủ</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <NavLink to="/info">Hồ sơ của tôi</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<LogoutOutlined />}>
                            <NavLink to="/">Đăng xuất</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0, height: 84 }} >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <h3 className="text-white">Charity Expense Statitic</h3>
                        </div>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ minHeight: 360 }}>
                            <props.component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Chúng tôi mang đến sự minh bạch trong hoạt động từ thiện.</Footer>
                </Layout>
            </Layout>

        </div>
    }} />
}
