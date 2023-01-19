describe('spec.cy.js', () => {
    it('should work', () => {
        cy.visit('/')
    
        cy.get('a').should('contain', 'Learn React')
    })
})