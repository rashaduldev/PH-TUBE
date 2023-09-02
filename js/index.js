const loadCatagory = async () => {
  const rea = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
  const data = await rea.json();
  const catagory = data.data;
  // allProducts(result);
  // console.log(catagory);
  // allProducts(product);
  allCatagory(catagory);

}
loadCatagory();



let products = [];

const allCatagory = (catagory) => {
  const catagoryContainer = document.getElementById('catagoryContainer');
  catagoryContainer.innerText = '';

  catagory.forEach((cat) => {
    const catagoryDiv = document.createElement('div');
    catagoryDiv.innerHTML = `
      <button onclick="catagoryId('${cat.category_id}')" class="btn btn-ghost tab tab-active">${cat.category}</button>
    `;
    catagoryContainer.appendChild(catagoryDiv);
  });
};

/ /
  


const catagoryId = async (catagoryId) => {
  // console.log(catagoryId);
  const productContainer = document.getElementById('productContainer');
  productContainer.innerText = '';
  const errorButton = document.getElementById('errorButton');
  errorButton.innerText = '';

  // const newArray=[];
  // document.getElementById('sortButton').addEventListener('click', () => {
  //   // console.log(views);
  
  //   // newArray.push(views);
  //   console.log(catagoryId);
  //   catagoryContainer.innerText = '';
  //   // products.sort((a, b) => b.others.views - a.others.views);
  //   // console.log(product);
  // });


  if (catagoryId === '1005') {
    const productIMG = document.createElement('div');
    productIMG.innerHTML = `
      <div>
        <div class="grid grid-cols-1 justify-center text-center items-center m-auto lg:mt-10">
          <p><img class="text-center mx-auto" src="../img/Icon.png" alt="" /></p>
          <h2 class="text-3xl">Oops!! Sorry, There is no <br> content here</h2>
        </div>
      </div>
    `;
    errorButton.appendChild(productIMG);
  } else {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await response.json();
    const dataRes = data.data;

    // Define and populate the products array within this scope
    const products = dataRes;

    // console.log(products);




    products.forEach((product) => {
// 
      const productDiv = document.createElement('div');
      const views = product.others.views;

      const posted_date=product.others.posted_date;
      console.log(posted_date);
      const { hours, minutes, seconds } = convertSecondsToTime(posted_date);
        // functionn
    function convertSecondsToTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return { hours, minutes, seconds: remainingSeconds };
    }
    const lg=convertSecondsToTime(posted_date)
    console.log(lg);
      //

    
     


      productDiv.classList = `card my-6 bg-base-100 shadow-xl`;
      productDiv.innerHTML = `
        <div>
          <div class="relative">
            <div>
              <figure><img class="h-80 w-full rounded-md" src="${product.thumbnail}" alt="" /></figure>
            </div>
            <div class="absolute bottom-0 right-0 text-white bg-black">
              <p>${lg}</p>
            </div>
          </div>
          <div class="flex">
            <div>
              <img class="w-10 h-10 rounded-full mt-7 ml-3" src="${product.authors[0].profile_picture}" alt="">
            </div>
            <div>
              <div class="card-body text-left">
                <h2 class="card-title">${product.title}</h2>
                <div class="flex items-center gap-3">
                  <p>${product.authors[0].profile_name}</p>
                  ${product.authors[0].verified ? `
                    <p>
                      <i class="fa-solid fa-circle-check" style="color: #2568ef;"></i>
                    </p>
                  ` : ''}
                </div>
                <p>${views} views</p>
              </div>
            </div>
          </div>
        </div>
      `;
      productContainer.appendChild(productDiv);
    });
  }
};



const loadProducts = async () => {
  const rea = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
  const data = await rea.json();
  const product = data.data;
}
loadProducts()
catagoryId("1000")