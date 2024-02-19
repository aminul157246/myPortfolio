
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import swal from "sweetalert";



const ContactUs = () => {

    const form = useRef(); 

    const sendEmail = (e) => {



        e.preventDefault();

        emailjs.sendForm(
            'service_uqbodum',
            'template_jw70snv',
            form.current,
            '4Y0AINGKMq_de7NnT'
        )
            .then((result) => {
                swal("Message sent successfully");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            

    };


    return (
        <div id="contact" className="my-12">
            <h2 className="text-5xl font-bold text-center mb-8 title-style">GET IN <span className="text-indigo-500">TOUCH</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" space-y-3 p-5">
                    <h3 className="text-3xl font bold"> DON'T BE SHY !</h3>
                    <p>Feel free to in touch with me. I am always open to discussing new projects, crate ideas or opportunity to be part of your visions</p>
                    <div className="flex gap-3 items-center">
                        <CgMail className="text-3xl text-indigo-500"></CgMail>
                        <div>

                            <p>aminul.islam.157246@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaPhone className="text-2xl text-indigo-500"></FaPhone>
                        <div>
                            <p>01761-743556</p>
                        </div>
                    </div>
                    <div className="flex gap-2   items-center">

                        <a href="https://github.com/aminul157246">
                            <FaGithub className="text-2xl hover:text-indigo-500"></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/aminulislam157246/">
                            <FaLinkedinIn className="text-2xl hover:text-indigo-500"></FaLinkedinIn>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebookF className="text-2xl hover:text-indigo-500"></FaFacebookF>
                        </a>
                    </div>
                </div>
                <div className="   pt-6 p-6">

                    <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 items-center justify-center">
                        <input className="bg-base-200 rounded-3xl lg:px-4 py-2" type="text" placeholder="Your Name"   name="form_name" />
                        <input className="bg-base-200 rounded-3xl lg:px-4 py-2" type="email" placeholder="Your Email" name="form_email" />
                <input className="bg-base-200 rounded-3xl lg:px-4 py-2" type="text" placeholder="Your Subject" /> 
                </div>

                <div className="flex justify-center items-center">
                        <textarea className="bg-base-200 rounded-3xl mt-6 lg:p-4"   placeholder="Your Message" id="" cols="85" rows="5" name="message" />
                        </div>
                        <div className="pl-20 mt-6">
                        <input className="btn  rounded-3xl hover:bg-indigo-500" type="submit" value="Send Message" />

                        </div>
                        
       </form>


                </div>
            </div>

        </div>
    );
};

export default ContactUs;