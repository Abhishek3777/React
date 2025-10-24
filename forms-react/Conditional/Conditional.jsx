import React from 'react'

const Conditional = () => {
    const loading = false;
    const content = 'this is content';
    const loadingg = 'loading'

    return (
        <div>
            {loading ? content : loadingg}

        </div>
    )
}

export default Conditional
