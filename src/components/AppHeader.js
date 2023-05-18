import SlideHeader from "./SlideHeader"
import "assets/styles/AppHeader.css"



const slides = [
    { 
        title: "Lessembla ensemble anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte", 
        content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg',
        showButton:true
    },
    { 
        title: " morceaux de texte pour réaliser un livre spécimen de polices de texte", 
        content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_1280.jpg' ,
        showButton:true
    },
    { 
        title: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et eaux de texte pour réaliser un livre spécimen de polices de texte.", 
        content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.", 
        image: 'https://cdn.pixabay.com/photo/2017/06/18/18/39/baby-2416718_1280.jpg' ,
        showButton:true
    },
  ];

  

const AppHeader =()=>{


    return (
        <div className="my-app-header-container">
            <SlideHeader  slides={slides} />
        </div>
    )
}

export default AppHeader