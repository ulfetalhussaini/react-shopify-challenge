// key=  61b843cd
// http://www.omdbapi.com/?i=tt3896198&apikey=61b843cd


// http://www.omdbapi.com/?apikey=61b843cd

// a request example
//http://www.omdbapi.com/?t=titanic&apikey=61b843cd


const API_KEY = "http://www.omdbapi.com/?apikey=61b843cd"

export function QUERY_BY_TITLE(title){
    return `${API_KEY}&s=${title}`
}

