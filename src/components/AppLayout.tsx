import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';
import PeopleTable from './PeopleTable';

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ 
          padding: '24px', 
          background: '#fff', 
          transition: 'margin-left 0.3s ease', // Smooth transition when sidebar is collapsed
        }}>
          <PeopleTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
