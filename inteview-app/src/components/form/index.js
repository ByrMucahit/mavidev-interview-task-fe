import React, {useState} from "react";
import {Button, Form, Input, Layout, message} from 'antd';
import axios from 'axios';
import {FormWrapper} from './module.style'
import 'antd/dist/antd.css';
const {  Footer } = Layout;
import ButtonComponent from "../button/index";

export  default function FormComponent() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [city, setCity] = useState(null);
    const [town, setTown] = useState(null);



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
    }

    function save() {
        var masterData = {
            'cityName': city.toLocaleLowerCase().trim(),
            'townName': town.toLocaleLowerCase().trim()
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
                    message.success(`This Transaction has been done successfully. ${town}/${city} have been added.`)
                }
            })
            .catch((e) => {
                message.error(
                    ' City And Town You have tried to added  is already saved.',
                    4
                );
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

    return(
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
    )
}