const axios = require('axios');
const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM();

let ResponseStatusList = function () {
    let self = this;

    let responseStatusList = [];

    function init() {
    }

    self.addResult = function (url, response) {
        responseStatusList.push({
            url: url,
            status: response.status,
            data: response.data
        });
    };

    self.print = function () {
        console.log("=========================RESULT====================");
        console.log(JSON.stringify(responseStatusList));
        console.log("==========================END======================");
    };

    init();

    return self;
};

let login = function () {
    let self = this;

    let url = 'https://login.ria.com/mobile/login';
    let phone_number = '0971927133';
    let password = '25d55ad283aa400af464c76d713c07ad';

    let bodyFormData = new window.FormData();
    bodyFormData.append('phone_number', phone_number);
    bodyFormData.append('password', password);

    return axios.post(url, {
            phone_number: phone_number,
            password: password
        }
    )
};

module.exports = {
    ResponseStatusList: ResponseStatusList,
    login: login
};