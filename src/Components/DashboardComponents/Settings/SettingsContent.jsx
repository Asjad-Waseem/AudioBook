import React from 'react';
import 'antd/dist/antd.css';
import '../index1.css';
import '../Dashboard/Dashboard.css';
import { Layout, Divider, Row, Col, Typography, Form, Input, Button, Breadcrumb } from 'antd';
import MediaQuery from "react-responsive";
// import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../../globalStateContext';

const { Content } = Layout;
const { Title, Text} = Typography;

function SettingsContent () {

const [{collapsed1}] = useGlobalState()

// const history = useHistory();
  
// const onCollapse = () => {

// setGlobalState({collapsed1: !collapsed1})

// }

const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return (

<div className = "container col-md-10" style = {{marginLeft: "5px"}}>

<Content className = "site-layout-background SettingsForm" style={{ margin: '25px 0px', paddingTop: "10px" }}>
<Breadcrumb style={{ margin: '16px 0' }}>          

</Breadcrumb>     

<Col>
<Title level={4}  style={{
margin: '24px 16px',
borderRadius:'7px'

}}>Basic Profile </Title>
<Divider/>

<Form

name="basic"
initialValues={{
remember: true,
}}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
>
<Row>

{collapsed1 === true ?

<MediaQuery minDeviceWidth = {450}>

<Col span={8}>
 <Text style={{marginLeft:'30px',fontSize:'12pt'}} >First Name</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="firstname" 
>
<Input style={{fontSize:'16pt'}} placeholder = "Terry"/>
</Form.Item>

<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Email</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="email"
>
<Input style={{fontSize:'16pt'}} placeholder = "adrian_shp@yahoo.com"/>
</Form.Item>
</Col>

<Col span={8}>
 <Text style={{marginLeft:'30px',fontSize:'12pt'}} >Last Name</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="lastname"
>
<Input style={{fontSize:'16pt'}} placeholder = "TerryPublisher"/>
</Form.Item>

<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Username</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="username"
>
<Input style={{fontSize:'16pt'}} placeholder = "terrypublisher"/>
</Form.Item>
</Col>

</MediaQuery>

: null}

{collapsed1 === true ?

<MediaQuery maxDeviceWidth = {449}>

<Row span={2}>
 <Text style={{marginLeft:'30px',fontSize:'12pt'}} >First Name</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="firstname"
>
<Input style={{fontSize:'16pt'}} placeholder = "Terry"/>
</Form.Item>
</Row>

<Row span={2}>
 <Text style={{marginLeft:'30px',fontSize:'12pt'}} >Last Name</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="lastname"
>
<Input style={{fontSize:'16pt'}} placeholder = "TerryPublisher"/>
</Form.Item>
</Row>

<Row span={2}>
 <Text style={{marginLeft:'30px',fontSize:'12pt'}} >Email</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="email"
>
<Input style={{fontSize:'16pt'}} placeholder = "adrian_shp@yahoo.com"/>
</Form.Item>
</Row>

<Row span={2}>
 <Text style={{marginLeft:'30px',fontSize:'12pt'}} >Username</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="username"
>
<Input style={{fontSize:'16pt'}} placeholder = "terrypublisher"/>
</Form.Item>
</Row>

</MediaQuery>

: null}

{collapsed1 === false ?

<MediaQuery minDeviceWidth = {600}>

<Col span={8}>
<Text style={{marginLeft:'30px',fontSize:'12pt'}} >First Name</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="firstname" 
>
<Input style={{fontSize:'16pt'}} placeholder = "Terry"/>
</Form.Item>

<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Email</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="email"
>
<Input style={{fontSize:'16pt'}} placeholder = "adrian_shp@yahoo.com"/>
</Form.Item>
</Col>

<Col span={8}>
<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Last Name</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="lastname"
>
<Input style={{fontSize:'16pt'}} placeholder = "TerryPublisher"/>
</Form.Item>

<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Username</Text>
<Form.Item
style={{marginLeft:'20px'}}
name="username"
>
<Input style={{fontSize:'16pt'}} placeholder = "terrypublisher"/>
</Form.Item>
</Col>

</MediaQuery>

: null}

{collapsed1 === false ?

<MediaQuery maxDeviceWidth = {599}>

<Row span={2}>
<Text style={{marginLeft:'30px',fontSize:'12pt'}} >First Name</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="firstname"
>
<Input style={{fontSize:'16pt'}} placeholder = "Terry"/>
</Form.Item>
</Row>

<Row span={2}>
<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Last Name</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="lastname"
>
<Input style={{fontSize:'16pt'}} placeholder = "TerryPublisher"/>
</Form.Item>
</Row>

<Row span={2}>
<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Email</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="email"
>
<Input style={{fontSize:'16pt'}} placeholder = "adrian_shp@yahoo.com"/>
</Form.Item>
</Row>

<Row span={2}>
<Text style={{marginLeft:'30px',fontSize:'12pt'}} >Username</Text>
<Form.Item
style={{marginLeft:'20px', marginRight: "20px"}}
name="username"
>
<Input style={{fontSize:'16pt'}} placeholder = "terrypublisher"/>
</Form.Item>
</Row>

</MediaQuery>

: null}

</Row>

<Divider/>

<Button className = "BUTTON" style={{marginLeft:'20px',marginBottom:'20px', backgroundColor: "#1665D8", color: "white", height: "45px"}} >SAVE SETTINGS</Button>
</Form>

</Col>

</Content>

</div>

    )
}

export default SettingsContent;
