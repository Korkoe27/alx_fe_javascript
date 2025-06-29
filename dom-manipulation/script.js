

const quotes = [

        {
            "text":"The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "category":"inspirational"
        },
        {
            "text":"The way to get started is to quit talking and begin doing.",
            "category":"motivational"
        },
        {
            "text":"Life is what happens when you're busy making other plans.",
            "category":"life"
        },
        {
            "text":"Get busy living or get busy dying.",
            "category":"life"
        },
        {
            "text":"You only live once, but if you do it right, once is enough.",
            "category":"life"
        }

    ]


    
    
    
    function showRandomQuote()
    {

        const quoteDisplay = document.getElementById('quoteDisplay');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        quoteDisplay.innerHTML = `<p>${randomQuote.text}</p><p><em>Category: ${randomQuote.category}</em></p>`;
    }   


 function createAddQuoteForm() {
        const formContainer = document.createElement('div');
        formContainer.innerHTML = `
            <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
            <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
            <button id="addQuoteButton">Add Quote</button>
        `;
        document.body.appendChild(formContainer);
    }
