import React from 'react';
import Sider from '../../../Layout/SiderComponent';
import Header from '../../../Layout/HeaderComponent';
import Content from './ReviewContent';
import Footer from '../../../Layout/Footer';
import { Layout } from 'antd';

function Reviews() {
    return (

        <Layout style={{ minHeight: '100vh'}} theme = "light">

            <Sider />

        <Layout className="site-layout">

            <Header />
            <Content />
            <Footer />

        </Layout>
        </Layout>

    )
}

export default Reviews;

