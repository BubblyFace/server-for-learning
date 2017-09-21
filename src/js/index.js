const init = () => {
    console.log('this is a test')
    testXHR()
    testXHR2()

}

const testXHR = () => {
    let get_X = new XMLHttpRequest('')
    get_X.open("GET", "/test");
    get_X.send('test');
    get_X.onreadystatechange = function() {
        if (get_X.readyState == 4 && get_X.status == 200) {
            alert(get_X.responseText);
        }
    }
}

const testXHR2 = () => {
    let get_X = new XMLHttpRequest('')
    get_X.open("POST", "/test2");
    get_X.send('test');
    get_X.onreadystatechange = function() {
        if (get_X.readyState == 4 && get_X.status == 200) {
            alert(get_X.responseText);
        }
    }
}

window.onload = init