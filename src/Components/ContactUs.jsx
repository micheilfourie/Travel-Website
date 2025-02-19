import { Button } from "./index.js"
import { contactImg, emailIcon, phoneIcon, mapSecondaryIcon } from "../assets/index.js"

const emails = ["support@gmail.com", "info@domain.com", "name@company.com"]
const numbers = ["+132 (599) 254 669", "+123 (669) 255 587", "+01 (977) 2599 12"]

const ContactUs = () => {
    return (
        <section className="w-full bg-blue  text-white mt-20">

            <div className="w-full max-w-[1200px] h-full mx-auto grid grid-cols-[1fr_2fr] gap-10 p-10 justify-center items-center">

                <div className="w-full h-full translate-y-[-20%]">
                    <img src={contactImg} alt="" className="h-full object-cover object-left min-w-[350px]" />
                </div>

                <div className="flex flex-col justify-center items-center">

                    <div className="flex justify-center items-center w-full h-full border-b-[1px]">

                        <div className="p-10 mb-10 flex flex-col justify-center items-start gap-10">
                            <img src={emailIcon} alt="" className="h-12" />
                            <div>
                                {emails.map((email, index) => (
                                    <p key={index} className="font-[600] text-nowrap">{email}</p>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 border-l-[1px] mb-10 flex flex-col justify-center items-start gap-10">
                            <img src={phoneIcon} alt="" className="h-10" />
                            <div>
                                {numbers.map((number, index) => (
                                    <p key={index} className="font-[600] text-nowrap">{number}</p>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 border-l-[1px] mb-10 flex flex-col justify-center items-start gap-10">
                            <img src={mapSecondaryIcon} alt="" className="h-12" />
                            <p className="font-[600] whitespace-pre">
                                3146 Koontz, California
                                <br />
                                Quze.24 Second floor
                                <br />
                                36 Street, Melbourne
                            </p>
                        </div>

                    </div>

                    <div className="w-full flex justify-between items-center py-10">
                        <h3 className="text-2xl font-[800] uppercase tracking-wide">Join Us For Regular Updates!</h3>
                        <Button text={"Learn More"} hoverNegative={true} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
