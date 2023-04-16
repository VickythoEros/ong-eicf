import ActivityHeader from "components/ActivityHeader"
import AppHeader from "components/AppHeader"
import CardAction from "components/CardAction"

import "assets/styles/Actions.css"


const Projects = ()=>{

    return(
        <>
            <AppHeader
                title="NOS PROJETS CONTRE LA PAUVRETE DANS LE MONDE"
                content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que "
            />

            <ActivityHeader
                title="L'ONG EICF en chiffre"
                content="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que "
            />
            <div className="actions-list-container">
                <h1>Nos Actions</h1>
                <div className="">
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                    <CardAction 
                        link="/projects-details"
                        title="lorem ipsum "
                        text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                    />
                </div>
            </div>

        </>
    )
}

export default Projects