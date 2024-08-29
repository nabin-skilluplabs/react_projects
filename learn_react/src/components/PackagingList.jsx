import Item from "./Item";

function PackagingList() {
    return (
        <section>
            <h1>Nabin's Packaging List</h1>
            <ul>
                <Item packed={true} name="Space suit" />
                <Item packed={true} name="Helmet with a golden leaf" />
                <Item packed={true} name="Team photo" />
                <Item packed={true} name="Camping Tent" />
            </ul>
        </section>
    )
}

export default PackagingList;