const heroWrapper = document.querySelector('.hero-wrapper')

const contentWrapper = document.createElement('div')
contentWrapper.className='content-wrapper'

const heroText = document.createElement('div')
heroText.className='hero-text'
heroText.textContent='The furniture brand for the future, with timeless designs'

const aHeroBtn =document.createElement('a')
aHeroBtn.className='hero-btn'
aHeroBtn.textContent='View collection'
aHeroBtn.href='#'

const heroContent = document.createElement('div')
heroContent.className='hero-content'
heroContent.textContent='A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.'

const mainImg = document.createElement('img')
mainImg.className='main-img'
mainImg.src='img/hero-section/hero-img.jpg'
mainImg.alt = 'hero-img'

contentWrapper.append(heroText)
contentWrapper.append(aHeroBtn)
contentWrapper.append(heroContent)

heroWrapper.append(contentWrapper)
heroWrapper.append(mainImg)
console.log(heroWrapper)



const NewCeramicsProducts = [
    {
        img:'img/new-ceramics-section/1.jpg',
        name: 'The Dandy chair',
        price:'£250',
        alt:'01',
    },
    {
        img:'img/new-ceramics-section/2.jpg',
        name: 'The Dandy chair',
        price:'£250',
        alt:'02',
    },
    {
        img:'img/new-ceramics-section/3.jpg',
        name: 'The Dandy chair',
        price:'£250',
        alt:'03',
    },
    {
        img:'img/new-ceramics-section/4.jpg',
        name: 'The Dandy chair',
        price:'£250',
        alt:'04',
    },
]

NewCeramicsProducts.forEach((element)=>{
    const ulNewCeramicsProducts = document.querySelector('.new-ceramics-section-products')

    const liNewCeramicsProduct = document.createElement('li')
    liNewCeramicsProduct.className='new-ceramics-products-item'

    const aNewCeramicsProductLink = document.createElement('a')
    aNewCeramicsProductLink.className='new-ceramics-item-link'
    aNewCeramicsProductLink.href='#'

    const imgNewCeramicsProductImg = document.createElement('img')
    imgNewCeramicsProductImg.className='new-ceramics-product-img'
    imgNewCeramicsProductImg.src=element.img
    imgNewCeramicsProductImg.alt=element.alt

    const divNewCeramicsProductName = document.createElement('div')
    divNewCeramicsProductName.className='new-ceramics-product-name'
    divNewCeramicsProductName.textContent=element.name

    const divNewCeramicsProductPrice = document.createElement('div')
    divNewCeramicsProductPrice.className='new-ceramics-product-price'
    divNewCeramicsProductPrice.textContent=element.price

    aNewCeramicsProductLink.append(imgNewCeramicsProductImg)
    aNewCeramicsProductLink.append(divNewCeramicsProductName)
    aNewCeramicsProductLink.append(divNewCeramicsProductPrice)

    liNewCeramicsProduct.append(aNewCeramicsProductLink)

    ulNewCeramicsProducts.append(liNewCeramicsProduct)
})


const PopularProducts = [
    {
        img: 'img/popular-products-section/01.jpg',
        alt:'01',
        name:'The Poplat suede sofa',
        price:'£980',
        aLink:'#'
    },
    {
        img: 'img/popular-products-section/02.jpg',
        alt:'02',
        name:'The Dandy chair',
        price:'£250',
        aLink:'#'
    },
    {
        img: 'img/popular-products-section/03.jpg',
        alt:'03',
        name:'The Dandy chair',
        price:'£250',
        aLink:'#'
    },
]

const ulPopularProductsList=document.querySelector('.popular-products-list')

PopularProducts.forEach((element)=>{
    const PopularProductItem = `<li class="popular-products-list-item">
    <a href=${element.aLink} class="popular-products-list-item-link">
        <img src=${element.img} alt=${element.alt} class="popular-products-list-item-img">
        <div class="popular-products-list-item-name">${element.name}</div>
        <div class="popular-products-list-item-price">${element.price}</div>
    </a>
    </li>`

    ulPopularProductsList.innerHTML+=PopularProductItem
})


