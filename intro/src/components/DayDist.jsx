import React from 'react';


export default function DayDist(props) {

    let remove = props.remove;
    let change = props.change;

    return (
        <tr>
            <td className='daydist-info'>{props.day.date}</td>
            <td className='daydist-info'>{props.day.distance}</td>
            <td><span
                className='daydist-action'
                onClick={() => change(props.day)}>&#9998;</span>
            </td>
            <td><span
                className='daydist-action'
                onClick={() => remove(props.day.id)} >&#10060;</span>
            </td>
        </tr>
    );
}
