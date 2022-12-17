const chai = require('chai');
const { expect } = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

const apiUser = require('../api/api_user');
const apiData = require('../data/api_user_data');
const scenarios = require('../scenarios/scenarios');
const requestBody = require('../data_json/create-user.json');

describe(scenarios.CreateUser.description, async () => {

    it('Test Apakah Get Username salah itu tidak keluarkan data', async () => {
        // your scripting code start

        const response = await apiUser.getUserByName('Dhony');

        console.log(response.body);
        expect(response.body.status).to.equal('success');
        
    });

    it(scenarios.CreateUser.testCases.case1, async () => {
        // your scripting code start
        const dataCreateUser =  apiData.userData('Andri', 'Gamers');
        const response = await apiUser.postUserCreate(dataCreateUser);

        const { firstName, hobbies } = dataCreateUser;

        expect(response.status).to.equal(200);
        expect(response.body.firstName).to.equal(firstName);
        
        expect(response.body.hobbies).to.be.array();
        expect(response.body.hobbies).to.be.equalTo(hobbies);

        expect(response.body.hobbies).to.be.containingAllOf([ "Manga", "Selling", "Sales" ]);
        expect(response.body.hobbies).to.be.containing('tawuran');
        
    });

    it(scenarios.CreateUser.testCases.case2, async () => {
        // your scripting code start
        let body = {}
        Object.assign(body, requestBody)
        body.age = -10;

        const response = await apiUser.postUserCreate(body)
       
       
        expect(response.status).to.equal(400)
        
    });

    it(scenarios.PutUser.positive.case3, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.occupation = "Teacher";

        const response = await apiUser.postUserCreate(body)
        console.log(body)
        console.log(response.body)
        expect(response.status).to.equal(200);
    });

    it(scenarios.PutUser.positive.case4, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.nationality = "Korea Utara";

        const response = await apiUser.postUserCreate(body)
        console.log(body)
        console.log(response.body)
        expect(response.status).to.equal(200);
    });

    it(scenarios.PutUser.negative.case5, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.age= 0;

        const response = await apiUser.postUserCreate(body)
        console.log(body)
        console.log(response.body)
        expect(response.status).to.equal(400);
    });

    it(scenarios.PutUser.negative.case6, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.hobbies= [","];

        const response = await apiUser.postUserCreate(body)
        console.log(body)
        console.log(response.body)
        expect(response.status).to.equal(400);
    });

    it(scenarios.PutUser.negative.case7, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.id= null;

        const response = await apiUser.postUserCreate(body)
        console.log(body)
        console.log(response.body)
        expect(response.status).to.equal(400);
    });

    it(scenarios.GetUser.positive.case8, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.id= 1;

        const response = await apiUser.postUserCreate(body)
        console.log(body)
        expect(response.status).to.equal(400);
        console.log(response.body);
        expect(response.body.status).to.equal('success');
    });

    it (scenarios.GetUser.negative.case9, async () => {
        let body = {}
        Object.assign(body,requestBody)
        body.id= 9999;

        const response = await apiUser.postUserCreate(body);
        console.log(body);
        expect(response.status).to.equal(400);
        console.log(response.body);
        expect(response.body.status).to.equal('failed');
    });

})

