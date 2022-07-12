import React from 'react';
import 'antd/dist/antd.css';
import { Space, Table, Tag } from 'antd';
import {TableWrapper} from './module.style'
import {capitalizeFirstLetter} from '../../../public/constant'



 function  TableComponents ({ content }) {

    console.log('content from table Component: ', content);
    return (
        <TableWrapper>
            <>
            {content && content.map((iter) => (
                <table className={'table-class'}>
                    <tr key={`${iter.cityName}-tr`}>
                        <th>{capitalizeFirstLetter(iter.cityName)}</th>
                        <th>{'Count'}</th>
                    </tr>

                        {iter.towns.map((town) => (
                            <tr key={`${town.townName}-tr`}>
                                <td key={`${town.townName}-td`}>{capitalizeFirstLetter(town.townName)}</td>
                                <td key={`${town.countOfPeople}-td`}>{town.countOfPeople}</td>
                            </tr>
                        ))}


                </table>
            ))}
            </>
        </TableWrapper>
    )
}

export default TableComponents;