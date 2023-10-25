import './Button.css'

function LabelAlert(label){
    alert(label)
}

function Button(props) {
    return (
      <>
        <div>
          <button className='btn-2' onClick={()=>{LabelAlert(props.label)}}>Surpresa</button>
        </div>
      </>
    )
  }
  
  export default Button