describe('Testing Linked in', () => {
    it ('Login Linked in',()=> {
        cy.visit ('https://www.linkedin.com/');
        cy.get ('input[id="session_key"]').type('evitailma.e@gmail.com');
        cy.get ('input[id="session_password"]').type('');
        cy.get ('button[type="submit"]').click();
    })
})