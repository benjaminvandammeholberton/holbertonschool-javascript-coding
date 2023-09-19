#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        console.error(error);
    } else {
        const data = JSON.parse(body)
        const new_dict = {}
        for (item of data) {
            if (item.completed === true) {
                if (!new_dict[item.userId]){
                    new_dict[item.userId] = 1
                } else {
                    new_dict[item.userId] = new_dict[item.userId] + 1
                }
                
            }
        
            
        }
        console.log(new_dict)
        
    }
})
