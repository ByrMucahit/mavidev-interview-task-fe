import styles from "../../../styles/Home.module.css";
import Head from "next/head";
import {Button, Form, Input, Layout, message} from "antd";
import MetaHeader from "../meta/header";
import ButtonComponent from "../../components/button";
import {FormWrapper} from "./module.style";
import axios from "axios";
import React, {useState} from "react";
const {  Footer } = Layout;

export default function AddsCity() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [city, setCity] = useState(null);
    const [town, setTown] = useState(null);
    const [count, setCount] = useState(null);



    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    function onGenericChange(title, value) {

        if(title == "city") {
            setCity(value)
        }
        else if(title == "town") {
            setTown(value);
        }
        else if(title== "count") {
            setCount(value);
        }
    }

    function save() {
        var masterData = {
            'cityName': city?.toLocaleLowerCase().trim(),
            'townName': town?.toLocaleLowerCase().trim(),
            'countOfPeople': count,
        }


        const ins = axios.create({
            baseURL:'http://localhost:8080',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });

        ins
            .post('/api/save', masterData)
            .then((r) => {

                if(r.status == 200 || r.status == 201) {
                    setTown("");
                    setCity("");
                    setCount("");
                    message.success(`This Transaction has been done successfully. ${town}/${city} have been added.`)
                }
            })
            .catch((e) => {
                console.log('e: ', e);
                if(e.response.data.message == "OVERFLOW_TOWN") {
                    message.error(
                        ' A City cannot have Town more than 5.',
                        4
                    );
                }
                else if(e.response.data.message == "SAVED_ENTITY_ERROR") {
                    message.error(
                        ' City And Town You have tried to added  is already saved.',
                        4
                    );
                }
                else {
                    message.error(
                        ' Something went wrong. Please fill in the all blanks ,then try again.',
                        4
                    );
                }

            });
    }


    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 14,
                },
            }
            : null;
    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
            : null;

    return (
        <div className={styles.container}>
            <MetaHeader title={"Create Next App"}/>
            <main className={styles.main}>
                <Layout style={{minWidth: 400, maxHeight:400, borderRadius: 7}}>
                    <FormWrapper>
                        <Form
                            {...formItemLayout}
                            layout={formLayout}
                            form={form}
                            initialValues={{
                                layout: formLayout,
                            }}
                            onValuesChange={onFormLayoutChange}
                        >
                            <Form.Item label="City" >
                                <Input placeholder="input city" onChange={(value) => onGenericChange('city', value.target.value)} value={city}/>
                            </Form.Item>
                            <Form.Item label="Town">
                                <Input placeholder="input town"  onChange={(value) => onGenericChange('town', value.target.value)} value={town}/>
                            </Form.Item>

                            <Form.Item label="Count">
                                <Input placeholder="input count"  onChange={(value) => onGenericChange('count', value.target.value)} value={count}/>
                            </Form.Item>
                            <Form.Item {...buttonItemLayout} style={{display:'flex'}}>
                                <Button type="primary"
                                        onClick={() => {
                                            save();
                                        }
                                        }
                                >Save</Button>
                            </Form.Item>
                            <Footer style={{display:'flex', flexDirection:"column"}}>
                                <ButtonComponent backgroundColor={"#4A5D6D"} customSize={'small'}  content={'Home'} to={''} icon={"home"}/>
                                <ButtonComponent backgroundColor={"#4A5D6D"} customSize={'small'}  content={'Lists'} to={'lists'} icon={"lists"}/>
                            </Footer>
                        </Form>
                    </FormWrapper>
                </Layout>
            </main>
        </div>
    )
}