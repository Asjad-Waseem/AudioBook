import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './AudioBooks.css';
import '../index1.css';
import '../Dashboard/Dashboard.css';
import { Layout, Breadcrumb, Divider } from 'antd';
import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';
import Table from '../Tables/RequiresReviewTable';
import Table1 from '../Tables/InDisputeTable';
import Table2 from '../Tables/RequestedTable';
// import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../../globalStateContext';

const { Content } = Layout;

export default function AudioBookContent () {

const [{collapsed1}] = useGlobalState()

const [link1, setLink1] = useState("Black");
const [link2, setLink2] = useState("#9B9B9B");
const [link3, setLink3] = useState("#9B9B9B");
const [link01, setLink01] = useState("#B9B9B9");
const [link02, setLink02] = useState("#3D68A4");
const [link03, setLink03] = useState("#3D68A4");

// const history = useHistory();
  
// const onCollapse = () => {

// setGlobalState({collapsed1: !collapsed1})

// }

const onLink1 = () => {

    setLink1(link1 => "Black")
    setLink2(link2 => "#9B9B9B")
    setLink3(link3 => "#9B9B9B")
  
    setLink01(link01 => "#9B9B9B")
    setLink02(link02 => "#3D68A4")
    setLink03(link03 => "#3D68A4")
  
  }
  
  const onLink2 = () => {
  
    setLink2(link2 => "Black")
    setLink1(link1 => "#9B9B9B")
    setLink3(link3 => "#9B9B9B")
  
    setLink02(link02 => "#B9B9B9")
    setLink03(link03 => "#3D68A4")
    setLink01(link01 => "#3D68A4")
  
  }
  
  const onLink3 = () => {
  
    setLink3(link3 => "Black")
    setLink1(link1 => "#9B9B9B")
    setLink2(link2 => "#9B9B9B")
  
    setLink03(link03 => "#B9B9B9")
    setLink02(link02 => "#3D68A4")
    setLink01(link01 => "#3D68A4")
  
  }

    return (

            <>

            {/* Main Body Starts Here */ }

            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>          

            </Breadcrumb>
            <div className="site-layout-background col-md-10 ConfirmedReviews" style={{ padding: 24, minHeight: 136, margin: "auto", textAlign: "center" }}>
            <div className="container">
            <div className="row">

            {collapsed1 === true ? 

            <MediaQuery minDeviceWidth = {550}>
                        
            <div className="col">
            <Link className = "REQUIRESREVIEW" onClick = {onLink1} style = {{color: link1}}>
            REQUIRES REVIEW <br />

            <h1 className = "ONE">1</h1>
            <p className = "VIEW" style = {{color: link01}}>VIEW</p>
            </Link>
            </div>

            </MediaQuery>

            : null}

            {collapsed1 === true ? 
            
            <MediaQuery maxDeviceWidth = {549}>

            <div className="col">
            <Link className = "REQUIRESREVIEW" onClick = {onLink1} style = {{color: link1}}>
            REQUIRES REVIEW <br />

            <h1 className = "ONE">1</h1>
            <p className = "VIEW" style = {{color: link01}}>VIEW</p>
            </Link>
            </div>

            <Divider type = "horizontal"></Divider>

            </MediaQuery>

            : null}

            {collapsed1 === true ?

            <MediaQuery minDeviceWidth = {550}>
 
            <div className="col">
            <Link className = "REQUIRESREVIEW" onClick = {onLink2} style = {{color: link2}}>
            IN DISPUTE <br />
            <h1 className = "ONE">1</h1>
            <p className = "VIEW" style = {{color: link02}}>VIEW DISPUTES</p>
            </Link>
            </div>

            </MediaQuery>

            : null}

            {collapsed1 === true ? 

            <MediaQuery maxDeviceWidth = {549}>

            <div className="col">
            <Link className = "REQUIRESREVIEW" onClick = {onLink2} style = {{color: link2}}>
            IN DISPUTE <br />
            <h1 className = "ONE">1</h1>
            <p className = "VIEW" style = {{color: link02}}>VIEW DISPUTES</p>
            </Link>
            </div>

            <Divider type = "horizontal"></Divider>
         
            </MediaQuery>

            : null}

             {collapsed1 === false ? 

             <MediaQuery minDeviceWidth = {775}>
            
             <div className="col">
             <Link className = "REQUIRESREVIEW" onClick = {onLink1} style = {{color: link1}}>
             REQUIRES REVIEW <br />

             <h1 className = "ONE">1</h1>
             <p className = "VIEW" style = {{color: link01}}>VIEW</p>
             </Link>
             </div>

             </MediaQuery>

             : null}

             {collapsed1 === false ? 

             <MediaQuery maxDeviceWidth = {774}>

             <div className="col">
             <Link className = "REQUIRESREVIEW" onClick = {onLink1} style = {{color: link1}}>
             REQUIRES REVIEW <br />

             <h1 className = "ONE">1</h1>
             <p className = "VIEW" style = {{color: link01}}>VIEW</p>
             </Link>
             </div>

             <Divider type = "horizontal"></Divider>

             </MediaQuery>

             : null}

             {collapsed1 === false ?

             <MediaQuery minDeviceWidth = {775}>

             <div className="col">
             <Link className = "REQUIRESREVIEW" onClick = {onLink2} style = {{color: link2}}>
             IN DISPUTE <br />
             <h1 className = "ONE">1</h1>
             <p className = "VIEW" style = {{color: link02}}>VIEW DISPUTES</p>
             </Link>
             </div>

             </MediaQuery>

             : null}

             {collapsed1 === false ? 

             <MediaQuery maxDeviceWidth = {774}>

             <div className="col">
             <Link className = "REQUIRESREVIEW" onClick = {onLink2} style = {{color: link2}}>
             IN DISPUTE <br />
             <h1 className = "ONE">1</h1>
             <p className = "VIEW" style = {{color: link02}}>VIEW DISPUTES</p>
             </Link>
             </div>

             <Divider type = "horizontal"></Divider>

             </MediaQuery>

             : null}

            <div className="col">
            <Link className = "REQUIRESREVIEW" onClick = {onLink3} style = {{color: link3}}>
            REQUESTED <br />
            <h1 className = "ONE">3</h1>
            <p className = "VIEW" style = {{color: link03}}>VIEW REQUESTED</p>
            </Link>
            </div>
            </div>
            </div>
             
            </div>

            <br />
            <div className="container site-layout-background col-md-10" style = {{backgroundColor: "#F2F2F2"}}>
            <div className="row">

            <div className="col requiresReview" style = {{ backgroundColor: "white", textAlign: "center"}}>
            <div className = "table-responsive"> 

            {link1 === "Black" ? 

            <h4 style = {{textAlign: "left", marginTop: "20px", fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "20px"}}>Audiobooks requiring review</h4>
           
            : 

            link2 === "Black" ? 

            <h4 style = {{textAlign: "left", marginTop: "20px", fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "20px"}}>Audiobooks in dispute</h4>

            : 

            link3 === "Black" ? 
            <h4 style = {{textAlign: "left", marginTop: "20px", fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "20px"}}>Requested audiobooks</h4>
            : 

            null}

           {link1 === "Black" ?
           
            <Table className = "requiresReview"/>

            :

           link2 === "Black" ?
           
           <Table1 className = "requiresReview"/>

           : 
           
           link3 === "Black" ?
           
           <Table2 className = "requiresReview"/>
           
           :

           null}

           </div>
           </div>
           </div> 
           </div>

          </Content>

          </>
       
    );
  }

