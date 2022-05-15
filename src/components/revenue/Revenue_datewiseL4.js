import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Card } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import LiveDashboardServices from '../services/LiveDashboardServices';

export default class Revenue_datewiseL4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            queryOutput: []
        }
    }
    componentDidMount() {LiveDashboardServices.getdatewiseRevenueL4(this.props.location.state.month_name, this.props.location.state.speciality_name, this.props.location.state.date_name).then((res) => {
            this.setState({
                queryOutput: res.data
            })
        }
        )
    }

    render() {
        return (
            <Card border="info" style={{ marginLeft: '25px', marginRight: '25px' }}>
                <div className="App">
                    <h2 style={{ color: 'blue', textAlign: "center" }}> Doctor Wise Revenue Summary for the <p style={{ color: 'red' }}> Speciality = {this.props.location.state.date_name} and Date = {this.props.location.state.month_name +"-"+this.props.location.state.speciality_name}</p></h2>
                    <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped responsive style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> Designation</th>
                                            <th> Doctor Name</th>
                                            <th> OPD Visits</th>
                                            <th> No of Admissions</th>
                                            <th> Total Proc.</th>
                                            <th> OPD Revenue</th>
                                            <th> IPD Revenue</th>
                                            <th> Gross Revenue</th>
                                            <th> Discount</th>
                                            <th> Net Revenue</th>
                                            <th> Dr Fee</th>
                                            <th> Net Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.queryOutput.map(
                                                user =>
                                                    <tr key={user[0]}>
                                                        <td> {user[0]}</td>
                                                        <td> {user[1]}</td>
                                                        <td> <NumberFormat value={user[2]} displayType={'text'} thousandSeparator={true}/></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[3]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[4]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[5]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[6]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center", fontWeight: 'bold' }}> <NumberFormat value={user[7]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td ><p style={{ textAlign: "center" }}> <NumberFormat value={user[8]} displayType={'text'} thousandSeparator={true}  /> </p></td>
                                                        <td><p style={{ textAlign: "center", fontWeight: 'bold' }}> <NumberFormat value={user[9]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[10]} displayType={'text'} thousandSeparator={true}  /> </p></td>
                                                        <td><p style={{ textAlign: "center", fontWeight: 'bold' }}> <NumberFormat value={user[11]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>

                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}
