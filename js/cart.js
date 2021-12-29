// =========================================პროდუქტების მასივი =========================================
let productItems=[
    {
        name: 'Hand Base Lamp',
        price: 35,
        oldPrice : 55,
        inCart: 0,
        img: 'img/Image (1).png'
    },
    {
        name: 'Vintage Chair',
        price: 65,
        oldPrice: 95,
        inCart: 0,
        img: 'img/Image (1).png'
    },
    {
        name: 'Lamp Tool',
        price: 35,
        oldPrice: 45,
        inCart: 0,
        img: 'img/Image (1).png'
    },
    {
        name: 'Stylish Chair',
        price: 45,
        oldPrice: 55,
        inCart: 0,
        img: 'img/Image (1).png'
    },
    {
        name: 'Wood Chair',
        price: 65,
        oldPrice: 95,
        inCart: 0,
        img: 'img/Image (1).png'
    },
    {
        name: 'Stackable Chair',
        price: 87,
        oldPrice: 95,
        inCart: 0,
        img: 'img/Image (1).png'
    },
]

// =========================================ლუპი ნებისმიერი პროდუქტისთვის =========================================
let cartImg=document.querySelectorAll('.cartImg')
for(let i=0; i < cartImg.length; i++) {
    cartImg[i].addEventListener('click',()=>{
        addToCart()
        cartNumbers(productItems[i])
        totalCost(productItems[i])
    })
}

// =========================================რეფრეშის ფუნქცია =========================================
function onLoadCheckCart(){
    let productNumbers =  localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cartSpan').textContent = productNumbers;
    }
}

// ========================================= ამატებს პროდუქტებს ლოკალ სტორიჯში =========================================
function cartNumbers(productItems){
    let productNumbers =  localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers)
    if(productNumbers){
        localStorage.setItem('cartNumbers' , productNumbers +1);
        document.querySelector('.cartSpan').textContent=productNumbers +1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cartSpan').textContent=1;
    }
    setItem(productItems)
}
// =========================================ამატებს საერთო ღირებულებას========================================
function totalCost(productItems){
    let ItemsCost=localStorage.getItem('TotalCost')
    if(ItemsCost != null){
        ItemsCost= parseInt(ItemsCost)
        localStorage.setItem('TotalCost', ItemsCost+ productItems.price)
    }else{
        localStorage.setItem('TotalCost', productItems.price)
    }
   

}
function setItem(productItems){
    let cartItems=localStorage.getItem('Items')
    cartItems=JSON.parse(cartItems)
    if(cartItems != null){
        if(cartItems[productItems.name] == undefined){
            cartItems={
                ...cartItems,
                [productItems.name]:productItems
            }
        }
        cartItems[productItems.name].inCart+=1
    }else{
        productItems.inCart=1;
        cartItems={
            [productItems.name]:productItems
        }
    }
    
    localStorage.setItem('Items',JSON.stringify(cartItems));
}

// =========================================ქმნის პროდუქტების ყუთს შოპინგის გვერდზე და ამატებს სათითაოდ რომელსაც აირჩევ =========================================
function displayCart(){
    let cartItems=localStorage.getItem('Items')
    cartItems=JSON.parse(cartItems)
    let ItemsCost=localStorage.getItem('TotalCost')
    let productContainer=document.querySelector('.product-card')
    if(cartItems && productContainer){
        productContainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML +=`
                <div class="product">
                    <button class="deleteButton">Delete</button>
                    <span class="name">${item.name}</span>
                    <span class="price">$${item.price},00</span>
                    <div class="quantity">
                        <span>${item.inCart}</span>
                    </div>    
                    <span class="total">
                        $${item.inCart * item.price},00
                    </span>
                </div>
            `;
        });
        productContainer.innerHTML+=`
            <div class="basketTotal">
                <h4>
                    Total Price
                </h4>
                <h4>
                    $${ItemsCost},00
                </h4>
            </div>            
        `
    }
    
}


// =========================================შლის ლოკალ კონკრეტულ პროდუქტს ღილაკის დაჭერაზე=========================================
function deletefunc(){
    let deletebutton=document.querySelectorAll('.deleteButton')
    deletebutton.forEach(element=>{
        element.addEventListener('click',function(e){
            e.currentTarget.parentElement.remove()
            localStorage.removeItem('Items')
            localStorage.removeItem('TotalCost')
            localStorage.removeItem('cartNumbers')
        })
    })
}
onLoadCheckCart()
displayCart()
deletefunc()
// =========================================კალათის აიქონზე უმატებს იმდენ პროდუქტს რამდენსაც დავამატებთ=========================================
let itemNumber = 1;
function addToCart() {
    let t = document.querySelector(".addDiv");
    t.setAttribute("class", "addDiv");
    t.style.display='flex'
    let p = document.querySelector('.cartSpan')
    t.appendChild(p)
    p.innerText=`${itemNumber++}`
    p.style.color='#fff'
    p.style.marginLeft='5px'
}
// =========================================ფუნქცია ამოწმებს ლოკალ სტორიჯში თუ არის ნივთი გამოაჩინოს კალათა=========================================
ifInCart()
function ifInCart(){
    let cartItems=localStorage.getItem('Items')
    if(cartItems !== null){
        let t = document.querySelector(".addDiv");
        t.style.display='flex'
    }else{
        t.style.display='none'
    }
}


