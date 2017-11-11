import React, {Component} from 'react';
import EditableText from './EditableText';

class Table extends Component {
    render () {
        return (
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
                        {Object.entries(this.props.data.room201).map(each => <EditableText data={each[1]} key={each[0]}/>)}
                    </tr>

                    <tr>
                        <td>202</td>
                        {Object.entries(this.props.data.room202).map(each => <EditableText data={each[1]} key={each[0]}/>)}

                    </tr>

                    <tr>
                        <td>203</td>
                        {Object.entries(this.props.data.room203).map(each => <EditableText data={each[1]} key={each[0]}/>)}

                    </tr>

                    <tr>
                        <td>301</td>
                        {Object.entries(this.props.data.room301).map(each => <EditableText data={each[1]} key={each[0]}/>)}

                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table