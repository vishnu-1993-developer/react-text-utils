import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleLowerClick = ()=>{
        let lowercase_text = text.toLowerCase();
        setText(lowercase_text);
    }

    const handleCapitalizeEachWord = ()=>{
        let capitalized_text = text.split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
        setText(capitalized_text);
    }

    const handleRemoveExtraSpaces = ()=>{
        let updated_text = text.split(' ').filter(n => n).join(' ');
        setText(updated_text);
    };

    const handleTextClear = ()=>{
        setText('');
    }

    const handleCopyText = ()=>{
        let copy_text = document.getElementById('my_text');
        copy_text.select();
        copy_text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(copy_text.value);
    }
    const [text,setText] = useState('');

    return (
        <>
        <div className="container my-3">
            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{ props.heading }</h1>
            <div className="mb-3"></div>
                <div className="mb-3">
                <textarea id="my_text" style={{backgroundColor:props.mode=='dark' ? 'grey' : 'white'}} className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
            <button onClick={handleLowerClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleTextClear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalizeEachWord}>Capitalize Each Word</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
        </div>

        <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1>Your text summary</h1>
            <p><b>Words:</b> { text.split(' ').filter(n => n).length }</p>
            <p><b>Characters:</b> { text.length }</p>
            <p><b>Time to Read: </b> { 0.08*text.length } </p>

            <h2 className="my-3">Preview</h2>
            <p> {text} </p>
        </div>
        </>
    )
}