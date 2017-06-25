const settings = {};

const getRandom = () => Math.random().toString(36).substring(2, 12);

const start = (endpoint) => {
  settings._browser = localStorage.getItem('browser');
  if (settings._browser === null) {
    settings._browser = getRandom();
    localStorage.setItem('browser', settings._browser);
  }
  settings._session = getRandom();
  settings._endpoint = endpoint;
};

const send = (data) => {
  const postData = data;
  postData.browser = settings._browser;
  postData.session = settings._session;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', settings._endpoint);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(postData));
};

export default { start, send };
