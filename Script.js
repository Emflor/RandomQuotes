function generate(){
    var quotes = {
        "- Steve Jobs" : '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.”',
        "- Dr. Seuss" : '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
        "- Mahatma Gandhi" : '"Live as if you were to die tomorrow. Learn as if you were to live forever."'
    }
    
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[author];
    
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}