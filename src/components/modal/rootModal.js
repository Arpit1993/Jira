import ReactDOM from 'react-dom';
export const ModalRoot = (props) => {
    let {isOpen} = props;
    if(!isOpen){
        return;
    }
    let modalElem = document.getElementById("modal");
    return ReactDOM.createPortal(props.children, modalElem);
}