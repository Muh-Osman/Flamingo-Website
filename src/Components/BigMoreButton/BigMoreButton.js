import Button from '../Button/Button'
import './BigMoreButton.css'




const BigMoreButton = (props) => {

    return (
        <>

            <Button onClick={props.onClick} className='big-more-btn' id={props.id} title='More' />

        </>
    )
}

export default BigMoreButton