import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button'
import './NoMatch.css'

const NoMatch = () => {

  const navigate = useNavigate()

  return (
    <>
      <div>NoMatch 404</div>
      <Button onClick={() => navigate(-1)} accessibility={'Back'} title={'Back'} />
    </>
  )
}

export default NoMatch