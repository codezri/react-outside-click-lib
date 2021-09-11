export function InfoBox(props) {  
   if(!props.show)
    return null; 
  
  return (
  <div className='info-box'>
      {props.message}
  </div> );
}
