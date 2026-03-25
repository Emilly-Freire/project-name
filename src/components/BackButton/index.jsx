import { useNavigate } from 'react-router-dom'

function BackButton() {

    const navigate = useNavigate();
    const nav = () => {
        navigate(-1)
    }

    return(
        <div>
            <button type="button" onClick={nav}>
                VOLTAR
            </button>
        </div>
    )
}

export default BackButton