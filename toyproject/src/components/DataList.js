import React from 'react';
import './DataList.css';
import DataCard from './DataCard'

const DataList = props => {
    const postdata = props.data
    var objkey = Object.keys(postdata)

    const data = objkey.map(key => {
        return <DataCard key={key} datum={postdata[key]} id={key}></DataCard>
    }

    );

    return <div className="Data-list">{data}</div>;
}

export default DataList 