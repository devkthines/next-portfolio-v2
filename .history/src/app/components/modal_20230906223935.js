import Modal from 'react-bootstrap/Modal'
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';


export default function ProjectModal(){
        const [button,setButton] = useState()
    return(
        <>
        <div >
            <button>
                <AiFillCloseCircle></AiFillCloseCircle>
            </button>
        </div>
        </>
    )
}