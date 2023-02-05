#Description

This is a test suite which covers basic UI tests for the MostlyAI website.

#System requirements and installation

for the how to install cypress information you can refer to the cypress guides: https://docs.cypress.io/guides/getting-started/installing-cypress

#How to run

pull the project from github
in terminal run: npx cypress run
in the opened cypress window select 'E2E Testing'
select Chrome browser and press ' Start E2E Testing in Chrome'
in the opened browser page click on 'testChallenge' file to run the tests 


#Issues

I've face several issues while developing the tests. 

Loading of the contact form takes more time than Cypress allows by default, therefore I had to adjust the waiting time. But still the test fails with the timeout error

