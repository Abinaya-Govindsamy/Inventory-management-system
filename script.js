// ================= PRODUCTS =================

let products = [];


// ================= CURRENCIES =================

const currencies = {

    INR: { symbol: "₹", rate: 1 },
    USD: { symbol: "$", rate: 0.012 },
    EUR: { symbol: "€", rate: 0.010 },
    GBP: { symbol: "£", rate: 0.0086 },
    JPY: { symbol: "¥", rate: 1.72 },
    CNY: { symbol: "¥", rate: 0.087 },
    AUD: { symbol: "A$", rate: 0.018 },
    CAD: { symbol: "C$", rate: 0.016 },
    CHF: { symbol: "CHF", rate: 0.011 },
    SGD: { symbol: "S$", rate: 0.016 },
    HKD: { symbol: "HK$", rate: 0.093 },
    KRW: { symbol: "₩", rate: 16.5 },
    RUB: { symbol: "₽", rate: 0.95 },
    AED: { symbol: "د.إ", rate: 0.044 },
    SAR: { symbol: "﷼", rate: 0.045 },
    THB: { symbol: "฿", rate: 0.39 },
    MYR: { symbol: "RM", rate: 0.052 },
    IDR: { symbol: "Rp", rate: 197 },
    PHP: { symbol: "₱", rate: 0.69 },
    PKR: { symbol: "₨", rate: 3.40 },
    BDT: { symbol: "৳", rate: 1.46 },
    LKR: { symbol: "Rs", rate: 3.65 },
    NPR: { symbol: "Rs", rate: 1.60 },
    ZAR: { symbol: "R", rate: 0.22 },
    BRL: { symbol: "R$", rate: 0.067 },
    MXN: { symbol: "$", rate: 0.23 }

};


// ================= PAGE LOAD =================

window.onload = function () {

    loadCurrencies();

    document.getElementById("currency").value = "INR";

    displayProducts();

    updateDashboard();

};


// ================= LOAD CURRENCIES =================

function loadCurrencies() {

    let select = document.getElementById("currency");

    select.innerHTML = "";

    for (let code in currencies) {

        let option = document.createElement("option");

        option.value = code;

        option.textContent =
            currencies[code].symbol + " " + code;

        select.appendChild(option);

    }

}


// ================= MODAL =================

function openAddProduct() {

    document.getElementById("productModal").style.display = "flex";

}


function closeModal() {

    document.getElementById("productModal").style.display = "none";

}


// ================= SAVE PRODUCT =================

function saveProduct() {

    let name =
        document.getElementById("name").value;

    let sku =
        document.getElementById("sku").value;

    let category =
        document.getElementById("category").value;

    let quantity =
        parseInt(document.getElementById("quantity").value);

    let price =
        parseFloat(document.getElementById("price").value);


    if (
        name === "" ||
        sku === "" ||
        category === "" ||
        isNaN(quantity) ||
        isNaN(price)
    ) {

        alert("Please fill all fields");

        return;

    }


    let product = {

        id: Date.now(),

        name: name,

        sku: sku,

        category: category,

        quantity: quantity,

        price: price

    };


    products.push(product);

    displayProducts();

    updateDashboard();

    closeModal();

}


// ================= PRICE CONVERSION =================

function convertPrice(price) {

    let currency =
        document.getElementById("currency").value;

    if (!currencies[currency]) {

        currency = "INR";

    }

    let converted =
        price * currencies[currency].rate;

    return (
        currencies[currency].symbol +
        converted.toFixed(2)
    );

}
// ================= DISPLAY PRODUCTS =================

