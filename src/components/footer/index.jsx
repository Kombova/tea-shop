import Image from "next/image";
import Logo from "../Logo";
const Footer = () => {
    return (
      <footer className="w-full min-h-[100px] bg-hunter-green mt-[10px] rounded-t-[10px] text-white px-4 py-6 lg:px-12 ">
        
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex items-center mb-4 lg:mb-0">
                  <Logo/>
              <span className="font-bold text-xl">Company Name</span>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:w-1/3">
              <div className="mb-4 lg:mb-0 flex overflow-hidden ">
                <Image src='/phone.svg' alt='Phone Number' width={20} height={20} />
                <a href="tel:+123456789">+1 (234) 567-89</a>
              </div>
              <div className='flex items-center gap-1 overflow-hidden'>
              <Image src='/mail.svg' alt='Phone Number' width={20} height={20} />
                <a href="mailto:info@company.com">info@company.com</a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0 overflow-hidden">
              <span> {new Date().getFullYear()} Company Name. All Rights Reserved.</span>
            </div>
            <div className="flex items-center mb-[20px]">
              <span className="mr-4">Follow us:</span>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <Image src='/instagram.svg' alt='Phone Number' width={20} height={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <Image src='/telegram.svg' alt='Phone Number' width={30} height={30} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Image src='/telegram.svg' alt='Phone Number' width={30} height={30} />
              </a>
            </div>
          </div>
        
      </footer>
    );
  };
  
  export default Footer;