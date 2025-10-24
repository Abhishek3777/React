import React from 'react'

const Lists = () => {
    const languagesDict = [
        { id: 1, language: 'JS' },
        { id: 2, language: 'Python' },
        { id: 3, language: 'Java' },
        { id: 4, language: 'C' },
        { id: 5, language: 'C++' },
        { id: 6, language: 'C#' }
    ];
    return (
        <div>
            <ul>
                {languagesDict.map((lang) => (
                    <li key={lang.id}>{lang.language}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lists
