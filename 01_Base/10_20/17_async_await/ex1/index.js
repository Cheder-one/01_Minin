const POST_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;

// const createNewPost = () => {
//     isLoading = true;
//     fetch(POST_URL, {
//         method: 'POST'
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log('result:', result);
//         })
//         .catch((error) => {
//             console.log('error:', error)
//         })
//         .finally(() => {
//             isLoading = false
//         })
// }
// createNewPost();

const createNewPost = async () => {
    try {
        isLoading = true;
        const response = await fetch(POST_URL, {method: 'POST'})
        const result = await response.json()
        console.log('result:', result);    
    } 
    catch(error) {
        console.log('error:', error)
    }
    finally {
        isLoading = false
    }
}
createNewPost()