const scenarios = {
    "CreateUser" : {
        description : "[@CreateUser] Create User API",
        testCases : {
            case1 : '[@TC1] Verify create user API return 200 when using valid request data',
            case2 : '[@TC2] Verify create user API return 400 when using data age <=0',
        }
    },
    "PutUser" : {
        description : "[@PutUser] Put User API",
        positive : {
            case3 : '[@TC3] Verify update user API return 200 when using data Occupation ',
            case4 : '[@TC4] Verifiy update user API return 200 when using data Nationality',
        },
        negative : {
            case5 : '[@TC5] Verify update user API return 400 when using data age = 0',
            case6 : '[@TC6] Verify update user API return 400 when using empty array in data hobbies',
            case7 : '[@TC7] Verify update user API return 400 when using data null in data id',
        }
    },
    "GetUser" : {
        description : "[@GetUser] Get User API",
        positive : { 
            case8 : '[@TC8] Verify get user API return 200 when get valid id'
        },
        negative : {
            case9 : '[@TC9] Verify user user API return 400 when get invalid id '
        }
    }
    
}

module.exports = scenarios