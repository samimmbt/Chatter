const MyInput = ({ inpData, val }) => {
   
return (
    <div className='inp-p'>
        {inpData().labell && <label htmlFor={inpData().id} className='inp-label'>{inpData().labell}</label>}

        <input id={inpData().id} className="inp" type={inpData().type} value={inpData().value} onChange={e => { val(e.target.value) }} placeholder={inpData().placeholder} />
    </div>
)
}
export default MyInput