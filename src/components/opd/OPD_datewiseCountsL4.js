import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Card } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveDashboardServices from '../services/LiveDashboardServices';

//**************************************** for date ************************************************* */
export default class OPD_datewiseCountsL3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            queryOutput: []
        }
    }

    


    componentDidMount() {LiveDashboardServices.getdatewiseOPDCountsL4(this.props.location.state.month_name, this.props.location.state.speciality_name, this.props.location.state.date_name).then((res) => {
            this.setState({
                queryOutput: res.data
            })
        }
        )
    }


    render() {
        return (
            <Card border="info" style={{ marginLeft: '100px', marginRight: '100px', marginBottom: '100px' }}>
                <div className="App">
                    <h2 style={{ color: 'white', textAlign: 'center', background: 'blue'  }}> Doctor Wise No of OPD Visits for the <p style={{ color: 'yellow' }}> Speciality = {this.props.location.state.date_name} and Date = {this.props.location.state.month_name +"-"+this.props.location.state.speciality_name}</p></h2>
                    <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> Designation</th>
                                            <th> Doctor Name</th>
                                            <th> General Patients</th>
                                            <th> Private Patients</th>
                                            <th> Total Patients</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.queryOutput.map(
                                                user =>
                                                    <tr key={user[0]}>
                                                        <td> {user[1]}</td>
                                                        <td> {user[2]}</td>
                                                        <td><p style={{ textAlign: "center" }}> {user[3]} </p></td>
                                                        <td><p style={{ textAlign: "center" }}> {user[4]} </p></td>
                                                        <td><p style={{ textAlign: "center", fontWeight: 'bold' }}> {user[5]} </p></td>
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
