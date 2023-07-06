import Card from "./components/Card";

function createCard(contact){
    return <Card 
        key={contact.id}
        id={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />
}

export default createCard;