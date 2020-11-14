import React from 'react';
import 'antd/dist/antd.css';
import '../index1.css';
import './Dashboard.css';
import { Layout, Breadcrumb, Divider } from 'antd';
import MediaQuery from "react-responsive";
// import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../../globalStateContext';

const { Content } = Layout;

export default function ContentComponent () {

const [{collapsed1}] = useGlobalState()

// const history = useHistory();
  
// const onCollapse = () => {

// setGlobalState({collapsed1: !collapsed1})

// }

    return (

      <>

          <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>          

          </Breadcrumb>
          <div className="site-layout-background col-md-10 ConfirmedReviews" style={{ padding: 24, minHeight: 136, margin: "auto", textAlign: "center" }}>
          <div className="container">
          <div className="row">

          <div className="col">
          Confirmed Reviews 
          <br />
          <h1 className = "Numbers">1</h1>
          </div>

          {/* Divider of the Top Container */ }

          {/* Collapsed True */}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth={490}>

          <Divider className = "divider" type="vertical" />

          </MediaQuery>

          : null}

          {collapsed1 === true ? 

          <MediaQuery maxDeviceWidth={489}>

          <Divider className = "horizontalDivider" type="horizontal" />

          </MediaQuery>

          : null}

         
          {/* Collapsed False */}


          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth={620}>

          <Divider className = "divider" type="vertical" />

          </MediaQuery>

          : null}

          {collapsed1 === false ? 

          <MediaQuery maxDeviceWidth={619}>

          <Divider className = "horizontalDivider" type="horizontal" />

          </MediaQuery>

          : null}

          <div className="col">
          Disputes <br />
          <h1 className = "Numbers">0</h1>
          </div>

          <MediaQuery minDeviceWidth={490}>

          <Divider className = "divider" type="vertical" />

          </MediaQuery>

          <MediaQuery maxDeviceWidth={489}>

          <Divider className = "horizontalDivider" type="horizontal" />

          </MediaQuery>

          <div className="col">
          Requested <br />
          <h1 className = "Numbers">10</h1>
          </div>
          </div>
          </div>
           
          </div>

          <br />

          <div className="container site-layout-background col-md-10" style = {{backgroundColor: "#F2F2F2"}}>
          <div className="row">

          <div className="col requiresReview mr-1" style = {{ backgroundColor: "white", textAlign: "center"}}>
           
           <p className = "RequiresReview">Requires review</p>

          <MediaQuery maxDeviceWidth={600}>

            <img src = {require("../../../Assets/Images/b1.png")} alt = "img3" style = {{height: "32px", width: "32px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={601} maxDeviceWidth={768}>

            <img src = {require("../../../Assets/Images/b1.png")} alt = "img4" style = {{height: "50px", width: "50px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={769} maxDeviceWidth={900}>

          <img src = {require("../../../Assets/Images/b1.png")} alt = "img5" style = {{height: "75px", width: "75px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={900} maxDeviceWidth={1024}>

          <img src = {require("../../../Assets/Images/b1.png")} alt = "img6" style = {{height: "100px", width: "100px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={1025}>

          <img src = {require("../../../Assets/Images/b1.png")} alt = "img7" style = {{height: "150px", width: "150px"}}/>

          </MediaQuery>

          <Divider className = "horizontalDivider" type = "horizontal"/>

          {collapsed1 === true ? 

          <MediaQuery maxDeviceWidth = {400}>

          <p style = {{fontFamily: "AvenirNext", fontSize: "18px", letterSpacing: "-0.1px"}}> Days Remaining</p>

          </MediaQuery> 

          : null}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth = {875}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p className = "DaysRemaining">Days</p>
          <p className = "Remaining">Remaining</p>
          </div>    
          </MediaQuery>  

          : null}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth = {401} maxDeviceWidth = {874}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p style = {{marginTop: "-20px"}}>Days</p>
          <p style = {{marginTop: "-10px"}}>Remaining</p>
          </div> 
          </MediaQuery>  

          : null}

          {collapsed1 === false ? 

          <MediaQuery maxDeviceWidth = {524}>

          <p style = {{fontFamily: "AvenirNext", fontSize: "18px", letterSpacing: "-0.1px"}}> Days Remaining</p>

          </MediaQuery> 

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {875}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p className = "DaysRemaining">Days</p>
          <p className = "Remaining">Remaining</p>
          </div>    
          </MediaQuery>  

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {525} maxDeviceWidth = {874}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p style = {{marginTop: "-20px"}}>Days</p>
          <p style = {{marginTop: "-10px"}}>Remaining</p>
          </div> 
          </MediaQuery>  

          : null}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth = {401} maxDeviceWidth = {550}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div> 
          </MediaQuery>

          : null}

          {collapsed1 === true ?

          <MediaQuery minDeviceWidth = {551}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div> 
          </MediaQuery>

          : null}

          {collapsed1 === true ?

          <MediaQuery maxDeviceWidth = {400}>

          <p className = "Pending" style = {{fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>

          </MediaQuery>  

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {700}>

          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div> 

          </MediaQuery>

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {525} maxDeviceWidth = {699}>

          <div style = {{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div>

          </MediaQuery>

          : null}

          {collapsed1 === false ? 

          <MediaQuery maxDeviceWidth = {524}>

          <p className = "Pending" style = {{fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>

          </MediaQuery>

          : null}

          </div>

          <div className="col requiresReview" style = {{backgroundColor: "White", textAlign: "center"}}>

          <p className = "Pending">Pending confirmation from publisher</p>

          <MediaQuery maxDeviceWidth={600}>

            <img src = {require("../../../Assets/Images/b2.png")} alt = "img8" style = {{height: "32px", width: "32px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={601} maxDeviceWidth={768}>

            <img src = {require("../../../Assets/Images/b2.png")} alt = "img9" style = {{height: "50px", width: "50px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={769} maxDeviceWidth={900}>

          <img src = {require("../../../Assets/Images/b2.png")} alt = "img10" style = {{height: "75px", width: "75px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={900} maxDeviceWidth={1024}>

          <img src = {require("../../../Assets/Images/b2.png")} alt = "img11" style = {{height: "100px", width: "100px"}}/>

          </MediaQuery>

          <MediaQuery minDeviceWidth={1025}>

          <img src = {require("../../../Assets/Images/b2.png")} alt = "img12" style = {{height: "150px", width: "150px"}}/>

          </MediaQuery>

          <Divider className = "horizontalDivider" type = "horizontal"/>

          {/* COMMENT */}

          {collapsed1 === true ? 

          <MediaQuery maxDeviceWidth = {400}>

          <p style = {{fontFamily: "AvenirNext", fontSize: "18px", letterSpacing: "-0.1px"}}> Days Remaining</p>

          </MediaQuery> 

          : null}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth = {875}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p className = "DaysRemaining">Days</p>
          <p className = "Remaining">Remaining</p>
          </div>    
          </MediaQuery>  

          : null}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth = {401} maxDeviceWidth = {874}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}> 
          <p style = {{marginTop: "-20px"}}>Days</p>
          <p style = {{marginTop: "-10px"}}>Remaining</p>
          </div> 
          </MediaQuery>  

          : null}

          {collapsed1 === false ? 

          <MediaQuery maxDeviceWidth = {524}>

          <p style = {{fontFamily: "AvenirNext", fontSize: "18px", letterSpacing: "-0.1px"}}> Days Remaining</p>

          </MediaQuery> 

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {875}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p className = "DaysRemaining">Days</p>
          <p className = "Remaining">Remaining</p>
          </div>    
          </MediaQuery>  

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {525} maxDeviceWidth = {874}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "baseline"}}>
          <p style = {{marginTop: "-20px"}}>Days</p>
          <p style = {{marginTop: "-10px"}}>Remaining</p>
          </div> 
          </MediaQuery>  

          : null}

          {collapsed1 === true ? 

          <MediaQuery minDeviceWidth = {401} maxDeviceWidth = {550}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div> 
          </MediaQuery>

          : null}

          {collapsed1 === true ?

          <MediaQuery minDeviceWidth = {551}>
          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div> 
          </MediaQuery>

          : null}

          {collapsed1 === true ?

          <MediaQuery maxDeviceWidth = {400}>

          <p className = "Pending" style = {{fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>

          </MediaQuery>  

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {700}>

          <div style = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div> 

          </MediaQuery>

          : null}

          {collapsed1 === false ? 

          <MediaQuery minDeviceWidth = {525} maxDeviceWidth = {699}>

          <div style = {{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
          <p style = {{marginTop: "-70px", fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>
          </div>

          </MediaQuery>

          : null}

          {collapsed1 === false ? 

          <MediaQuery maxDeviceWidth = {524}>

          <p className = "Pending" style = {{fontFamily: "AvenirNext", fontSize: "32px"}}>29</p>

          </MediaQuery>

          : null}
        
          </div>
          </div>
          </div>

        </Content>

      </>
       
    );
  }

