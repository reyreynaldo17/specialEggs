const assert = require('assert');

Feature('Review Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('post a restaurant review', async ({ I }) => {
    
    const reviewText = 'E2E Post Review Text'
    I.amOnPage('/');
    I.seeElement('.list-item a');
    I.click(locate('.list-item a').first());
  
    I.seeElement('#customerReviewFormContainer form');
    I.fillField('#inputName', 'E2E testing');
    I.fillField('#inputReview', reviewText);
    I.click('#submitReview');
  
    const lastReview = locate('.review-comment p').last();
    const lastReviewText = await I.grabTextFrom(lastReview);
    assert.strictEqual(reviewText, lastReviewText.trim());
});