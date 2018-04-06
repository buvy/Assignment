
export function fetchData() {
    return dispatch => {
        fetch('http://texpertise.in/data.php')
        .then(results => {
            return results.json();
        })
        .then(response => {
            dispatch({ type: "FETCH_SUCCESS", response})
            console.log(response, "response");
        });
    }
} 