import axios from "axios";
import {message} from "antd";
import {useEffect, useState} from "react";
import Table from '../../components/table/index'

function listsAllCitiesAndTowns() {

    const [data, setData] = useState(null);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/lists`)
            .then(res => {
                setData(res.data);
                console.log("res: ", res);
            })
    }, [flag]);


    return (
        <Table content={data}/>
    )
}


export  default listsAllCitiesAndTowns;