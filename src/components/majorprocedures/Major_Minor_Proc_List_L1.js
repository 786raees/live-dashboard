import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Card } from '@material-ui/core';
import LiveDashboardServices from '../services/LiveDashboardServices';

export default class Revenue_datewiseL4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            queryOutput: []
        }
    }
    componentDidMount() {LiveDashboardServices.getMajMinProcListL1().then((res) => {
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
                    <h2 style={{ color: 'blue', textAlign: "center" }}> Major & Minor Procdures List </h2>
                    <div>
                        <div className="row">
                            <div className="mx-auto">
                                <Table striped responsive style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                                    <thead>
                                        <tr>
                                            <th> Speciality Name</th>
                                            <th> Procedure Type </th>                                            
                                            <th> CPT Name</th>
                                            <th> Count </th>
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
