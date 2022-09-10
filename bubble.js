function createType(id, type) {
    let typeDiv = document.createElement("div")
    typeDiv.className="type"

    let dot = document.createElement("span")
    dot.className = "dot"
    dot.id=id
    let text = document.createElement("span")
    text.innerText = `= ${type}`

    typeDiv.appendChild(dot)
    typeDiv.appendChild(text)
    return typeDiv
}

let categories = document.getElementsByClassName("category")[0]
categories.appendChild(createType('milktea', 'Milk Tea'))
categories.appendChild(createType('slushy', 'Slushy'))
categories.appendChild(createType('honeytea', 'Honey Tea'))
categories.appendChild(createType('freshtea', 'Fresh Tea'))
categories.appendChild(createType('milkshake', 'Milkshake'))
categories.appendChild(createType('smoothie', 'Smoothie'))

let legend = document.getElementsByClassName("legend")[0]
legend.appendChild(createType('milktea', 'Milk Tea'))
legend.appendChild(createType('slushy', 'Slushy'))
legend.appendChild(createType('honeytea', 'Honey Tea'))
legend.appendChild(createType('freshtea', 'Fresh Tea'))
legend.appendChild(createType('milkshake', 'Milkshake'))
legend.appendChild(createType('smoothie', 'Smoothie'))

function createFlavor(imageLink, flavorName, baseName, toppingName, color) {
    let div = document.createElement("div")
    div.className="original drink"
    let img = document.createElement("img")
    img.src = imageLink
    let flavor = document.createElement("p")
    flavor.className="bold"
    flavor.innerText = flavorName
    let base = document.createElement("p")
    base.className=`bold ${color}`
    base.innerText = baseName
    let toppings = document.createElement("p")
    toppings.className="toppings"
    toppings.innerText = toppingName

    div.appendChild(img)
    div.appendChild(flavor)
    div.appendChild(base)
    div.appendChild(toppings)
    return div
}

let flavors = document.getElementsByClassName("flavors")[0]
flavors.appendChild(createFlavor(
    "https://assets.epicurious.com/photos/629f98926e3960ec24778116/1:1/w_960,c_limit/BubbleTea_RECIPE_052522_34811.jpg", 
    "Original",
    "Milk Tea",
    "with Pearls",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "https://takestwoeggs.com/wp-content/uploads/2022/03/Taro-Milk-Tea-Final-Photography-1.jpg", 
    "Taro", 
    "Milk Tea",
    "with Pearls",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "https://www.honestfoodtalks.com/wp-content/uploads/2021/11/Honeydew-milk-tea-recipe.jpeg", 
    "Rockmelon", 
    "Milk Tea",
    "with Green Apple Jelly",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "http://theherbeevore.com/wp-content/uploads/2021/04/wp-16179257336172012767007135287371.jpg", 
    "Oatmeal", 
    "Milk Tea",
    "with Chocolate Ice Cream",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "http://cdn.shopify.com/s/files/1/1986/9147/articles/m10_1024x1024.jpg?v=1559689248", 
    "Matcha", 
    "Milk Tea",
    "with Redbean",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "https://www.onionringsandthings.com/wp-content/uploads/2018/07/creamy-strawberry-aqua-fresca-3.jpg", 
    "Creamy Strawberry", 
    "Pudding",
    "with Egg Pudding and Pearls",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "https://www.sugarsalted.com/wp-content/uploads/2015/08/ice-cream-iced-coffee-with-whipped-cream-5-01.jpg", 
    "Coffee", 
    "Milk Tea",
    "with Vanilla Ice Cream",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "https://takestwoeggs.com/wp-content/uploads/2021/04/Brown-Sugar-Milk-Tea-Boba-Recipe-Takestwoeggs-Easy-Asian-Inspired-Recipes-sq.jpg", 
    "Brown Sugar", 
    "Milk Tea",
    "with Pearls",
    "blue"
    ))
flavors.appendChild(createFlavor(
    "https://theflavorbells.com/wp-content/uploads/2021/07/lychee-tea-683x1024.jpg", 
    "Lychee", 
    "Green Tea",
    "with Lychee and Popping Bobas",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://www.masalaherb.com/wp-content/uploads/2019/06/Iced-Passion-Fruit-Green-Tea-1.jpg", 
    "Passionfruit", 
    "Green Tea",
    "with Passionfruit Jelly and Pearls",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://cdn.foodaciously.com/static/recipes/7205ced8-8409-4261-942b-243d36e11278/passion-fruit-bubble-tea-sugar-free-95fce9ec4a30ebfb3eac6f42c14ed3e1-1920-q60.jpg", 
    "Passionfruit", 
    "Black Tea",
    "with Passionfruit Jelly and Pearls",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://static.wixstatic.com/media/67bcc1_ce3fcfa3c86341b381051c6f6b2d0a91~mv2.jpeg/v1/fill/w_750,h_1000,al_c,q_85/67bcc1_ce3fcfa3c86341b381051c6f6b2d0a91~mv2.jpeg", 
    "Apple Aloe", 
    "Green Tea",
    "with Honey Aloe and Pearls",
    "green"
    ))
flavors.appendChild(createFlavor(
    "http://miphosongvu.com/2015/wp-content/uploads/2015/06/peach.jpg", 
    "Peach", 
    "Green Tea",
    "with Passionfruit and Lychee Popping Boba",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://sugaryums.co.uk/wp-content/uploads/2022/04/Strawberry-Milk-Tea-SugarYums-1.jpg", 
    "Strawberry", 
    "Green Tea",
    "with Pineapple Jelly and Lychee Jelly",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://recipesbycarina.com/wp-content/uploads/2021/12/Lemon-Lime-and-Bitters-Square-2-720x540.jpg", 
    "Lemon Lime", 
    "Jelly Tea",
    "with Lemon Pudding",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://showmetheyummy.com/wp-content/uploads/2015/08/Honey-Strawberry-Lemonade-Horizontal-500x400.jpg", 
    "Honey", 
    "Grape Fruit",
    "with Honey Aloe",
    "green"
    ))
flavors.appendChild(createFlavor(
    "https://thebusybaker.ca/wp-content/uploads/2018/03/healthy-strawberry-lemonade-fbig2.jpg", 
    "Strawberry", 
    "Slushy",
    "with Grape Jelly and Strawberry Popping Boba",
    "purple"
    ))
flavors.appendChild(createFlavor(
    "https://cdn.sprinklebakes.com/media/2015/04/Boba2BTea2BBubble2BTea.jpg", 
    "Mango", 
    "Slushy",
    "with Pearls and Passionfruit Popping Boba",
    "purple"
    ))
flavors.appendChild(createFlavor(
    "http://static1.squarespace.com/static/5cef7b136434550001a53d10/5cef8b66bd293b0001bb0883/5cef8b66bd293b0001bb0893/1650475012843/Boba-Coffee.jpg?format=1500w", 
    "Mocha", 
    "Slushy",
    "with Pearls and Coffee Jelly",
    "purple"
    ))
flavors.appendChild(createFlavor(
    "https://www.webstaurantstore.com/images/products/large/636893/2275161.jpg", 
    "Green Apple", 
    "Slushy",
    "with Pearls",
    "purple"
    ))