function init(){

let bigSlide = ["images/desk.jpeg","images/oreos.jpeg","images/raptor.jpeg","images/pyramid.jpeg","images/bsg.jpeg","images/lotr.jpeg"];
let bitSlide = ["images/test.png","images/bitOreo.png","images/bitRaptor.png","images/bitPyramid.png","images/bitBsg.png","images/bitLotr.png"];
let great = document.getElementById("great");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let headDesk = "Studying to be a Software Engineer!";
let headOreo = "Physicist: Milk - Cookie Reaction Dynamics";
let headRaptor = "Raptor Liaison - Jurassic Park";
let headPyramid = "Executive Vice President of Triangles and Sand";
let headBsg = "Alien Robot Ambassador / Weekend DJ - Battlestar Galactica";
let headLotr = "Enchanted Ring Consultant - Middle Earth";
let headArr = [headDesk,headOreo,headRaptor,headPyramid,headBsg,headLotr];
let deskText = "Currently working from home in an office that looks absolutely nothing like this image I shamelessly stole from the internet. I am learning how to make websites, this is the first one and that's exciting. Here is a special character&hearts;";
let oreoText = "First to perfect the cookie to cream ratio code which allowed nabisco to release the perfect cookie. My research also led to the cracking of the milk dunk matrix which earned me my first Nobel Prize.";
let raptorText = "Overseer of day to day raptor operations. Lead raptor translator. Raptor Yoga instructor. Coach of the Raptor softball team. One time I saved a kitten from a tree.";
let pyramidText = "After receiving my sixth Masters degree I was approached by a Gentleman with a jackal's head about the best way to preserve dead royalty. Obviously it had to be triangles but I wanted to put my own spin on it, so we went with equilateral triangles.";
let bsgText = "Having spent a ridiculously long time in space convinced that they were the only humans left, the crew of The Battlestar Galactica was hopelessly out of touch with current trends in EDM. I helped human and Robot alike get down with the hottest Deep House and Trap Beats Friday and Saturday Nights";
let lotrText = "Following my successful overhaul of the Captain Planet ring system I was transported to New Zealand by a bearded magician who needed a magic ring destroyed. I had never worked with dark magic before and I had plans that evening so I suggested we just toss it in a volcano and hope for the best.";
let textArr = [deskText,oreoText,raptorText,pyramidText,bsgText,lotrText];
let slideHeading = document.getElementById("slideHeading");
let slideText = document.getElementById("slideText");
let bit = document.getElementById("bit");
let slidePic = document.getElementById("slidePic");
let i = 0;
slideHeading.innerHTML = headArr[i];
slideText.innerHTML = textArr[i];
bit.src = bitSlide[i];
slidePic.src = bigSlide[i];





great.addEventListener("click",function(event){
    alert("I know!");
});

next.addEventListener("click",function(event){
    i = i+1;
    if(i>5){
        i=0;
    };
    slideHeading.innerHTML = headArr[i];
    slideText.innerHTML = textArr[i];
    bit.src = bitSlide[i];
    slidePic.src = bigSlide[i];
   
});

prev.addEventListener("click",function(event){
    i = i-1;
    if(i<0){
        i=5;
    };
    slideHeading.innerHTML = headArr[i];
    slideText.innerHTML = textArr[i];
    bit.src = bitSlide[i];
    slidePic.src = bigSlide[i];
   
});
    


};
window.onload = init;
