const categoryContainer = document.getElementById("category-container")
const tressSection = document.getElementById("trees-section")
const loadingSection = document.getElementById("loading-section")

// Loading function

const loading = (id) => {
    if (id === true) {
        loadingSection.classList.remove("hidden")
    } else {
        loadingSection.classList.add("hidden")
    }
}

// All category
async function categoryLoading() {
    loading(true)
    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json()
    data.categories.forEach(categories => {
        const btn = document.createElement("button")

        btn.innerHTML = `
        <button id="button" class =" w-full"> ${categories.category_name} </button>
        `
        btn.onclick = () => selectCategory(categories.id)
        categoryContainer.appendChild(btn)
        loading(false)
    });
}

async function selectCategory(id) {
    tressSection.innerHTML = ""
    loading(true)
    const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    const data = await res.json()
    data.plants.forEach(plant => {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card bg-base-100 shadow-sm p-2 space-y-2">
         <figure>
             <img src="${plant.image}"
                 alt="Shoes"  class=" h-48 w-full object-cover"/>
         </figure>
         <div class=" justify-start space-y-2">
             <h2 class="card-title">${plant.name}</h2>
             <p class="text-start line-clamp-2">${plant.description}</p>
                 <div class=" flex justify-between">
                     <div class="badge badge-soft badge-success">${plant.category}</div>
                     <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
                 </div>
             <div class="card-actions justify-end">
                 <button class="btn btn-secondary w-full">Add to cart</button>
             </div>
         </div>
        </div>
        `
        tressSection.appendChild(div)
        loading(false)
    })
}

async function treesLoading() {
    tressSection.innerHTML =""

    loading(true)
    const res = await fetch("https://openapi.programming-hero.com/api/plants")
    const data = await res.json()
    data.plants.forEach(plant => {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card bg-base-100 shadow-sm p-2 space-y-2">
         <figure>
             <img src="${plant.image}"
                 alt="Shoes"  class=" h-48 w-full object-cover"/>
         </figure>
         <div class=" justify-start space-y-2">
             <h2 class="card-title">${plant.name}</h2>
             <p class="text-start line-clamp-2">${plant.description}</p>
                 <div class=" flex justify-between">
                     <div class="badge badge-soft badge-success">${plant.category}</div>
                     <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</p>
                 </div>
             <div class="card-actions justify-end">
                 <button class="btn btn-secondary w-full">Add to cart</button>
             </div>
         </div>
        </div>
        `
        tressSection.appendChild(div)
        loading(false)
    })
}

treesLoading()
categoryLoading()
