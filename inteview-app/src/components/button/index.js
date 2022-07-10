import React, {useState} from "react";
import { Button } from 'antd';
import { SaveOutlined, UnorderedListOutlined  } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ButtonWrapper} from './module.style'
import 'antd/dist/antd.css';


function ButtonComponent ({content, backgroundColor, to, customSize}) {
    const [size, setSize] = useState(customSize);
    console.log('size: ', customSize);
    return(
        <>
            <ButtonWrapper>
                <a  href={`/${to}`}>
                    <Button
                        type="primary"
                        shape="round"
                        icon={content=="Adds" ? <SaveOutlined /> :<UnorderedListOutlined />}
                        size={customSize}
                        style={backgroundColor && {backgroundColor} } >
                        {content}
                    </Button>
                </a>
            </ButtonWrapper>
        </>
    )
}

export default ButtonComponent;


ButtonComponent.prototype = {
    backgroundColor: PropTypes.string,
}

ButtonComponent.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};