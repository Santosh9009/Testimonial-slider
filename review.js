const review=[
  {
    id:1,
    name:"sandy selly",
    job:"UI Designer",
    info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam placeat autem voluptas maxime facilis natus explicabo dolores consectetur corporis similique ut, sit commodi excepturi, provident alias odit quo temporibus libero odio ex! Beatae, voluptatem reprehenderit iste eum numquam, quidem, debitis facilis nihil dolorem illo laboriosam illum maiores quas non animi earum soluta? Iste blanditiis quae incidunt ratione reiciendis eius amet!",
    img:"./person3rd.avif",
  },
  {
    id:2,
    name:"Steve Smith",
    job:"backend developer",
    info:`What is a good bio for a resume?
    I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.`,
    img:"./preson2nd.jpg",
  },
  {
    id:3,
    name:"henry Walsh",
    job:"Game Developer",
    info:" Start with who you are and what you do. The basics of a bio include your name and a brief summary of your professional endeavors and goals. - Describe what you're currently doing. Include quantifiable information that can show how effective you are in your most recent position.",
    img:"./person4.jpeg",
  }
]
const image=document.querySelector(".image");
const person=document.querySelector(".person");
const job=document.querySelector(".job");
const info=document.querySelector(".info");


const prevbtn=document.querySelector(".left");
const nextbtn=document.querySelector(".right");
const surprise=document.querySelector(".surprise");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
  showperson(currentItem)
})

function showperson(human){
  const item=review[human];
  image.src=item.img;
  person.textContent=item.name;
  job.textContent=item.job;
  info.textContent=item.info;
}

nextbtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem>review.length-1){
    currentItem=0;
  }
  showperson(currentItem);
})
prevbtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
    currentItem=review.length-1;
  }
  showperson(currentItem);
})
surprise.addEventListener("click",function(){
  currentItem=Math.floor(Math.random()*review.length);
  showperson(currentItem);
})
