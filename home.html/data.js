var Data = [
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "main"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "main"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "main"
    },

    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "second"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "second"
    },
    {
        Image: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        head: "Freshly has changed our lives!",
        desc: "With Freshly, we don't have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half, We love it.",
        name: "Dave",
        cat: "second"
    }
]

arrangeData(Data)
function arrangeData(data) {
    data.map(function (el) {
        var div = document.createElement("div")
        div.setAttribute("class", "notice")

        var image = document.createElement("img");
        image.setAttribute("src", el.image)

        var Head = document.createElement("h2");
        Head.textContent = el.head;

        var para1 = document.createElement("p");
        para1.textContent = el.desc;

        var para2 = document.createElement("p");
        para2.textContent = el.name;

        div.append(image, Head, para1, para2)
        document.querySelector("#jscontainer").append(div)
    })
}