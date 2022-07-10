import React from "react";
import { Button } from 'antd';
import { SaveOutlined, UnorderedListOutlined  } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ButtonWrapper} from './module.style'
import 'antd/dist/antd.css';


function ButtonComponent ({content, backgroundColor, to}) {
    return(
        <>
            <ButtonWrapper>
                <a  href={`/${to}`}>
                    <Button type="primary" shape="round" icon={content=="Adds" ? <SaveOutlined /> :<UnorderedListOutlined />} style={backgroundColor && {backgroundColor}} >
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
    size: PropTypes.oneOf(['small', 'medium', 'large']),

}

ButtonComponent.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};