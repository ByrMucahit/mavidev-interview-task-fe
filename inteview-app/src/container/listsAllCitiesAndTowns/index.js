import axios from "axios";
import {Image, Layout, message} from "antd";
import React, {useEffect, useState} from "react";
import Table from '../../components/table/index'
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import Button from "../../components/button/index";
import MetaHeader from "../meta/header";
import ButtonComponent from "../../components/button/index";
const {  Footer } = Layout;

function listsAllCitiesAndTowns() {

    const [data, setData] = useState(null);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/lists`)
            .then(res => {
                if(res.status == 200 || res.status == 201  ) {
                    setData(res.data);
                }
                console.log("res: ", res);
            })
    }, [flag]);

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

console.log('data: ', typeof data);
    return (
        <div className={styles.container}>
            <MetaHeader title={"Create New App"} />

            <main className={styles.main}>
                <Layout style={{maxHeight: 500}}>
                    {data && !isEmpty(data) // 👈 null and undefined check
                        ?
                        <Table content={data}/> :
                        <Image src={"/images/corrupted-file.png"}  style={{maxWidth: 400}} />
                    }
                    <Footer style={{display:'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                        <ButtonComponent backgroundColor={"#4A5D6D"} customSize={'small'}  content={'Home'} to={''} icon={'home'}/>
                        <ButtonComponent backgroundColor={"#4A5D6D"} customSize={'small'}  content={'Adds'} to={'adds'} icon={'save'}/>
                    </Footer>
                </Layout>
            </main>

        </div>

    )
}


export  default listsAllCitiesAndTowns;