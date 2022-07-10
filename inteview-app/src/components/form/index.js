import React, {useState} from "react";
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import {FormWrapper} from './module.style'
import 'antd/dist/antd.css';


export  default function FormComponent() {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [city, setCity] = useState(null);
    const [town, setTown] = useState(null);



    const onFormLayoutChange = ({ layout }) => {
        console.log('city', city);
        console.log('town', town);
        setFormLayout(layout);
    };

    function onGenericChange(title, value) {
        console.log('title: ', title);
        console.log('value: ', value);
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
               console.log('r: ', r);
            })
            .catch((e) => {

                message.error(
                    'Karavan eklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.',
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
            </Form>
        </FormWrapper>
    )
}