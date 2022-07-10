import React from "react";
import Image from "next/image";
import {Layout, Typography} from "antd";
import {HeaderWrapper} from '../header/module.style'

const { Header } = Layout;

const { Text } = Typography;

function HeaderComponent({content, style}) {
    return(
        <HeaderWrapper>
            <Header style={style} >
                <Text >
                    {content}
                </Text>
                </Header>
        </HeaderWrapper>
    )
}

export default HeaderComponent;