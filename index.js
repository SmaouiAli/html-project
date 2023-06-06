var data = [
    {
      title: "Laptop",
      image: "./images/pc1.jfif",
      description: "Powerful and portable computing device",
      price: "$999"
    },
    {
      title: "Smartphone",
      image: "./images/phone.jfif",
      description: "High-performance mobile device with advanced features",
      price: "$699"
    },
    {
      title: "Headphones",
      image: "./images/headphone.jfif",
      description: "Wireless over-ear headphones with noise-cancellation",
      price: "$199"
    },
    {
      title: "Keyboard",
      image: "./images/keyboard.jfif",
      description: "Mechanical gaming keyboard with customizable RGB lighting",
      price: "$129"
    },
    {
      title: "Mouse",
      image: "./images/mouse.jfif",
      description: "Ergonomic gaming mouse with adjustable DPI settings",
      price: "$59"
    }
  ];



var template =  `
<div id="card">

<h2>Title</h2>
<img src = "./images/pc1.jfif" class="cardImage">
<p>Description</p>
<p>Price:</p>

</div>`

function displayData () {

  var container = $('#container')

  for (var i = 0 ; i<data.length;i++) {
    var card = $("<div class='card'> </div>")
    var h2= $(`<h2>${data[i].title}</h2>`)
    var img = $(`<img src = ${data[i].image} class="cardImage">`)
    var desc = $(`<p>${data[i].description}</p>`)
    var price = $(`<p>Price: ${data[i].price}</p>`)
    card.append(h2,img,desc,price)
    container.append(card)
  }

}

$("#form").hide()

$("#prod").click(function() {
  $("#form").toggle()
})

function addNewProduct() {
  var newProduct = {
      title:$("#title").val(),
      image: $('#img').val(),
      description: $('#desc').val(),
      price: $('#price').val()
    }
    
  data.push(newProduct)
  $('#container').empty()
  displayData()
}

displayData()

$("#sub").click(addNewProduct)