function createDiv(classStyle, innerText=""){
    var div = document.createElement("div")

    div.setAttribute("class", classStyle)
    div.innerText = innerText
    return div
}

function createAnchor(classStyle, innerText, href){
    var a = document.createElement("a")

    a.setAttribute("class", classStyle)
    a.innerText = innerText
    a.setAttribute("href", href)
    return a
}

var containerDiv = createDiv("container p-3")

// create "HighOnCoding" section
var headerDiv = createDiv("header d-flex align-items-center")

    // create header elements
    var highOnCodingAnchor = createAnchor("h1 p-4 text-white text-decoration-none", "HighOnCoding", "#")

    var homeAnchor = createAnchor("h3 p-5 text-white text-decoration-none", "Home", "#")

    var categoriesAnchor = createAnchor("h3 fw-lighter p-3 text-white text-decoration-none", "Categories", "#")

// build the header
headerDiv.append(highOnCodingAnchor, homeAnchor, categoriesAnchor)

// append header to containerDiv
containerDiv.append(headerDiv)



// create "Curse of the Current Reviews" section
var reviewsContainerDiv = createDiv("bg-gray m-4")

    // create "Curse of the Current Reviews" section elements
    var reviewsTitleDiv = createDiv("h1 p-4 text-black text-opacity-75", "Curse of the Current Reviews")

    var reviewsContentDiv = createDiv("fs-5 p-4", "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot and reviews.")

// build "Curse of the Current Reviews" section
reviewsContainerDiv.append(reviewsTitleDiv, reviewsContentDiv)

// append section to containerDiv
containerDiv.append(reviewsContainerDiv)



// create "Hello WatchKit" section
var watchContainerDiv = createDiv("m-4")
    // create "Hello WatchKit" section elements
    var watchKitAnchor = createAnchor("h3 text-decoration-none ps-2", "Hello WatchKit", "#")

    var watchContentDiv = createDiv("fs-5 pt-2 ps-1", "Last Month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article, we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.")
    
    // create Comments and Likes section
    var watchCommentsLikesDiv = createDiv("comments_likes d-flex fw-bold")

        // create Comments and Likes section elements
        var watchCommentsDiv = createDiv("py-1 px-3", "12 comments")

        var watchLikesDiv = createDiv("py-1 px-3", "124 likes")

// build Comments and Likes section
watchCommentsLikesDiv.append(watchCommentsDiv, watchLikesDiv)

// build "Hello WatchKit" section
watchContainerDiv.append(watchKitAnchor, watchContentDiv, watchCommentsLikesDiv)

// append section to containerDiv
containerDiv.append(watchContainerDiv)



// create "Introduction to Swift" section
var swiftDiv = createDiv("m-4")

    // create "Introduction to Swift" section elements
    var swiftAnchor = createAnchor("h3 text-decoration-none ps-2", "Introduction to Swift", "#")

    var swiftContentDiv = createDiv("fs-5 pt-2 ps-1", "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.")

    // create Comments and Likes section
    var swiftCommentsLikesDiv = createDiv("comments_likes d-flex fw-bold")

        // create Comments and Likes section elements
        var swiftCommentsDiv = createDiv("py-1 px-3", "15 comments")
        var swiftLikesDiv = createDiv("py-1 px-3", "45 likes")

    // build Comments and Likes section
    swiftCommentsLikesDiv.append(swiftCommentsDiv, swiftLikesDiv)

// build "Introduction to Swift" section
swiftDiv.append(swiftAnchor, swiftContentDiv, swiftCommentsLikesDiv)

// append section to containerDiv
containerDiv.append(swiftDiv)



// declare body variable
var body = document.querySelector("body")

//append containerDiv to body
body.append(containerDiv)