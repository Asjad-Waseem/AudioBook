import React from 'react';
import 'antd/dist/antd.css';
import '../Components/DashboardComponents/index1.css';
import '../Components/DashboardComponents/Dashboard/Dashboard.css';
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
} from '@ant-design/icons';
import MediaQuery from "react-responsive";
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../globalStateContext';

const { Sider } = Layout;

export default function SiderComponent () {

const [{collapsed1}, setGlobalState] = useGlobalState()

const history = useHistory();
  
const onCollapse = () => {
  setGlobalState({collapsed1: !collapsed1})
}

    return (

      <>     
      <MediaQuery minDeviceWidth = {481}>

      <Sider trigger = {null} collapsible collapsed={collapsed1} theme = "light" className = "sider" collapsedWidth = {50}>      
    
        <Menu defaultSelectedKeys={['0000']} mode="inline" className = {collapsed1 ? "collapsed-menu" : "regular-menu"}>
        
        <Menu.Item className = {collapsed1 ? "collapsed-hamburger" : "normal-hamburger"} key="0" icon={<MenuFoldOutlined onClick = {onCollapse}/>}>

        </Menu.Item>

        {collapsed1 === false ? 

        <img src = {require("../Assets/Images/logo.png")} alt = "img1" className = "audiobookrocket-logo"/>

        : null}

        {collapsed1 === false ? 

        <Menu.Item className = "listener-dashboard">Listener Dashboard</Menu.Item>

        : null}

        <Menu.Item key="1" icon ={<img className = {collapsed1 ? "collapsed-home" : "home"} src = {require("../Assets/Images/home.png")} alt = "img2"
        
        onClick = {() => history.push('/')}
        />}>

            {collapsed1 === false ? 
             
            <text className = "dashboard" 
            
            onClick = {() => history.push('/')}
            
            >Dashboard</text>

            : null}

          </Menu.Item>

          <Menu.Item key="20" icon ={
          
          <div>

          {collapsed1 === true ? 

          <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '5px', width: '5px', marginLeft: "-27px"}}    />        

          : null}

          <img style = 
          
          {collapsed1 ? {height: "16.0px", width: "22px", textAlign: "center", marginTop: "-5px", marginLeft: "4px"} :
          {height: "16.0px", width: "22px", textAlign: "center", marginTop: "-5px", marginLeft: "-3px"}
        
          } src = {require("../Assets/Images/audioBooks.png")} alt = "img2"/> 

          {collapsed1 === false ?

          <text className = "audiobook-text" onClick = {() => history.push('/AudioBooks')}>
          Audiobooks
          </text>

          : null}

          {collapsed1 === false ? 

          <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '11px', width: '11px', marginLeft: "44px"}}  onClick = {() => history.push('/AudioBooks')}/>

          : null}

          </div>

          }

          onClick = {() => history.push('/AudioBooks')} >

          {collapsed1 === false ?

          <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '11px', width: '11px', marginLeft: "38px"}} 
           onClick = {() => history.push('/AudioBooks')}
          />

          : null}
 
          </Menu.Item>

          {collapsed1 === true ?

          <Menu.Item key="3" icon ={

            <div>

          <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '5px', width: '5px', marginLeft: "-27px"}}    />        
          
          <img src = {require("../Assets/Images/star.png")} alt = "img2" style = {{height: '13.38px', width: '14px', textAlign: 'center', marginLeft: "8px"}}/>
          
          </div>

          }  onClick = {() => history.push('/Reviews')} >
          
          </Menu.Item>

          : null}

          {collapsed1 === false ?

           <Menu.Item key="3" icon ={<img src = {require("../Assets/Images/star.png")} alt = "img2" style = {{height: '13.38px', width: '14px', textAlign: 'center', marginTop: "-5px"}} 
           onClick = {() => history.push('/Reviews')}/>}>

            <text style = {{fontWeight: "500", marginLeft: "13px"}}  onClick = {() => history.push('/Reviews')}>
            Reviews
            </text>

            <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '11px', width: '11px', marginLeft: "71px"}}  onClick = {() => history.push('/Settings')}/>
              
          </Menu.Item>

          : null}

          {collapsed1 === true ?

          <Menu.Item key="30" icon ={

          <img src = {require("../Assets/Images/settings.png")} alt = "img2" style = {{height: '20px', width: '20px', textAlign: 'center', marginLeft: "-17px"}}  onClick = {() => history.push('/Settings')}/>

          } onClick = {() => history.push('/Settings')}>
          
          </Menu.Item>

          : null}

          {collapsed1 === false ? 

          <Menu.Item key="4" icon ={<img src = {require("../Assets/Images/settings.png")} alt = "img2" style = {{height: '20px', width: '20px', textAlign: 'center', marginTop: "-5px", marginLeft: "-3px"}}  onClick = {() => history.push('/Settings')}/>}>
            
          <text style = {{marginLeft: "11px", fontWeight: "500"}}  onClick = {() => history.push('/Settings')}>Settings</text>

          </Menu.Item>

          : null}
    
        </Menu>
      </Sider>
      </MediaQuery>

      <MediaQuery maxDeviceWidth = {480}>

      <Sider trigger = {null} collapsible collapsed={collapsed1} theme = "light" className = "sider" collapsedWidth = {0}>      
    
    <Menu defaultSelectedKeys={['0']} mode="inline" className = {collapsed1 ? "collapsed-menu" : "regular-menu"}>
    
    <Menu.Item className = {collapsed1 ? "collapsed-hamburger" : "normal-hamburger"} key="0" icon={<MenuFoldOutlined onClick = {onCollapse}/>}>

    </Menu.Item>

    {collapsed1 === false ? 

    <img src = {require("../Assets/Images/logo.png")} alt = "img1" className = "audiobookrocket-logo"/>

    : null}

    {collapsed1 === false ? 

    <Menu.Item className = "listener-dashboard">Listener Dashboard</Menu.Item>

    : null}

    <Menu.Item key="1" icon ={<img className = {collapsed1 ? "collapsed-home" : "home"} src = {require("../Assets/Images/home.png")} alt = "img2"/>}>

        {collapsed1 === false ? 
         
        <text className = "dashboard">Dashboard</text>

        : null}

      </Menu.Item>

      <Menu.Item key="20" icon ={
      
      <div>

      {collapsed1 === true ? 

      <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '5px', width: '5px', marginLeft: "-27px"}}    />        

      : null}

      <img style = 
      
      {collapsed1 ? {height: "16.0px", width: "22px", textAlign: "center", marginTop: "-5px", marginLeft: "4px"} :
      {height: "16.0px", width: "22px", textAlign: "center", marginTop: "-5px", marginLeft: "-3px"}
    
      } src = {require("../Assets/Images/audioBooks.png")} alt = "img2"/> 

      {collapsed1 === false ?

      <text className = "audiobook-text" onClick = {() => history.push('/AudioBooks')}>
      Audiobooks
      </text>

      : null}

      {collapsed1 === false ? 

      <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '11px', width: '11px', marginLeft: "44px"}}  onClick = {() => history.push('/AudioBooks')}/>

      : null}

      </div>

      }

      onClick = {() => history.push('/AudioBooks')} >

      {collapsed1 === false ?

      <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '11px', width: '11px', marginLeft: "38px"}} 
       onClick = {() => history.push('/AudioBooks')}
      />

      : null}

      </Menu.Item>

      {collapsed1 === true ?

      <Menu.Item key="3" icon ={

        <div>

      <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '5px', width: '5px', marginLeft: "-27px"}}    />        
      
      <img src = {require("../Assets/Images/star.png")} alt = "img2" style = {{height: '13.38px', width: '14px', textAlign: 'center', marginLeft: "8px"}}/>
      
      </div>

      }  onClick = {() => history.push('/Reviews')} >
      
      </Menu.Item>

      : null}

      {collapsed1 === false ?

       <Menu.Item key="3" icon ={<img src = {require("../Assets/Images/star.png")} alt = "img2" style = {{height: '13.38px', width: '14px', textAlign: 'center', marginTop: "-5px"}} 
       onClick = {() => history.push('/Reviews')}/>}>

        <text style = {{marginLeft: "13px", fontWeight: "500"}}  onClick = {() => history.push('/Reviews')}>
        Reviews
        </text>

        <img src = {require("../Assets/Images/notification.png")} alt = "img2" style = {{height: '11px', width: '11px', marginLeft: "71px"}}  onClick = {() => history.push('/Settings')}/>
          
      </Menu.Item>

      : null}

      {collapsed1 === true ?

      <Menu.Item key="30" icon ={

      <img src = {require("../Assets/Images/settings.png")} alt = "img2" style = {{height: '20px', width: '20px', textAlign: 'center', marginLeft: "-17px"}}  onClick = {() => history.push('/Settings')}/>

      } onClick = {() => history.push('/Settings')}>
      
      </Menu.Item>

      : null}

      {collapsed1 === false ? 

      <Menu.Item key="4" icon ={<img src = {require("../Assets/Images/settings.png")} alt = "img2" style = {{height: '20px', width: '20px', textAlign: 'center', marginTop: "-5px", marginLeft: "-3px"}}  onClick = {() => history.push('/Settings')}/>}>
        
      <text style = {{marginLeft: "11px", fontWeight: "500"}}  onClick = {() => history.push('/Settings')}>Settings</text>

      </Menu.Item>

      : null}

    </Menu>
  </Sider>

      </MediaQuery>
      </>

    );
  }

