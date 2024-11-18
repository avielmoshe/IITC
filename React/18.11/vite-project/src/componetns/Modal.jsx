const Modal =({isOpen,children})=>{
    console.log(isOpen);
    
    return(<>
    {isOpen?children:<></>}

    </>
    )
}

export default Modal