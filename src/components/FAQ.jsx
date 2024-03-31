import plusIcon from '../assets/images/icon-plus.svg'
import minusIcon from '../assets/images/icon-minus.svg'

const FAQ = ({ id, question, answer, isExpanded, setExpanded }) => {
    const handleClick = () => {
        if (isExpanded) {
            setExpanded(null)
        } else {
            setExpanded(id)
        }
    }

    return (
        <div>
            <button
                className="flex justify-between items-center gap-6 w-full py-2"
                onClick={handleClick}
            >
                <h2 className="text-left font-semibold hover:text-purple">{question}</h2>
                <img src={isExpanded ? minusIcon : plusIcon} alt="see answer" />
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-purple-grayish ${
                    isExpanded
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">{answer}</div>
            </div>
        </div>
    )
}

export default FAQ
