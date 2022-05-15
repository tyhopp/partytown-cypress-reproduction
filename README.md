# Partytown Cypress Issue Reproduction

Unable to test Partytown in Cypress.

To verify everything works normally `npm run start` and see `success` appended to the DOM (done in a Partytown script in [src/app.js](./src/app.jsx)).

To see it fail in Cypress run `npm run start` in one terminal window, open another, and run `npm run test`.

Select the [index.js](./cypress/integration/index.js) test and see `success` failed to be appended to the DOM.
