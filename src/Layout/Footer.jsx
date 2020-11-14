import React from 'react';
import 'antd/dist/antd.css';
import '../Components/DashboardComponents/index1.css';
import '../Components/DashboardComponents/Dashboard/Dashboard.css';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function FooterComponent () {
  
    return (
     
        <Footer style={{ textAlign: 'center' }}>Copyrights AudioBooks ©2020</Footer>
      
    );
  }

