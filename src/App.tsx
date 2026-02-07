import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const hasSeen = localStorage.getItem("aero_seen");

    // Desktop → no animation
    if (!isMobile) {
      setShowContent(true);
      setAnimate(false);
      return;
    }

    // Mobile + already seen → skip animation
    if (hasSeen) {
      setShowContent(true);
      setAnimate(false);
      return;
    }

    // Mobile + first visit
    setAnimate(true);

    const timer = setTimeout(() => {
      setShowContent(true);
      localStorage.setItem("aero_seen", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className="
        fixed
        inset-0
        w-screen
        h-screen
        overflow-hidden
        bg-[url('/bg-mobile.jpg')]
        md:bg-[#0C0C0C]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      "
    >
      <div className="flex flex-col items-center justify-center px-6">
        
        <motion.div
          className=""
          initial={animate ? { opacity: 0, scale: 0.96 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg 
            width="192" 
            height="54"
            viewBox="0 0 192 54" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path d="M40.5918 7.34238L41.9077 1.27689H57.3953L46.564 52.6739H31.0765L32.2912 46.7149C28.1409 51.7162 23.7881 53.9509 18.322 53.9509C7.38952 53.9509 0 46.3955 0 32.6684C0 17.7707 8.70546 -6.10352e-05 25.7115 -6.10352e-05C31.7851 -6.10352e-05 37.4538 2.55384 40.5918 7.34238ZM16.095 29.2632C16.095 35.4351 20.2452 39.4787 25.6102 39.4787C29.2544 39.4787 32.4936 37.5634 34.8219 34.6903L38.1623 19.154C36.1377 16.3874 32.5948 14.472 28.4446 14.472C21.2576 14.472 16.095 21.1759 16.095 29.2632ZM54.8465 30.6466C54.8465 14.1527 66.7912 -6.10352e-05 83.4935 -6.10352e-05C95.843 -6.10352e-05 105.966 8.19367 105.966 23.1978C105.966 26.3902 105.358 30.3274 104.953 32.1363H70.3341V32.7748C70.3341 35.3287 73.9782 41.2878 82.0763 41.2878C86.1253 41.2878 90.883 40.1174 93.5149 38.0955L98.2725 48.9495C93.5149 52.3546 86.834 53.9509 80.8616 53.9509C65.2727 53.9509 54.8465 45.4379 54.8465 30.6466ZM71.8524 21.4951H92.0976C92.1989 21.2823 92.1989 20.9631 92.1989 20.7503C92.1989 17.4515 89.5671 12.663 82.7848 12.663C76.9138 12.663 72.6622 17.5579 71.8524 21.4951ZM118.908 52.6739H103.319L114.15 1.27689H129.739L128.322 7.66162C132.371 3.08589 137.837 -6.10352e-05 145.226 -6.10352e-05L141.886 16.0682C141.076 15.8553 138.95 15.4297 136.825 15.4297C132.472 15.4297 128.322 17.4515 125.589 20.4311L118.908 52.6739ZM138.039 30.3274C138.039 14.472 149.883 -6.10352e-05 166.788 -6.10352e-05C183.287 -6.10352e-05 191.993 10.3219 191.993 23.7299C191.993 39.5851 180.15 53.9509 163.245 53.9509C146.846 53.9509 138.039 43.6289 138.039 30.3274ZM176.101 24.4747C176.101 18.1964 172.355 14.472 166.282 14.472C158.892 14.472 154.033 21.708 154.033 29.4762C154.033 35.7543 157.778 39.4787 163.852 39.4787C171.141 39.4787 176.101 32.2427 176.101 24.4747Z" fill="white"/>
          </svg>
        </motion.div>

        {showContent && (
          <motion.div
            className="flex flex-col items-center"
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mt-[12px] text-white/60 text-center text-[26px] md:text-[18px] font-['PSBold'] md:text-base max-w-[783px] md:max-w-[822px] ">
              Step into AERO, a world built for endless possibilities. Whether you're chasing high-speed pursuits, running thriving businesses, or simply soaking up the city's vibrant life, our server offers the perfect balance of realism, roleplay, and fun. 
            </p>

            <button className="bg-white/3 cursor-pointer w-[426px] h-[58px] text-white/40 flex items-center justify-center gap-[5px] rounded-[8px] mt-[28px]">
              Join The Discord
              <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7697 1.435C17.3347 0.77 15.8064 0.28 14.1964 0C13.9981 0.35 13.7647 0.828333 13.6131 1.21333C11.9097 0.956667 10.2181 0.956667 8.54975 1.21333C8.38642 0.828333 8.15308 0.35 7.95475 0C6.34475 0.28 4.81642 0.77 3.38142 1.435C0.488085 5.79833 -0.293581 10.0567 0.0914186 14.245C2.01642 15.68 3.87142 16.5434 5.70308 17.115C6.15808 16.4967 6.55475 15.8317 6.90475 15.1434C6.23975 14.8984 5.60975 14.5834 5.01475 14.2217C5.17808 14.105 5.32975 13.9767 5.48142 13.86C9.13307 15.5634 13.0881 15.5634 16.6931 13.86C16.8447 13.9884 16.9964 14.105 17.1597 14.2217C16.5647 14.5834 15.9231 14.8867 15.2697 15.1434C15.6197 15.8317 16.0164 16.4967 16.4714 17.115C18.3031 16.5434 20.1697 15.68 22.0831 14.245C22.5381 9.38004 21.3014 5.16833 18.7931 1.435H18.7697ZM7.39475 11.6784C6.29808 11.6784 5.39975 10.6634 5.39975 9.41504C5.39975 8.1667 6.27475 7.1517 7.39475 7.1517C8.51475 7.1517 9.40141 8.1667 9.38974 9.41504C9.38974 10.6517 8.51475 11.6784 7.39475 11.6784ZM14.7564 11.6784C13.6597 11.6784 12.7614 10.6634 12.7614 9.41504C12.7614 8.1667 13.6364 7.1517 14.7564 7.1517C15.8764 7.1517 16.7631 8.1667 16.7514 9.41504C16.7514 10.6517 15.8764 11.6784 14.7564 11.6784Z" fill="white" fill-opacity="0.2"/>
              </svg>

            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}