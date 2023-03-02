const loadNews = async() => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url)
  const data = await res.json()
  displayDataNews(data.data)
}

loadNews()

const displayDataNews = data =>{
 const getContainer =  document.getElementById('container-div-id');

 data.news_category.forEach(data => {
  
  const getDiv = document.createElement('p');
  getDiv.classList.add('text-2xl')
  getDiv.innerHTML =`
  
  <a class="nav-link" onclick="getAllNewaData('${data.category_id}', '${data.category_name}')" href="#">${data.category_name}</a>
  
  
  `
getContainer.appendChild(getDiv)

 });
}


const getAllNewaData = (category_id , category_name) =>{
 const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
  fetch(url)
  .then(res => res.json())
  .then(data => showData(data.data, category_name))
}

const showData = (data , category_name) =>{
  document.getElementById('category-ids').innerHTML = data.length;
  document.getElementById('category-name').innerHTML = category_name;
}