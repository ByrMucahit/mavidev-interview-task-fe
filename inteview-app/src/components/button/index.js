import React, {useState} from "react";
import { Button } from 'antd';
import { SaveOutlined, UnorderedListOutlined, HomeOutlined  } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ButtonWrapper} from './module.style'
import 'antd/dist/antd.css';

const icons = {
    "save": "SaveOutlined",
    "lists": "UnorderedListOutlined",
    "home": "HomeOutlined"
}

function getIconByName(icon) {
    if (icon == "SaveOutlined") {
        return <SaveOutlined style={{ fontSize: 16 }} />;
    }
    if (icon == "HomeOutlined") {
        return <HomeOutlined style={{ fontSize: 16 }} />;
    }

    if (icon == "UnorderedListOutlined") {
        return <UnorderedListOutlined style={{ fontSize: 16 }} />;
    }
}

function ButtonComponent ({content, backgroundColor, to, customSize, icon}) {
    const [size, setSize] = useState(customSize);
    console.log('icon: ', icon);
    const basketballPlayer = {
        name: "James",
        averagePointsPerGame: 20,
        height: "6 feet, 2 inches",
        position: "shooting guard"
    };
    return(
        <>
            <ButtonWrapper>
                <a  href={`/${to}`}>
                    <Button
                        type="primary"
                        shape="round"
                        icon={getIconByName(icons[icon])}
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