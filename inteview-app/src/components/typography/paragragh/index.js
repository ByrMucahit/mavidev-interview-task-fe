import React, {useState} from "react";
import {Layout, Typography} from "antd";
import {ParagraphWrapper} from './module.style'

const { Content } = Layout;
const { Paragraph } = Typography;
function ParagraphComp({content}) {

    return (
        <ParagraphWrapper>
            <Content>
                <Paragraph >
                    {content}
                </Paragraph>
            </Content>
        </ParagraphWrapper>
    )
}

export default ParagraphComp;