import ActivityHeader from "components/ActivityHeader"
import AppHeader from "components/AppHeader"
import CardAction from "components/CardAction"
import "assets/styles/Actions.css"


const Actions = ()=>{

    const Images = [
        `https://img.freepik.com/photos-gratuite/garcons-africains-smiley-coup-moyen_23-2148860433.jpg`,
        "https://img.freepik.com/photos-gratuite/groupe-enfants-africains-apprenant-ensemble_23-2148892526.jpg",
        "https://img.freepik.com/photos-gratuite/petite-fille-souriante-bonheur-studio-portrait-sucette-douce_53876-146342.jpg",
        "https://img.freepik.com/photos-gratuite/adorables-enfants-noirs-africains_23-2149220007.jpg",
        "https://img.freepik.com/photos-gratuite/enfants-africains-bras-croises_23-2148852698.jpg",
        "https://img.freepik.com/photos-gratuite/amis-heureux-etreignant-plan-moyen_23-2149479926.jpg",
        "https://img.freepik.com/photos-gratuite/gros-plan-smiley-filles-africaines-dehors_23-2148860429.jpg",
        "https://img.freepik.com/photos-gratuite/adorables-enfants-noirs-africains_23-2149220007.jpg",
        `https://img.freepik.com/photos-gratuite/garcons-africains-smiley-coup-moyen_23-2148860433.jpg`,
    ]

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
                <div className="d-flex flex-wrap jusitfy-content-between align-items-center">

                    {
                        Images?.map(imageSrc=>(
                            <CardAction 
                            link="/actions-details"
                            title="lorem ipsum "
                            img={imageSrc}
                            text=" Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla"
                        />
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Actions