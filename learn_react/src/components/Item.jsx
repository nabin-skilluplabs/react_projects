function Item(props) {
    if(props.packed) {
        return (<li>{props.name} ✅</li>);
    }
    return (<li>{props.name}</li>);
}
export default Item;