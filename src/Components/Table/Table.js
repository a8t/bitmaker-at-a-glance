import React, {Component} from 'react';
import EditableText from './EditableText';
import moment from 'moment'

class Table extends Component {
    render () {
        return (
            <div id="table-with-title">
                <h2>
                    6:30-9:30pm, {moment().startOf('isoweek').format("dddd MMM D")} to {moment().startOf('isoweek').add(4, 'days').format("dddd MMM D")}
                </h2>
                <table>
                    <tbody>
                        <tr>
                            <th></th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>Th</th>
                            <th>F</th>
                        </tr>

                        <tr>
                            <td>201</td>
                            {this.props.data.room201.map((each, index) => <EditableText data={each} key={each+index} handleDataChange={newVal => this.props.handleDataChange("room201", index, newVal)} />)}
                        </tr>

                        <tr>
                            <td>202</td>
                            {this.props.data.room202.map((each, index) => <EditableText data={each} key={each + index} handleDataChange={newVal => this.props.handleDataChange("room202", index, newVal)} />)}

                        </tr>

                        <tr>
                            <td>203</td>
                            {this.props.data.room203.map((each, index) => <EditableText data={each} key={each + index} handleDataChange={newVal => this.props.handleDataChange("room203", index, newVal)} />)}

                        </tr>

                        <tr>
                            <td>301</td>
                            {this.props.data.room301.map((each, index) => <EditableText data={each} key={each + index} handleDataChange={newVal => this.props.handleDataChange("room301", index, newVal)} />)}

                        </tr>
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default Table