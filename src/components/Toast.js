import './toast.css';


const Toast = (props) => {
const {position="top-right"} = props





return (


<div className="toast-container" data-position={`${position}`}>
    <div className="toast">

    </div>
</div>




)







}
export default Toast