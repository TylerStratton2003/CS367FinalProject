import React from "react";


const TagCheckBox = (props) => {

    const[checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    }

    return (
        <div className="col col-sm-4">
            <Checkbox
            label = "My Value"
            Value={checked}
            onChange={handleChange}
            />
            <p>Is Tags checked? {checked.toString()}</p>
        </div>
    );
};

const Checkbox = ({label, value, onChange}) => {
    return(
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default TagCheckBox;