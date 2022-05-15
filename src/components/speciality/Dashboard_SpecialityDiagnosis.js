import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Card } from '@material-ui/core';
import LiveDashboardServices from '../services/LiveDashboardServices';

export default class Dashboard_SpecialityDiagnosis extends Component {
    constructor(props) {
        super(props)

        this.state = {
            queryOutput: []
        }
    }
    componentDidMount() {LiveDashboardServices.getspecialityDxCounts().then((res) => {
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
                    <h2 style={{ color: 'blue', textAlign: "center" }}> Speciality wise Diagnosis Stats </h2>
                    <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped responsive style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> Speciality Name</th>
                                            <th> Diagnosis Name</th>
                                            <th> No Of Counts </th>
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
