import axios from "axios";
import {Layout, message} from "antd";
import {useEffect, useState} from "react";
import Table from '../../components/table/index'
import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import Button from "../../components/button/index";
import MetaHeader from "../meta/header";
const {  Footer } = Layout;

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
        <div className={styles.container}>
            <MetaHeader title={"Create New App"} />

            <main className={styles.main}>
                <Layout>
                    <Table content={data}/>

                    <Footer style={{display:'flex', justifyContent: 'space-around'}}>
                        <Button backgroundColor={"#4A5D6D"} customSize={'small'}  content={'Adds'} to={'adds'}/>
                    </Footer>
                </Layout>
            </main>

        </div>

    )
}


export  default listsAllCitiesAndTowns;