function displayProducts() {

    let table =
        document.getElementById("productTable");

    table.innerHTML = "";

    products.forEach(product => {

        let status = "In Stock";

        if (product.quantity <= 5) {

            status = "Low Stock";

        }

        if (product.quantity === 0) {

            status = "Out Of Stock";

        }

        table.innerHTML += `

        <tr>

            <td>${product.id}</td>

            <td>📦</td>

            <td>${product.name}</td>

            <td>${product.sku}</td>

            <td>${product.category}</td>

            <td>${product.quantity}</td>

            <td>${convertPrice(product.price)}</td>

            <td>${status}</td>

            <td>

                <button onclick="deleteProduct(${product.id})">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}


// ================= DELETE PRODUCT =================

function deleteProduct(id) {

    products = products.filter(

        product => product.id !== id

    );

    displayProducts();

    updateDashboard();

}


// ================= SEARCH PRODUCT =================

function searchProduct() {

    let value =

        document.getElementById("search")

        .value

        .toLowerCase();

    let rows =

        document.querySelectorAll("#productTable tr");

    rows.forEach(row => {

        if (

            row.innerText.toLowerCase()

            .includes(value)

        ) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }

    });

}


// ================= UPDATE DASHBOARD =================

function updateDashboard() {

    document.getElementById("totalProducts")

        .innerHTML = products.length;


    let stock = 0;

    let low = 0;

    let totalValue = 0;


    products.forEach(product => {

        if (product.quantity > 5) {

            stock++;

        }

        if (product.quantity <= 5) {

            low++;

        }

        totalValue +=

            product.quantity * product.price;

    });


    document.getElementById("stockProducts")

        .innerHTML = stock;


    document.getElementById("lowProducts")

        .innerHTML = low;


    document.getElementById("inventoryValue")

        .innerHTML = convertPrice(totalValue);

}


// ================= CURRENCY CHANGE =================

function currencyChanged() {

    displayProducts();

    updateDashboard();

}


// ================= DARK MODE =================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}
// ================= CHATBOT =================

function toggleChatbot() {

    let chatWindow =
        document.getElementById("chatWindow");

    if (
        chatWindow.style.display === "block"
    ) {

        chatWindow.style.display = "none";

    } else {

        chatWindow.style.display = "block";

    }

}


// ================= SEND MESSAGE =================

function sendMessage() {

    let input =
        document.getElementById("chatInput");

    let messages =
        document.getElementById("messages");

    let message = input.value.trim();

    if (message === "") {

        return;

    }

    messages.innerHTML +=
        "<p><b>You:</b> " +
        message +
        "</p>";

    let reply =
        "I am your AI Inventory Assistant 🤖";

    if (
        message.toLowerCase().includes("stock")
    ) {

        reply =
            "Current total products: " +
            products.length;

    }

    messages.innerHTML +=
        "<p><b>AI:</b> " +
        reply +
        "</p>";

    input.value = "";

}


// ================= VOICE SEARCH =================

function startVoiceSearch() {

    if (
        'webkitSpeechRecognition' in window
    ) {

        let recognition =
            new webkitSpeechRecognition();

        recognition.lang = "en-US";

        recognition.start();

        recognition.onresult = function (event) {

            document.getElementById("search").value =
                event.results[0][0].transcript;

            searchProduct();

        };

    }

    else {

        alert(
            "Voice Search is not supported."
        );

    }

}


// ================= QR CODE SCANNER =================

function startQRScanner() {

    let scanner =
        new Html5Qrcode("reader");

    scanner.start(

        { facingMode: "environment" },

        {
            fps: 10,
            qrbox: 250
        },

        function (decodedText) {

            document.getElementById("search").value =
                decodedText;

            searchProduct();

            scanner.stop();

        },

        function (error) {

        }

    );

}


// ================= BARCODE SCANNER =================

function startBarcodeScanner() {

    Quagga.init({

        inputStream: {

            name: "Live",

            type: "LiveStream",

            target:
                document.querySelector(
                    "#barcode-reader"
                )

        },

        decoder: {

            readers: [

                "code_128_reader",

                "ean_reader",

                "ean_8_reader"

            ]

        }

    },

    function (err) {

        if (err) {

            console.log(err);

            return;

        }

        Quagga.start();

    });

    Quagga.onDetected(function (data) {

        document.getElementById("search").value =

            data.codeResult.code;

        searchProduct();

        Quagga.stop();

    });

}


// ================= IMAGE SEARCH =================

document
.getElementById("imageSearch")
.addEventListener("change",

function () {

    let file =
        this.files[0];

    if (!file) {

        return;

    }

    alert(
        "Image uploaded successfully. AI image recognition can be connected later."
    );

});