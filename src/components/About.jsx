import React, { useState } from 'react'

export default function About(props) {
  /*
    const[myStyle,setMyState]=useState({
        color: 'white',
        backgroundColor:'black'
    })//setting iniotial state

    const[btnText,setBtnText]=useState("Enable Light mode")
    const toggleBg = () => {
        if (myStyle.color === 'white') {
            setMyState({
              color: 'black',
              backgroundColor:'white'  
            })
            setBtnText("Enable Dark Mode")
        } else {
            setMyState({
               color: 'white',
               backgroundColor:'black' 
            })
            setBtnText('Enable Light Mode')
        }
    }*/
  return (
      <div className='container'style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
          <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
  <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
        What is the <code className='px-2'>TextTool</code>?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
        <strong>TextTool</strong>  gives you a way to analyze your text quickly and efficiently, Be it word count, character count or time to read
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
        Why <code className='px-2'>TextTool</code> Special?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
        <strong>TextTool</strong> is a free character counter tool that provides instant character count & word count statics for a given text. <strong>TextTool</strong>  reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }> 
          Is <code className='px-2'>TextTool</code>   work on others?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' ,
          color:props.mode === 'light' ? 'black' : 'white'}
          }>
        This word counter software work in any web Browser such as chrome, firefox, internet Explorer, safari,opera. it suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>
          {/* <button className='btn btn-primary my-4 mx-4' onClick={toggleBg}>{ btnText}</button> */}
    </div>
  )
}
