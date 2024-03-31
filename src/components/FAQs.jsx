import starIcon from '../assets/images/icon-star.svg'
import AccordionItem from './FAQ'
import { faqs } from '../utils/data'
import { useState } from 'react'

const FAQs = () => {
    const [expanded, setExpanded] = useState(null)

    return (
        <div className="bg-white rounded-lg shadow-2xl py-5 px-7 w-[90%] max-w-[350px] sm:max-w-[575px] sm:py-7 sm:px-9 ">
            <div className="flex gap-6 items-center mb-6">
                <img src={starIcon} alt="star icon" />
                <h1 className="text-4xl font-bold">FAQs</h1>
            </div>
            <div className="py-1">
                {faqs.map((faq, index) => {
                    const isExpanded = expanded === faq.id ? true : false
                    return (
                        <div key={faq.id}>
                            <AccordionItem
                                id={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isExpanded={isExpanded}
                                setExpanded={setExpanded}
                            />
                            {index < faqs.length - 1 && (
                                <hr className="border-purple-grayish opacity-50 my-6" />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FAQs
