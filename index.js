// all category loading
const categoryLoading = () => {
    const ulr = "https://openapi.programming-hero.com/api/categories"
    fetch(ulr)
        .then((res) => res.json())
        .then((data) => categoryDisplay(data.categories))
}

// all category display
const categoryDisplay = (id) => {
    console.log(id);
}

categoryLoading()