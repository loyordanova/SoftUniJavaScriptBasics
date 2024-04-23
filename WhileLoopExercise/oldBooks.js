function oldBooks(input) {
    let searchedBook = input.shift();
    let index = 0;
    let book = input[index];
    let checkedBooks = 0;

    while (book !== 'No More Books') {
        
        if (book === searchedBook) {
            console.log(`You checked ${checkedBooks} books and found it.`)
            return;
        }
        checkedBooks ++;
        index ++;
        book = input[index];

    }

    console.log(`The book you search is not here!\nYou checked ${checkedBooks} books.`)
    
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
