import React from 'react'


// One way of Destructuring.
// removing props from constructor
// only adding those property from props which are needed knows as destruturing
const Destructure = ({name, nickName}) => {
    console.log(name)
    return (
    <div>
        <h1>
            Hello {name} a.k.a {nickName}
            </h1>
    </div>
    )
}

export default Destructure
