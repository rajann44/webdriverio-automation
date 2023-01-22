const url = require('./testData/url')
const ENV = process.env.ENV
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

if(!ENV){
    console.log('Please use ENV variable in CLI when running test: ENV=dev|staging|prod')
    process.exit()
}

import { config } from "../config/basewdio.conf";

    config.specs = [
        './test/**/*.js'
    ]

    config.suites = {
        smoke: ['./test/smoke/*.js',],
        regression: ['./test/regression/*.js',]
    }

    config.maxInstances = 2

    config.capabilities = [
        {
            browserName: 'chrome',
            'goog:chromeOptions': { 
                 args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
            }
        }
    ]

    config.baseUrl = url[ENV]

    config.services = ['chromedriver', [TimelineService]]

    config.reporters = ['spec', ['timeline', { outputDir: './reports', fileName: 'index.html' }]]





exports.config = config