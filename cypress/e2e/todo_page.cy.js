describe('pruebas de la pagina TODO', () => {

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  it('añadir tarea', () => {
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  })

  it('marcar tarea como completada', () => {
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  })

  it('desmarcar tarea completada', () => {
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click().click()
  })

  it('editar tarea', () => {
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-label"]').dblclick()
    cy.get('.view > .input-container > [data-testid="text-input"]').type('{selectall}').type('{del}')
    cy.get('.view > .input-container > [data-testid="text-input"]').type("ir a por cafe{enter}")
  })

  it('borrar tarea', () => {
    cy.get('[data-testid="text-input"]').type("ir a por cafe{enter}")
    cy.contains("ir a por cafe").parent().trigger('mouseover')
    cy.contains("ir a por cafe").parent().find('button.destroy').click({force: true})
  })

  it('filtrar tareas', () => {
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("ir a por cafe{enter}")
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="text-input"]').type("curso{enter}")
    cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(2) > a').click()
    cy.get('[data-testid="footer-navigation"] > :nth-child(1) > a').click()

  })

})