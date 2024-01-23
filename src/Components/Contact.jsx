import React from "react";
import ContactImage from "../assets/images/contact_us.png"


function Contact() {
    return (
        <>
            <div className="container ">
                <div className="row justify-content-center" style={{ marginTop: 150 }}>
                    <div className="col-md-10">
                        <div className="row ">

                            <div className="col-md-8 ">
                                <img src={ContactImage} alt="Image" className="w-100 align-self-start" />
                            </div>

                            <div className="col-md-4">
                                <form style={{ width: '26rem' }}>
                                    {/* Name input */}
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label name-contact-label">Name</label>
                                        <input type="text" className="form-control name-contact-input" />
                                    </div>
                                    {/* Email input */}
                                    <div data-mdb-input-init className="form-outline mb-4 ">
                                        <label className="form-label email-contact-label">Email address</label>
                                        <input type="email"className="form-control email-contact-input" />
                                    </div>
                                    {/* Message input */}
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <label className="form-label msg-contact-label">Message</label>
                                        <textarea className="form-control msg-contact-label" rows={4} />
                                    </div>
                                    {/* Checkbox */}
                                    <div className="form-check d-flex  mb-4">
                                        <input className="form-check-input me-2" type="checkbox" defaultValue defaultChecked />
                                        <label className="form-check-label">
                                            Send me a copy of this message
                                        </label>
                                    </div>
                                    {/* Submit button */}
                                    <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;
