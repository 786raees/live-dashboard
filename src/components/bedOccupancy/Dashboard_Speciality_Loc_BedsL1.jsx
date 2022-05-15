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
    componentDidMount() {LiveDashboardServices.getspecialityBedsL1().then((res) => {
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
                    <h2 style={{ color: 'blue', textAlign: "center" }}> Speciality and Hospital wise Beds Detail </h2>
                    <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped responsive style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> SrNo. </th>
                                            <th> Speciality Name</th>
                                            <th> PMC Requirement</th>
                                            <th> FMH Beds </th>
                                            <th> HH Beds</th>
                                            <th> KNH Beds</th>
                                            <th> Total Beds</th>
                                            <th> Excess Beds</th>
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
                                                        {/*<td><p style={{ textAlign: "center" }}> <NumberFormat value={user[7]} displayType={'text'} thousandSeparator={true}/> </p></td>*/}

                                                        <td><p style={{ textAlign: "center" }}>{ user[7] <0 ? <p className="text-danger"> {user[7]}</p>  : user[7]}</p></td> 

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
