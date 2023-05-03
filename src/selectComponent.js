import { useEffect, useState } from "react";


const Select = (props) => {

    // initializing all the states and variables
    const [selectValue, setSelectValue] = useState('');
    const [options, setOptions] = useState([]);
    const [open, setOpen] = useState(false);

    // use to open and close select options
    const handleOpen = () => {
         setOpen((prevVal) => !prevVal )
    }

    // use to select the value
    const handleSelectOption = (val) => {
        setSelectValue(val);
        handleOpen();
    }

    useEffect(() => {
        setSelectValue(props.defaultValue);
        setOptions(props.options);
    }, []);

    return(
        <>
            {/* select wrapper */}
            <div 
                className="select-wrapper"
                >
                <div 
                    onMouseEnter={handleOpen}
                    className="select-bar">
                    <span>{selectValue}</span>
                    {
                        open 
                        ? <span> - </span>
                        : <span> + </span>
                    }
                </div>

                <ul className="select-ul">
                    {
                        open && options.map((i, index) => {
                            return <li id={index} 										  className="select-li" 								onClick={() => 						handleSelectOption(i.value)}>{i.label}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Select;