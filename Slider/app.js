let init = () => {
  let container = document.getElementsByClassName("jumbo-slider__container")[0],
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    slidesLinks = document.getElementById("jumbo-slider__link"),
    

    currentPosition = 1,
    time = 6000;

  //Add Animation Class to first Slides
  slides[0].classList.add("jumbo-slider__slide--active");
  circles[0].classList.add('jumbo-slider__circle--filled');
  links[0].classList.add("jumbo-slider__link--active");

  //Update Elipsis and Links
  let updateNav = (currentPosition) => {
    
    //Remove all active classes
    for (let i = 0; i < slides.length; i++){
        links[i].classList.remove("jumbo-slider__link--active");
        circles[i].classList.remove("jumbo-slider__circle--filled");
    }

    //Add Active Classes to The Next Class
    links[currentPosition-1].classList.add("jumbo-slider__link--active");
    circles[currentPosition-1].classList.add("jumbo-slider__circle--filled");
  };

  let startSlide = () => {

    //Slide each slide for 6 seconds
    setInterval(() => {
      //Add Active Class to the second index
      slides[1].classList.add("jumbo-slider__slide--active");
      //Remove Active Class from the first index
      slides[0].classList.remove("jumbo-slider__slide--active");
      //Copy the first slide to the last index
      container.appendChild(slides[0].cloneNode([true]));
      //Remove the first slide
      container.removeChild(slides[0]); 
      //Call updateNav function for each slide
      if (currentPosition < slides.length){
          console.log("Current: " + currentPosition);
          console.log("Slide: " + slides.length);
        currentPosition++;
        updateNav(currentPosition);
      } else {
          currentPosition = 1;
          updateNav(currentPosition);
      }
       
    }, time);
  };
  startSlide();

//   slidesLinks.forEach((link, i) => {
//     link.addEventListener("click", () => {
//     slides[currentPosition].classList.add("jumbo-slider__slide--active");
//     circles[currentPosition].classList.add('jumbo-slider__circle--filled');
//     links[currentPosition].classList.add("jumbo-slider__link--active");
//     init();
//     currentPosition = i;
//   });
//   linksClick();
// }
// ); 

}
 
init();




