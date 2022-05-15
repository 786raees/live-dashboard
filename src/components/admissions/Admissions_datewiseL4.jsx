import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Card } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import LiveDashboardServices from '../services/LiveDashboardServices';

export default class Admissions_datewiseL3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            queryOutput: []
        }
    }



    componentDidMount() {LiveDashboardServices.getdatewiseIPDCountsL4(this.props.location.state.month_name, this.props.location.state.speciality_name, this.props.location.state.date_name).then((res) => {
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
                <h2 style={{ color: 'blue', textAlign: "center" }}> Doctor Wise IPD Admissions Summary for the <p style={{ color: 'red' }}> Speciality = {this.props.location.state.date_name} and Date = {this.props.location.state.month_name +"-"+this.props.location.state.speciality_name}</p></h2>
                          <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> Doctor Name</th>
                                            <th> MRNO</th>
                                            <th> Patient Name</th>
                                            <th> Patient Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.queryOutput.map(
                                                user =>
                                                    <tr key={user[0]}>
                                                        <td> {user[0]}</td>
                                                        <td> {user[1]}</td>
                                                        <td> {user[2]}</td>
                                                        <td> {user[3]}</td>

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
