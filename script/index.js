

function removeActiveClass (){
  const activeButtons = document.getElementsByClassName("active");
  for(let btn of activeButtons){
    btn.classList.remove("active");
  }
}

function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
}

const loadCategories2 = (id)=>{
  
  const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url)
  fetch(url)
  .then(res=>res.json())
  .then(data => {
    removeActiveClass ()
    const clickedButton = document.getElementById(`btn-${id}`)
    clickedButton.classList.add("active")
    displayVideos(data.category)})

  };

function displayCategories(categories){
const categoriesID = document.getElementById("category-container");
for(let cat of categories){
    const newDiv = document.createElement("div");
   newDiv.innerHTML =`<button id="btn-${cat.category_id}" onclick="loadCategories2(${cat.category_id})" class="btn btn-sm border-none hover:bg-[#FF1F3D] hover:text-white ">${cat.category}</button>
   `
   categoriesID.appendChild(newDiv)

}
}
loadCategories()

function loadVideos(searchText = ""){
 
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((response)=>response.json())
    .then((data)=>{
      document.getElementById("btn-all").classList.add("active")
      displayVideos(data.videos)})
}
 
const loadVideoDetails = (videoId)=>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>displayVideoDetails(data.video))
}




const displayVideoDetails=(video)=>{
  console.log(video)
document.getElementById("video_details").showModal()
const detailsContainer = document.getElementById("details_container");
detailsContainer.innerHTML=`
<div class="card bg-base-100 image-full sm:w-96 w-full shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="video-Thumbnail" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p class="p-2 mx-auto">${video.description}</p>
    <div class="card-actions justify-end">

    </div>
  </div>
</div>`
};



const displayVideos = (videos)=>{
const videoContainer = document.getElementById("video-container")
videoContainer.innerHTML="";
if(videos.length==0){
videoContainer.innerHTML=`
 <div class="col-span-full text-center flex flex-col items-center py-20">
            <img class="w-1/2 sm:w-44" src="assets/Icon.png" alt="">
            <h2 class="font-bold text-3xl ">Oops!! Sorry, There is no content here</h2>
        </div>
`

}
videos.forEach(video=>{
    
    const videoCard=document.createElement("div");
    videoCard.innerHTML=`
        <div class="sm:card bg-base-100   ">
            <figure class="relative">
              <img class="w-full sm:h-[200px] h-[160px] object-cover "
                src="${video.thumbnail}"
                alt="Profile" />
                <span class="absolute bottom-3 right-3 text-sm bg-black text-white rounded-md p-1 ">3hrs 56 min ago</span>
            </figure>
            
            <div class=" flex gap-3 px-2 py-5">
               <div><div class="avatar">
                <div class="w-8 rounded-full">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div></div>

             <div><h2 class="font-bold">${video.title}</h2>
            <p class="pt-2 text-gray-500 text-sm flex gap-1 ">${video.authors[0].profile_name} 
          ${video.authors[0].verified == true ? `  <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>`:``}

            <p class="text-gray-400 text-sm pt-1">${video.others.views} views</p>
            </div>
             
          </div>
          <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block mb-4">Show Details</button>
          </div>
          
    `
    videoContainer.append(videoCard)
})

}
document.getElementById("search-input").addEventListener("keyup",(e)=>{
  const input =e.target.value;
  loadVideos(input)
 
})
loadVideos()

