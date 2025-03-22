function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
}
function displayCategories(categories){
const categoriesID = document.getElementById("category-container");
for(let cat of categories){
    
   const newDiv = document.createElement("div");
   newDiv.innerHTML =`<button class="btn btn-sm border-none hover:bg-[#FF1F3D] hover:text-white ">${cat.category}</button>
   `
   categoriesID.appendChild(newDiv)

}
}
loadCategories()

// {
//     "category_id": "1003",
//     "video_id": "aaaj",
//     "thumbnail": "https://i.ibb.co/xgWL3vQ/kid-gorgeous.jpg",
//     "title": "Kid Gorgeous",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/xsfkwN2/john.jpg",
//             "profile_name": "John Mulaney",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "241K",
//         "posted_date": ""
//     },
//     "description": "John Mulaney's 'Kid Gorgeous' has captured the hearts of many with 241K views. As a verified comedian, John delivers a masterclass in stand-up with clever anecdotes, quick wit, and relatable humor. This performance is a laugh-filled adventure through his unique take on life, politics, and pop culture."
// }

function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response)=>response.json())
    .then((data)=>displayVideos(data.videos))
}
loadVideos()

const displayVideos = (videos)=>{
const videoContainer = document.getElementById("video-container")
videos.forEach(video=>{
    
    const videoCard=document.createElement("div");
    videoCard.innerHTML=`
        <div class="card bg-base-100   ">
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
            <p class="pt-2 text-gray-500 text-sm flex gap-1 ">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
            <p class="text-gray-400 text-sm pt-1">${video.others.views} views</p></div>
             
          </div>
    `
    videoContainer.append(videoCard)
})

}