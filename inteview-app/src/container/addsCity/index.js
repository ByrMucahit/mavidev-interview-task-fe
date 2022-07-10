import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import {Layout} from "antd";
import FormInput from "../../components/form";
import MetaHeader from "../meta/header";


export default function AddsCity() {
    return (
        <div className={styles.container}>
            <MetaHeader title={"Create Next App"}/>
            <main className={styles.main}>
                <Layout style={{minWidth: 400, maxHeight:400, borderRadius: 7}}>
                    <FormInput/>
                </Layout>
            </main>
        </div>
    )
}