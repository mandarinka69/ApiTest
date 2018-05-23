const axios = require('axios');
let helpers = require('./helpers');
const ResponseStatusList = helpers.ResponseStatusList;
const login = helpers.login;
let expect = require('chai').expect;
let responseStatusList = new ResponseStatusList();

describe("tests", () => {
    it("block_search", async () => {
        let url = "https://s-ua.auto.ria.com/blocks_search_ajax/search/";
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });

    it("auto_info_see_ads_1", async () => {
        let url = 'https://c-ua1.riastatic.com/demo/bu/searchPage/v2/view/auto/2010/200971/20097083?lang_id=2';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });

    it("auto_info_see_ads_2", async () => {
        let url = 'https://auto.ria.com/demo/bu/searchPage/v2/view/auto/21081572?lang_id=2';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });


    it("info_about_seller", async () => {
        let url = 'https://auto.ria.com/demo/bu/finalPage/users/929064?&langId=2';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });

    it("get_comment_to_ads", async () => {
        let url = 'https://auto.ria.com/demo/bu/finalPage/advertisements/wall/21081572/types/1?langId=2';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });


    it("add_comment_post", async () => {
        await login().then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response);
        });



    ;



    it("notepad",async () => {
        let url = 'http://bookmarks.rest.auto.ria.com/bookmarks/4778298?project_id=1&content_type_id=1&section=users';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });

    it("get_exchange_to_ads",async () => {
        let url = 'https://auto.ria.com/demo/bu/finalPage/advertisements/wall/21081572/types/3?langId=2';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });


    it("my_active_ads", async() => {
        let url = 'https://auto.ria.com/mobileApi2/user/ads?&page=0&countpage=20';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });


    it("my_drafts", async() => {
        let url = 'http://api.mobile.rest.auto.ria.com/user_advertisements/929064?status_id=13&page=0&count=20';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });

    it("my_archive", async() => {
        let url = 'http://api.mobile.rest.auto.ria.com/user_archive_advertisements/929064?page=0&count=20';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });

    it("my_wait_pay", async() => {
        let url = 'http://api.mobile.rest.auto.ria.com/user_advertisements/929064?status_id=8&page=0&count=20';
        let response = null;
        await axios.get(url)
            .then(function (response_) {
                response = response_;
            })
            .catch(function (response_) {
                response = response_;
            });

        responseStatusList.addResult(url, response);
        expect(response.status).to.equal(200);
    });











    after(function () {
       // responseStatusList.print();
    });
});

