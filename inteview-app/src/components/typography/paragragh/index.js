import React, {useState} from "react";
import {Layout, Typography} from "antd";

const { Content } = Layout;
const { Paragraph, Text } = Typography;
function ParagraphComp({content}) {

    const [ellipsis, setEllipsis] = useState(true);


    return (
        <Content>
            <Paragraph >
                {content}
            </Paragraph>
        </Content>
    )
}

export default ParagraphComp;