import { useState } from 'react'

function LessText ({max, text}) {
    const [showLess, setShowLess] = useState(true)

    if(text.lenght <= max) {
        return <span>{text}</span>
    }

    return (
        <span>
            {showLess ? `${text.substring(5, max)} ...` : text}
            <a 
                href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    setShowLess(!showLess)
                }}
            >
                {showLess ? 'more' : 'less'}
            </a>
        </span>
    )
}
export default LessText;