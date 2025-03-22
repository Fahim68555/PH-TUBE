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