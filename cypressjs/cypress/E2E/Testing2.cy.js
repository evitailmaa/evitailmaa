describe('Testing Orange Web', () => {
    beforeEach (() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
})
it ('Leave Employee' , () => {
    cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click();
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > header > div.oxd-topbar-body > nav > ul > li:nth-child(1)').click();
    cy.get('div[class="oxd-select-text-input"]').click();
    cy.get('div[tabindex="0"]').click();
    cy.get('div[role="listbox"]').contains('CAN - Bereavement').click();
    cy.get('div[class="oxd-date-input-calendar"]').click();
})
})