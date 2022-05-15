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
    componentDidMount() {LiveDashboardServices.getspecialitycommonCounts().then((res) => {
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
                    <h2 style={{ color: 'blue', textAlign: "center" }}> Speciality wise Hospital Stats </h2>
                    <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped responsive style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> Speciality Name</th>
                                            <th> PMC OPD</th>
                                            <th> Actual OPD </th>
                                            <th> Excess OPD</th>
                                            <th> PMC Maj.Proc</th>
                                            <th> Actual Maj. Proc</th>
                                            <th> Excess Maj. Proc.</th>
                                            <th> PMC Min.Proc</th>
                                            <th> Actual Min. Proc</th>
                                            <th> Excess Min. Proc.</th>
                                            <th> PMC Bed Occupancy</th>
                                            <th> Actual Bed Occupancy</th>
                                            <th> Excess Bed Occupancy</th>
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
                                                        <td><p style={{ textAlign: "center" }}>{ user[3] <0 ? <p className="text-danger"> <NumberFormat value={user[3]} displayType={'text'} thousandSeparator={true}/></p>  : user[3]}</p></td> 
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[4]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}>{ user[5] <0 ? <p className="text-danger"> {user[5]}</p>  : user[5]}</p></td>
                                                        <td><p style={{ textAlign: "center" }}>{ user[6] <0 ? <p className="text-danger"> {user[6]}</p>  : user[6]}</p></td>
                                                        {/*<td><p style={{ textAlign: "center" }}> <NumberFormat value={user[7]} displayType={'text'} thousandSeparator={true}/> </p></td>*/}

                                                        <td><p style={{ textAlign: "center" }}>{ user[7] <0 ? <p className="text-danger"> {user[7]}</p>  : user[7]}</p></td> 
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[8]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}>{ user[9] <0 ? <p className="text-danger"> <NumberFormat value={user[9]} displayType={'text'} thousandSeparator={true}/></p>  : user[9]}</p></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[10]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}> <NumberFormat value={user[11]} displayType={'text'} thousandSeparator={true}/> </p></td>
                                                        <td><p style={{ textAlign: "center" }}>{ user[12] <0 ? <p className="text-danger"> {user[12]}</p>  : user[12]}</p></td>

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
