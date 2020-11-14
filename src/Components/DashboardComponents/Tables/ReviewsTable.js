import React, { Component } from 'react';
import { Table } from 'antd';
import '../index1.css';
import '../AudioBooks/AudioBooks.css';
import './tables.css';
import { TreeSelect, Input, Typography } from 'antd';

import MediaQuery from 'react-responsive';

const visible = false;

const Loading = false;

// const Value1 = '';

// const Value2 = '';

const { Search } = Input;
const { TreeNode } = TreeSelect;
const { Text } = Typography;

export default class RequestedTable extends Component {

    onChange1=(value)=>{
    this.setState({Value1: value})
    }
    
    onChange2=(value)=>{
    this.setState({Value2: value})
    }

    handleSearch=()=>{

    }

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
          status: <p className = "TABLEDATA">PENDING CONFIRMATION</p>,
          date: <p className = "TABLEDATA">08-04-2020</p>
        },
       
      ];


    return (
        <div>

       <br/>
       <br/>

       <div style = {{display: "flex", justifyContent: "space-between", marginBottom: "15px"}}>

       <div style = {{marginTop: "-60px"}}>
       <br/>
       <MediaQuery minDeviceWidth = {550}>
       <Text style = {{fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "13px", lineHeight: "16px", letterSpacing: "1.079px", textTransform: "uppercase", color: "#000000", marginLeft: "-20px"}}>Show</Text>   
       </MediaQuery>
       <MediaQuery maxDeviceWidth = {549}>
       <Text style = {{fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "13px", lineHeight: "16px", letterSpacing: "1.079px", textTransform: "uppercase", color: "#000000"}}>Show</Text>   
       </MediaQuery>
       <TreeSelect
       defaultSortOrder= 'descend'
       sorter= {(a, b) => a.age - b.age}
       showSearch
       style={{ width: '300%'}}
       value={this.state.Value1}
       dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
       allowClear
       treeDefaultExpandAll
       onChange={this.onChange1}
     >
     
           <TreeNode value="20"  title="20" />
           <TreeNode value="30" title="30" />
           <TreeNode value="40" title="40" />
       
     </TreeSelect>
     </div>

     <div style = {{marginTop: "-60px"}}>
       <br/>
       <MediaQuery minDeviceWidth = {550}>
       <Text style = {{fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "13px", lineHeight: "16px", letterSpacing: "1.079px", textTransform: "uppercase", color: "#000000", marginLeft: "-20px"}}>Status</Text>   
       </MediaQuery>
       <MediaQuery maxDeviceWidth = {549}>
       <Text style = {{fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "13px", lineHeight: "16px", letterSpacing: "1.079px", textTransform: "uppercase", color: "#000000"}}>Status</Text>   
       </MediaQuery>
       <TreeSelect
       defaultSortOrder= 'descend'
       sorter= {(a, b) => a.age - b.age}
       showSearch
       style={{ width: '300%'}}
       value={this.state.Value1}
       dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
       allowClear
       treeDefaultExpandAll
       onChange={this.onChange1}
     >
     
           <TreeNode value="20"  title="20" />
           <TreeNode value="30" title="30" />
           <TreeNode value="40" title="40" />
       
     </TreeSelect>
     </div>

     <div style = {{marginTop: "-35px"}}>
     <Text style = {{fontFamily: "Futura", fontStyle: "normal", fontWeight: "bold", fontSize: "13px", lineHeight: "16px", letterSpacing: "1.079px", textTransform: "uppercase", color: "#000000"}}>SEARCH</Text>

     <Search placeholder="Search" loading={Loading}   style={{ width: '100%'}}
              onChange={this.handleSearch}/>

      </div>

      </div>

        <Table columns={columns} dataSource={data} onChange={this.onChange} pagination = {false}/>
        </div>
    )
  }
}
;

  
  
 




