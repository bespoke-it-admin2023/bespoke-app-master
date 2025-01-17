import React from 'react'
import styles from '../style'
import { motion } from 'framer-motion'
import resources1 from '../assets/resources1.png'
import resources2 from '../assets/resources2.png'

const Resources = () => {
  return (
    <section id="resources">
        <motion.div 
          className="sm:flex flex-col gap-4 hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4
          }}
          >
         <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] z-60 rounded-lg sm:flex hidden">
            <img src={ resources1 } alt="resources1" className="w-1/2 h-fit mx-auto rounded-l-lg"/>
            <div className="xs:flex row">
              <blockquote className={`px-[10%] pt-[5%]`}>
                <h1 className={`${styles.textResH2} font-poppins font-semibold text-brandBlack pb-6`}>
                  WHY DO FREIGHT FORWARDING COMPANIES USE BPO SERVICES?
                </h1>
                <p className={`text-white ${styles.textResHeadings} text-justify pb-2`}>
                  Freight forwarding companies specialize in managing and executing the flow of goods from one destination to another and act as an intermediary between shipper and transporter. This leads many to consider how & why freight forwarding companies...
                </p>
                <a href="/" className={`text-white font-poppins ${styles.textResH3}`}>Read more...</a>
              </blockquote>
            </div>
          </figure>

          <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] rounded-lg h-full sm:flex hidden">
            <img src={ resources2 } alt="resources2" className="w-1/2 h-fit mx-auto rounded-l-lg"/>
            <div className="">
              <blockquote className={`px-[10%] pt-[5%]`}>
                <h1 className={`${styles.textResH2} font-poppins font-semibold text-brandBlack pb-6`}>
                WHY SHOULD YOU CHOOSE TO HIRE A BESPOKE STAFF?
                </h1>
                <p className={`text-white ${styles.textResHeadings} text-justify pb-2`}>
                  Learn why choosing Bespoke as your offshore outsourcing partner makes business sense for you. Unlike the majority of off shore companies that offer outsourcing services, we have an Australian office and Australian executive staff...
                </p>
                <a href="/" className={`text-white font-poppins ${styles.textResH3}`}>Read more...</a>
              </blockquote>
            </div>
          </figure> 
        </motion.div>



        <motion.div 
          className="lg:hidden flex-col gap-4 pt-[10%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.4
          }}
          >
         <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] z-60 rounded-lg h-full mb-8">
            <img src={ resources1 } alt="resources1" className="w-1/2 h-fit mx-auto pt-1 rounded-lg"/>
            <div className="xs:flex row">
              <blockquote className={`px-[10%] pt-[5%]`}>
                <h1 className={`${styles.textResH2} font-poppins font-semibold text-brandBlack pb-6 text-center`}>
                  WHY DO FREIGHT FORWARDING COMPANIES USE BPO SERVICES?
                </h1>
                <p className={`text-white ${styles.textResHeadings} text-justify pb-2`}>
                  Freight forwarding companies specialize in managing and executing the flow of goods from one destination to another and act as an intermediary between shipper and transporter. This leads many to consider how & why freight forwarding companies...
                </p>
                <a href="/" className={`text-white font-poppins ${styles.textResH3}`}>Read more...</a>
              </blockquote>
            </div>
          </figure>

          <figure className="flex-row bg-gradient-to-t from-indigo-400 to-blue-300 mx-[10%] rounded-lg h-full">
            <img src={ resources2 } alt="resources2" className="w-1/2 h-fit mx-auto pt-1 rounded-lg"/>
            <div className="">
              <blockquote className={`px-[10%] pt-[5%]`}>
                <h1 className={`${styles.textResH2} font-poppins font-semibold text-brandBlack pb-6 text-center`}>
                WHY SHOULD YOU CHOOSE TO HIRE A BESPOKE STAFF?
                </h1>
                <p className={`text-white ${styles.textResHeadings} text-justify pb-2`}>
                  Learn why choosing Bespoke as your offshore outsourcing partner makes business sense for you. Unlike the majority of off shore companies that offer outsourcing services, we have an Australian office and Australian executive staff...
                </p>
                <a href="/" className={`text-white font-poppins ${styles.textResH3}`}>Read more...</a>
              </blockquote>
            </div>
          </figure> 
        </motion.div>
    </section>
  )
}

export default Resources