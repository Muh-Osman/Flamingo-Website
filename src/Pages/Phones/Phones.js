import { ShelvesBox, ShelveConainer, ItemShelves } from "../../Components"
import './Phones.css'

const Phones = () => {
    return (

        <ShelvesBox>

            <ShelveConainer href='https://www.google.com/' title='Apple'>
                <ItemShelves />
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Samsung'>
                <ItemShelves />
            </ShelveConainer>

            <ShelveConainer href='https://www.google.com/' title='Google'>
                <ItemShelves />
            </ShelveConainer>
            

        </ShelvesBox>

    )
}

export default Phones
