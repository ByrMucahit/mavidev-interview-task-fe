import React from "react";
import Image from "next/image";
import {Layout, Typography} from "antd";
import {HeaderWrapper} from '../header/module.style'

const { Header } = Layout;

const { Text } = Typography;

function HeaderComponent({content}) {
    return(
        <HeaderWrapper>
            <Header style={{backgroundColor:'#4A5D6D', width:'100%'}} >
                <Image
                    src="/images/mavidev_logo_light.png"
                    alt="Picture of the author"
                    width={146}
                    height={36}
                    style={{ marginTop: 5}}
                 />
                <Text>
                    Interview Task
                </Text>
                </Header>
        </HeaderWrapper>
    )
}

export default HeaderComponent;