
//Data for Social Media
let data = {
  fullName: "Jane Doe",
  position: "UI/UX Designer",
  socials: [
    {
      id: "fb",
      service: "Facebook",
      url: "https://www.facebook.com/janedoe24",
      icon: "fab fa-facebook",
    },
    {
      id: "ig",
      service: "Instagram",
      url: "https://www.instagram.com/janedoe24",
      icon: "fab fa-instagram",
    },
    {
      id: "db",
      service: "Dribbble",
      url: "https://www.dribbble.com/janedoe24",
      icon: "fab fa-dribbble",
    },
    {
      id: "gl",
      service: "Google",
      url: "https://www.google.com/janedoe24",
      icon: "fab fa-google",
    },
  ],
};
//Using data function to display the Card Page
let cardApp = (data) => {
let body = document.getElementsByTagName("body")[0];
let root = document.createElement("div");
let style = document.createElement("style");
let card = document.createElement("section");
//HTML Wrapper
let html = `<div class="card__wrapper">
          <img
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg"
            alt="picture"
            class="card__user--img"
          />
          <div class="card__info">
            <span class="card__name">${data.fullName}</span
            ><span class="card__title">${data.position}</span>
          </div>
          <div class="card__socials">
            
          </div>
        </div>`;
//CSS Styles
let cssStyles = `.card{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
}

.card__wrapper {
    
    padding: 20px 20px 2rem 20px;
    max-width: 300px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, .22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card__user--img{
    border: 2px solid #2c5eff;
    height: 70px;
    width: 70px;
    margin: 2rem 0 0.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.card__info{
    margin-bottom: 2rem;
}

.card__name{
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
}

.card__title{
    display: block;
    font-size: 0.7rem;
    margin-bottom: 2rem;
    text-align: center;
}

.card__icon{
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000000;
    margin-bottom: 0.4rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
}

.card__icon-box{
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__icon--title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.card__icon--fb{
    color: #2c5cff;
    border: 1px solid #2c5cff;
    text-decoration: none;
}

.card__icon--fb:hover{
    background-color: #2c5cff;
    color: white;
}

.card__icon--ig{
    color: #773fe7;
    border: 1px solid #773fe7;
    text-decoration: none;
}

.card__icon--ig:hover{
    background-color: #773fe7; 
    color: white;
}

.card__icon--db{
    color: #f962b1;
    border: 1px solid #f962b1;
    text-decoration: none;
}

.card__icon--db:hover{
    background-color: #f962b1;
    color: white;
}

.card__icon--gl{
    color: #DB4437;
    border: 1px solid #DB4437;
    text-decoration: none;
}

.card__icon--gl:hover{
    background-color: #DB4437;
    color: white;
}
`;
//Add root inside body 1st position
body.prepend(root);
//Add class Root 
root.classList.add("root");
//Add Card inside root 1st position
root.prepend(card);
//Style Root background
root.style.cssText = `background: url('https://wallpaperaccess.com/full/636909.jpg');
background-size: cover;
background-position: center;`;
//Add style inside root
root.prepend(style);
//Add Card 
card.classList.add("card");


//Add HTML to card
card.innerHTML = html;
//Add CSS
style.innerHTML = cssStyles;


let cardSocials = card.getElementsByClassName("card__socials")[0];
//Use data object to add social media services and icons
data.socials.forEach((item, index) => {
    //Create anchor tag for links
  let tempNode = document.createElement("a");
  //Set href attributes with each links
  tempNode.href = `${item.url}`;
  //Add classes to div 
  tempNode.classList.add(`card__icon`, `card__icon--${item.id}`);
 
  tempNode.innerHTML = `
        <span class="card__icon-box" >
                <i class="${item.icon}"></i>
        </span>
        <span class="card__icon--title">${item.service}</span>
    `;

  cardSocials.append(tempNode);
});
};

cardApp(data);