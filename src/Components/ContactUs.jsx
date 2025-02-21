import { Button } from "./index.js"
import { contactImg, emailIcon, phoneIcon, mapSecondaryIcon } from "../assets/index.js"

const emails = ["support@gmail.com", "info@domain.com", "name@company.com"]
const numbers = ["+132 (599) 254 669", "+123 (669) 255 587", "+01 (977) 2599 12"]

const ContactUs = () => {
    return (
        <section id="contact" className="w-full bg-blue  text-white mt-20">

            <div className="w-full max-w-[1260px] h-full mx-auto grid grid-cols-[1fr_2fr] max-xl:grid-cols-1 gap-10 p-10 max-xl:p-0 justify-center items-center">

                <div className="w-full h-full translate-y-[-20%] max-xl:translate-y-0 ">
                    <img src={contactImg} alt="" className="h-full object-cover object-left max-xl:w-full max-xl:aspect-video max-xl:max-h-[400px]" />
                </div>

                <div className="flex flex-col justify-center items-center">

                    <div className="flex max-md:flex-col justify-center items-center w-full h-full border-b-[1px] pb-10">

                        <div className="p-10 flex flex-col max-md:flex-row justify-center max-md:justify-start max-md:w-full items-start gap-10 max-md:mx-auto">

                            <img src={emailIcon} alt="" className="h-12 my-auto object-center" />

                            <div>
                                {emails.map((email, index) => (
                                    <p key={index} className="font-[600] text-nowrap">{email}</p>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 border-l-[1px] max-md:border-0 flex flex-col max-md:flex-row justify-center max-md:justify-start max-md:w-full items-start gap-10 max-md:mx-auto">

                            <img src={phoneIcon} alt="" className="h-10 my-auto object-center" />

                            <div>
                                {numbers.map((number, index) => (
                                    <p key={index} className="font-[600] text-nowrap">{number}</p>
                                ))}
                            </div>

                        </div>

                        <div className="p-10 border-l-[1px] max-md:border-0 flex flex-col max-md:flex-row justify-center max-md:justify-start max-md:w-full items-start gap-10 max-md:mx-auto">

                            <img src={mapSecondaryIcon} alt="" className="h-12 my-auto object-center" />

                            <p className="font-[600] whitespace-pre">
                                3146 Koontz, California
                                <br />
                                Quze.24 Second floor
                                <br />
                                36 Street, Melbourne
                            </p>

                        </div>

                    </div>

                    <div className="w-full flex max-md:flex-col justify-between max-xl:justify-center max-xl:gap-10 items-center py-10">
                        <h3 className="text-2xl font-[800] uppercase tracking-wide max-md:text-center px-10">Join Us For Regular Updates!</h3>
                        <Button text={"Learn More"} hoverNegative={true} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
