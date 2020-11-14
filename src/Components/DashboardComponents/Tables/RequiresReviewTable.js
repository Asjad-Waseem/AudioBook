import React, { Component } from 'react';
import { Table } from 'antd';
import '../index1.css';
import '../AudioBooks/AudioBooks.css';
import './tables.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const visible = false;

// const checked = false;

export default class table1 extends Component {

     handleChange = (event) => {
     
     this.setState({checked: true})

    };

    onCheckChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    constructor(){

        super();

      this.state = visible;

        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange(this);
        // this.onSubmit = this.onSubmit.bind(this);

    }

    // onChange(e){

    //     this.setState({[e.target.name]: e.target.value});
    
    // }

    // onSubmit(e){

    //     e.preventDefault();

      
    //     };

      //  }

      onChange(filters, sorter, extra) {
        console.log('params', filters, sorter, extra);
      
      }
 
  render() {

    const columns = [
        {
          title: <p className = "TABLETITLES">Cover Image</p>,
          dataIndex: "coverImage",
          key: 'coverImage',
        //   filters: [
        //     {
        //       text: 'Joe',
        //       value: 'Joe',
        //     },
            // {
            //   text: 'Jim',
            //   value: 'Jim',
            // },
            // {
            //   text: 'Submenu',
            //   value: 'Submenu',
            //   children: [
            //     {
            //       text: 'Green',
            //       value: 'Green',
            //     },
            //     {
            //       text: 'Black',
            //       value: 'Black',
            //     },
            //   ],
            // },
        //   ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
        //   sorter: (a, b) => a.name.length - b.name.length,
        //   sortDirections: ['descend'],
        },
        {
          title: <p className = "TABLETITLES">Audiobook Name</p>,
          dataIndex: "audioBookName",
          key: "audioBookName",
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: <p className = "TABLETITLES">Region</p>,
          dataIndex: "region",
          key: "region",
        //   filters: [
        //     {
        //       text: 'London',
        //       value: 'London',
        //     },
        //     {
        //       text: 'New York',
        //       value: 'New York',
        //     },
        //   ],
        //   filterMultiple: false,
          onFilter: (value, record) => record.address.indexOf(value) === 0,
          sorter: (a, b) => a.address.length - b.address.length,
          sortDirections: ['descend', 'ascend'],
        },
    
        {
            title: <p className = "TABLETITLES">Author</p>,
            dataIndex: "author",
            key: "author",
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            // filterMultiple: false,
            // onFilter: (value, record) => record.address.indexOf(value) === 0,
            // sorter: (a, b) => a.address.length - b.address.length,
            // sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "TABLETITLES">Days Remaining</p>,
            dataIndex: "daysRemaining",
            key: "daysRemaining",
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "TABLETITLES">Promo Code</p>,
            dataIndex: "promoCode",
            key: "promoCode",
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "TABLETITLES">Status</p>,
            dataIndex: "status",
            key: "status",
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            // sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "TABLETITLES" style = {{textAlign: "center"}}>Action</p>,
            dataIndex: "actions",
            key: "actions",
    
            render: actions => (
                <>                  
                      <div>
                      <button type = "button" className="btn btn-success" data-toggle="modal" data-target="#myModal" key={actions} onClick = {this.showModal} style = {{maxHeight: "40px", maxWidth: "150px", color: "white", backgroundColor: "#00CD3B", border: "none", fontSize: "11px", fontFamily: "Futura", fontWeight: "500", marginTop: "-5px"}}>
                      CONFIRM REVIEW GIVEN
                      </button>
    
                      <br/>
                      <br/>
    
                      <button type = "button" className="btn btn-success" data-toggle="modal" data-target="#myModal1" key={actions} style = {{maxHeight: "40px", maxWidth: "83px", color: "white", backgroundColor: "#FF003D", border: "none", fontSize: "11px", fontFamily: "Futura", fontWeight: "500", marginLeft: "13px", marginTop: "-15px"}}>
                      FILE DISPUTE
                      </button>
                      </div>
                </>
              ),
    
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            // sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
          {
            title: <p className = "TABLETITLES">Date</p>,
            dataIndex: "date",
            key: "date",
        
            // filters: [
            //   {
            //     text: 'London',
            //     value: 'London',
            //   },
            //   {
            //     text: 'New York',
            //     value: 'New York',
            //   },
            // ],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
          },
    
      ];
      
      const data = [
        {
          key: "coverImage",
          coverImage: <img src = {require("../../../Assets/Images/b1.png")} style = {{maxHeight: "80px", maxWidth: "80px"}} alt = "table"/> ,
          audioBookName: <p className = "TABLEDATA">Harry Potter</p>,
          region: <p className = "TABLEDATA">US</p>,
          author: <p><u>Jackson Barber</u></p>,
          daysRemaining: <p className = "DAYSREMAINING">29</p>,
          promoCode: <p className = "TABLEDATA">327KQXCGGDNG7</p>,
          status: <p className = "TABLEDATA">Requires Review</p>,
          date: <p className = "TABLEDATA">08-04-2020</p>
        },
       
      ];

    return (
        <div>

<div className="container" style = {{textAlign: 'center'}}>
  
  <div className="modal fade" id="myModal1">
    <div className="modal-dialog MODAL" style = {{maxWidth: "400px", maxHeight: "477px"}}>
      <div className="modal-content">
      
          <h4 className="modal-title MODALTITLE">FILE DISPUTE</h4>
          
          <button type="button" className="close" data-dismiss="modal" style = {{textAlign: "right", marginTop: "-50px", marginRight: "5px"}}>&times;</button>
        
        <br/>
        <br/>
        <div className="modal-body">

        <FormControlLabel             
        style = {{float: "left", marginLeft: "4rem"}}

        control={

            <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
    
            />
        
        }
        label="Already Redeemed"
        />

        <br/>

        <FormControlLabel             
        style = {{float: "left", marginLeft: "4rem"}}

        control={

            <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
    
            />
        
        }
        label="Invalid Promo Code"
        />


        <FormControlLabel             
        style = {{float: "left", marginLeft: "4rem"}}

        control={

            <Checkbox
            checked={this.state.checked}
            onChange={this.handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
    
            />
        
        }
        label="Inactive Promo Code"
        />

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
       
        <input type="button" className="btn btn mr-1" style = {{backgroundColor: "White", borderRadius: "5px", width: "100px", height: "44px", border: "0.7solid", borderColor: "#B8B298", fontFamily: "Avenir", fontStyle: "normal", fontWeight: "500", fontSize: "15px", lineHeight: "20px", textAlign: "center", color: "#B8B298"}} value = "Cancel"/>

        <input type="submit" className="btn btn" style = {{backgroundColor: "#00A2FF", borderRadius: "4px", width: "100px", height: "44px", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: "13px", lineHeight: "22px", textAlign: "center", color: "#FFFFFF", display: "inline-block"}}/>
                    
         </form> 
        </div>
        
      </div>
    </div>
  </div>
  
</div>

<div className="container" style = {{textAlign: 'center'}}>
  
  <div className="modal fade" id="myModal">
    <div className="modal-dialog MODAL" style = {{maxWidth: "400px", maxHeight: "477px"}}>
      <div className="modal-content">
      
          <h4 className="modal-title MODALTITLE">CONFIRM REVIEW</h4>
          
          <button type="button" className="close" data-dismiss="modal" style = {{textAlign: "right", marginTop: "-50px", marginRight: "5px"}}>&times;</button>
        
        <br/>
        <br/>
        <div className="modal-body">

        <img src = {(require('../../../Assets/Images/checkmark.png'))} alt = "checkbox" style = {{textAlign: "center", maxHeight: "100px", maxWidth: "100px"}}></img>

        <br/>
        <br/>
        <p style = {{fontFamily: "Robonto", fontStyle: "normal", fontWeight: "normal", fontSize: "20px", lineHeight: "30px", textAlign: "center", color: "#686868"}}>I confirm I have left an honest, unbiased review on this audiobook.</p>
        <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
       
        <input type="button" className="btn btn mr-1" style = {{backgroundColor: "White", borderRadius: "5px", width: "100px", height: "44px", border: "0.7solid", borderColor: "#B8B298", fontFamily: "Avenir", fontStyle: "normal", fontWeight: "500", fontSize: "15px", lineHeight: "20px", textAlign: "center", color: "#B8B298"}} value = "Cancel"/>

        <input type="submit" className="btn btn" style = {{backgroundColor: "#00A2FF", borderRadius: "4px", width: "100px", height: "44px", fontFamily: "Roboto", fontStyle: "normal", fontWeight: "normal", fontSize: "13px", lineHeight: "22px", textAlign: "center", color: "#FFFFFF", display: "inline-block"}} value = "I CONFIRM"/>
                    
         </form> 
        </div>
        
      </div>
    </div>
  </div>
  
</div>

        <Table columns={columns} dataSource={data} onChange={this.onChange} pagination = {false}/>
        </div>
    )
  }
}
;
 
  
  
 




