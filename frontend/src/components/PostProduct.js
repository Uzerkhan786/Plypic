import React, { useRef, useState } from 'react'

const PostProduct = () => {
    const [files, setFiles] = useState(null);
    const [name, setName] = useState(null);
    const inputRef = useRef();
    const postData = async () => {
        const res = await fetch(`https://plypicker-vvy3.onrender.com/api/v1/products`, {
            method: 'POST',
            body: JSON.stringify(files),
            // headers: {
            //     "Content-Type": "multipart/form-data",
            // }
        })
        const json = await res.json();
        console.log(json);

    }
    // const change = (e) => {
    //     setInfo({ ...info, [e.target.id]: e.target.value })
    // }
    const submit = (e) => {
        e.preventDefault();
        postData();
    }
    return (
        <div>
            <form onSubmit={submit} enctype="multipart/form-data">
                <input type="text" id='productName' onChange={(e) => setName(e.target.value)} />
                {/*  <input type="text" id='productDescription' onChange={change} />
                <input type="text" id='price' onChange={change} />
                <input type="text" id='department' onChange={change} />
                <input type="file" id='image' onChange={change} /> */}
                <input
                    type="file" id="input"
                    // onChange={ e => setFiles(e.target.value)}
                    onChange={() => setFiles(inputRef.current.files[0])}
                    ref={inputRef}
                />
                <button type='submit'>submit</button>

            </form>
        </div>
    )
}

export default PostProduct
