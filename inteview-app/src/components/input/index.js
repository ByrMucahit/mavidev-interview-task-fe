import { Input } from 'antd';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

export default function InputComponent({placeholder, value}) {
    return (
        <Input placeholder={placeholder} value={value} />
    )
}

InputComponent.prototype = {
    placeholder: PropTypes.string,
}