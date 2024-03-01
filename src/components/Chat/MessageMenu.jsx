export default function MessageMenu({MessageId}) {
    const deleteMsg = ()=>{

    }, editMsg = ()=>{

    };
    return(
        <ul id="Menu">
           <div className="menuItem" onClick={deleteMsg}>Delete</div>
           <div className="menuItem" onClick={editMsg}>Edit</div> 
        </ul>
    )
}