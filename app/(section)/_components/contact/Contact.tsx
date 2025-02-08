import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="new-container-2 text-center">
        <h1 className="font-olive newSeperator -translate-y-24 font-bold mb-8">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto items-start gap-12 px-4">
        {/* Google Map */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1768889154746!2d78.50088987483603!3d17.330913488082003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97a64b0a6e99%3A0x76aaf26032efbd10!2sMeerpet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1695734698374!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
          <div className="flex items-center gap-4">
            <Image
              src="/images/home-address.png"
              width={40}
              height={40}
              alt="Home address"
            />
            <p className="text-lg font-poppins capitalize leading-relaxed">
              Meerpet Rd, near meerpet masjid, Sarvodaya Colony, Meerpet,
              Hyderabad, Telangana 500058
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/images/phone-call.png"
              width={40}
              height={40}
              alt="Phone call"
            />
            <p className="text-lg font-poppins">+91-7995987254</p>
          </div>

          <div className="flex items-center gap-4">
            <Image src="/images/gmail.png" width={40} height={40} alt="Email" />

            <Link
              href="mailto:razahussain7196@gmail.com?subject=Your%20Subject&body=Hello%2C%20I%20wanted%20to%20reach%20out%20about%20..."
              className="text-lg font-poppins"
            >
              razahussain7196@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/instagram.png"
              width={40}
              height={40}
              alt="Instagram"
            />
            <Link
              href="https://www.instagram.com/jr_ac_services/"
              target="_blank"
              className="text-lg font-poppins"
            >
              jr_ac_services
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/just-dial.png"
              width={40}
              height={40}
              alt="just-dial"
            />
            <Link
              href="https://jsdl.in/DT-28M2FZPCM8N"
              target="_blank"
              className="text-lg font-poppins"
            >
              Jr Airconditioner A Complete AIR Condition Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
