import React, {useState} from 'react'

export default function TextConverter(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","Success");
        
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
        
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Cleared Text","success");
        
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy To Clipboard","success");
        
    }

    const handleExtraSpace = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Remove Extra spaces","success");
        
    }


    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text, setText] = useState('');
    return( 
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'? 'black':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox"  rows={10}></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}> Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}> Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClearClick}> Clear Text </button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}> Copy Text </button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace}> Remove Spaces </button>
        </div>
        <div className='container my-3'  style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your text and word count</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
    
}