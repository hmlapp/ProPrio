const baseurl = '';
function getList(callback) {
    fetch(baseurl)
        .then(function (response) {
            if (!response.ok) {
                const virheviesti = { status: response.status, statusText: response.statusText, viesti: 'Getting tasks' }
                throw virheviesti;
            }
            return response.json();
        })
        .then(function (list) {
            callback(list);
        });
}

function addTask(task, callback) {
    return fetch(baseurl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
        .then(function (response) {
            callback(response.status);
        });
}
export { getList, addTask }