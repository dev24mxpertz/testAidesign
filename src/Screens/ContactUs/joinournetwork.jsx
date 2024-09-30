import React, { useState } from 'react';
import { toast } from "react-toastify"
import { useDispatch } from 'react-redux';
import { joinNetworkUser } from '../../Redux/slices/joinournetworkSlice';

function JoinOurNetwork() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
        companySize:'',
        Industry:''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(joinNetworkUser(formData));
            toast.success("Submission successful");
            setFormData({
                name: '',
                mobile: '',
                email: '',
                subject: '',
                message: '',
                companySize:'',
                Industry:''

            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className='join-network_Wrapper'>
                <div className=''>
                    <div className='join-network-form-box py-3'>
                        <div>
                            <dv className="joinnetwork-heading">
                                <h1 className='text-uppercase'>Get in touch with us today</h1>
                                <p>Reach out to us easily by completing the form below. We look forward to hearing from you!</p>
                            </dv>
                        </div>
                        <div className='join-form-box-outer'>     
                            <div className='join-form-box'>
                                <div className='join-network-contact_form justify-content-center justify-content-lg-start'>
                                    <div className="">
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                                    </div>
                                    <div className="">
                                        <input type="tel" minLength={7} maxLength={15} className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" />
                                    </div>
                                    <div className="">
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                                    </div>
                                    <div className="">
                                        <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                                    </div>
                                    <div className="">
                                        <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Write Your Message" />
                                    </div>
                                    <div className="">
                                        <input type="number" className="form-control" name="companySize" value={formData.companySize} onChange={handleChange} placeholder="companySize" />
                                    </div>
                                    <div className="">
                                        <input type="text" className="form-control" name="Industry" value={formData.Industry} onChange={handleChange} placeholder="Industry" />
                                    </div>
                                 
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <button className='send-btn-join-network' onClick={handleSubmit}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinOurNetwork