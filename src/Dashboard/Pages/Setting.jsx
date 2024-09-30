import { Switch } from 'antd';
import React, { useState } from 'react';

function Setting() {
    const initialSwitchStates = [
        { title: "Push Notifications", isOn: true },
        { title: "Email", isOn: true },
        { title: "SMS", isOn: false },
    ];

    const [switchStates, setSwitchStates] = useState(initialSwitchStates);

    const toggleSwitch = (index) => {
        const newSwitchStates = [...switchStates];
        newSwitchStates[index].isOn = !newSwitchStates[index].isOn;
        setSwitchStates(newSwitchStates);
    };
    return (
        <>
            <div className='Settings_wrapper' >
                <div>
                    <div className='Setting_option_container mx-3 my-3'>
                        <ul>
                            {switchStates.map((item, index) => (
                                <li key={index}>
                                    <p style={{color: "black"}}>{item.title}</p>
                                    <div className="">
                                        <span>{item.isOn ? 'On' : 'Off'}</span>
                                        <Switch defaultChecked={item.isOn} onChange={() => toggleSwitch(index)} />
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting
