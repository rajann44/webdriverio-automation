// wdio.dev.config.js
import { deepmerge } from 'deepmerge-ts'
import wdioConf from './basewdio.conf.js'
const url = require('./../testData/url')
const ENV = process.env.ENV
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

if(!ENV){
    console.log('Please use ENV variable in CLI when running test: ENV=dev|staging|prod')
    process.exit()
}

// have main config file as default but overwrite environment specific information
export const config = deepmerge(wdioConf.config, {
    capabilities: [
        // more caps defined here
        // ...
        {
            browserName: 'chrome',
            'goog:chromeOptions': { 
                 args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
            }
        }
    ],

    // run tests on sauce instead locally
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['chromedriver', [TimelineService]],
    specs: ['./test/**/*.js'],
    baseUrl: url[ENV],
    maxInstances: 2,
    suites: {
        smoke: ['./test/smoke/*.js',],
        regression: ['./test/regression/*.js',]
    },
    specs: ['./test/**/*.js'],
    reporters: ['spec', ['timeline', { outputDir: './reports', fileName: 'index.html' }]]


}, { clone: false })