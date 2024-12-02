'use es6';

export default ((url, onsuccess, {
    onerror,
    headers = {},
    withCredentials = false
} = {}) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            const {
                responseText,
                status
            } = request;
            if (status >= 200 && status < 300) onsuccess(JSON.parse(responseText));
            else if (onerror) onerror(request);
        }
    };
    request.open('GET', url);
    if (withCredentials) {
        request.withCredentials = true;
    }
    Object.keys(headers).forEach(key => {
        request.setRequestHeader(key, headers[key]);
    });
    request.send();
});