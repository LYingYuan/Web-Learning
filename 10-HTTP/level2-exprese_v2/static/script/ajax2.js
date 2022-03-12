const server_url = "http://127.0.0.1";

function Ajax(ajax) {
    const url = `${server_url}/${ajax.url}`;
    const method = ajax.method.toUpperCase();
    const async = ajax.async === undefined ? true : ajax.async;
    const data = ajax.data;

    const xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            const status = xhr.status;
            if ((status >= 200 && status < 300) || status === 304) {
                ajax.success(JSON.parse(xhr.responseText));
            } else {
                ajax.error();
            }
        }
    };
    xhr.send(data);
}

export default { Ajax };
