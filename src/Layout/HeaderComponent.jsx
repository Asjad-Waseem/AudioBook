import React from 'react';
import 'antd/dist/antd.css';
import '../Components/DashboardComponents/index1.css';
import '../Components/DashboardComponents/Dashboard/Dashboard.css';
import { Layout } from 'antd';
import {
  MenuFoldOutlined,
} from '@ant-design/icons';
import MediaQuery from "react-responsive";
// import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../globalStateContext';

const { Header } = Layout;

export default function HeaderComponent () {

const [{collapsed1}, setGlobalState] = useGlobalState()

// const history = useHistory();
  
const onCollapse = () => {

setGlobalState({collapsed1: !collapsed1})

}

    return (
     
        <>

        <MediaQuery minDeviceWidth = {481}>

        <Header className="site-layout-background" style={{ fontWeight: "bold"}}>

        <img src = {require("../Assets/Images/Rectangle.png")} alt = "none" style = {{display: "inline", marginLeft: "-30px"}}/>

        <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p className = "class" style = {{marginTop: "-47px", marginLeft: "20px"}}>Credits</p>
          <p className = "class" style = {{marginTop: "-10px", marginLeft: "20px"}}>Remaining</p>
          </div>

          <p className = "one">1</p>

       
        <MediaQuery minDeviceWidth = {575}>
        <p className = "MyAccount" style = {{marginTop: "-35px", marginRight: "20px"}}>My Account</p>
        </MediaQuery>

        {collapsed1 === true ?
        <MediaQuery maxDeviceWidth = {574}>
        <i className="fas fa-user-alt" style = {{float: "right", marginTop: "-40px", marginRight: "20px"}}></i>
        </MediaQuery>

        : 

        collapsed1 === false ?

        <MediaQuery minDeviceWidth = {500} maxDeviceWidth = {574}>
        <i className="fas fa-user-alt" style = {{float: "right", marginTop: "-40px", marginRight: "20px"}}></i>
        </MediaQuery>

        : null}

        <MediaQuery minDeviceWidth = {500}>

        <img src = {require("../Assets/Images/Arrow.png")} alt = "none" style = {{float: "right", marginTop: "-40px", marginRight: "-30px"}}/>

        </MediaQuery>

        {collapsed1 === true ?
        <MediaQuery minDeviceWidth = {360} maxDeviceWidth = {574}>
        <img src = {require("../Assets/Images/Arrow.png")} alt = "none" style = {{float: "right", marginTop: "-40px", marginRight: "-30px"}}/>
        </MediaQuery>

        : null}     

        </Header>

        </MediaQuery>

        <MediaQuery maxDeviceWidth = {480}>

        <Header className="site-layout-background" style={{ fontWeight: "bold"}}>

          {/* <p>Hi</p> */}

        <div>

          {collapsed1 === true ? 
          
          <MenuFoldOutlined style = {{marginLeft: "-30px"}} onClick = {onCollapse}/>

          : null}

        <img src = {require("../Assets/Images/Rectangle.png")} 
        
        style = {collapsed1 ? {marginLeft: "10px"} : {marginLeft: "-30px"}} alt = "none"/>

        </div>

        <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
        <p className = "class" 
        
        style = {collapsed1 ? {marginTop: "-47px", marginLeft: "35px"} : {marginTop: "-47px", marginLeft: "20px"}}>Credits</p>
        <p className = "class" style = {collapsed1 ? {marginTop: "-10px", marginLeft: "35px"} : {marginTop: "-10px", marginLeft: "20px"}}>Remaining</p>
        </div>

        <p className = {collapsed1 ? "collapsed-one" : "one"}>1</p>

        <MediaQuery minDeviceWidth = {575}>
        <p className = "MyAccount" style = {{marginTop: "-35px", marginRight: "20px"}}>My Account</p>
        </MediaQuery>

        {collapsed1 === true ?
        <MediaQuery maxDeviceWidth = {574}>
        <i className="fas fa-user-alt" style = {{float: "right", marginTop: "-40px", marginRight: "20px"}}></i>
        </MediaQuery>

        : 

        collapsed1 === false ?

        <MediaQuery minDeviceWidth = {500} maxDeviceWidth = {574}>
        <i className="fas fa-user-alt" style = {{float: "right", marginTop: "-40px", marginRight: "20px"}}></i>
        </MediaQuery>

        : null}

        <MediaQuery minDeviceWidth = {500}>

        <img src = {require("../Assets/Images/Arrow.png")} alt = "none" style = {{float: "right", marginTop: "-40px", marginRight: "-30px"}}/>

        </MediaQuery>

        {collapsed1 === true ?
        <MediaQuery minDeviceWidth = {360} maxDeviceWidth = {574}>
        <img src = {require("../Assets/Images/Arrow.png")} alt = "none" style = {{float: "right", marginTop: "-40px", marginRight: "-30px"}}/>
        </MediaQuery>

        : null}     

        </Header>

        </MediaQuery>
       
        </>
    );
  }

