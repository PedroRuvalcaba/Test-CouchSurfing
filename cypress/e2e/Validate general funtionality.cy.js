describe('Validate access to website', () => {
  it('Visit the webpage', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
  })
})

describe('Validate login', () => {
  it('Validate login without credentials', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('be.visible')
  })

  //A bug is here because if the user clicks the login button without any credentials, the message that appears shows the correct username.

  it('Validate login with only the username correct', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('be.visible')
  })

  it('Validate login with a password without a minimun characters, lower case, a number and special character', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('AD')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('be.visible')
  })

  it('Validate login with a password without a lower case, a number and special character', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('ADMIN')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('be.visible')
  })

  it('Validate login with a password without a number and special character', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('Admin')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('be.visible')
  })

  it('Validate login with a password without a special character', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('Admin12')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('be.visible')
  })

  //A bug is here because the password should have a special character.

  it('Validate the login with an appropriate password and username.', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('Admin12#')
    cy.get('#loginView > button').click({force : true})
    cy.get('#loginError').should('not.be.visible')
  })
})

describe('Validate user creation', () => {
  it('Visit the webpage', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('Admin12#')
    cy.get('#loginView > button').click({force : true})
    cy.get('#newUserName').type('Username 1')
    cy.get('#tab-users > .form-group > button').click({force : true})
    cy.get('#newUserName').type('Username 2')
    cy.get('#tab-users > .form-group > button').click({force : true})
    cy.get('#newUserName').type('Username 3')
    cy.get('#tab-users > .form-group > button').click({force : true})
  })
})

describe('Validate roles creation', () => {
  it('Visit the webpage', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('Admin12#')
    cy.get('#loginView > button').click({force : true})
    cy.get('.tabs button').eq(1).click()
    cy.get('#newRoleName').type('Rol 1')
    cy.get('#tab-roles > .form-group > button').click({force : true})
    cy.get('#newRoleName').type('Rol 2')
    cy.get('#tab-roles > .form-group > button').click({force : true})
    cy.get('#newRoleName').type('Rol 3')
    cy.get('#tab-roles > .form-group > button').click({force : true})
  })
})

describe('Validate user creation, rol creation and role assignment', () => {
  it('Create user, role and assignment', () => {
    cy.visit('http://127.0.0.1:5500/Page.html')
    cy.get('#username').type('admin')
    cy.get('#password').type('Admin12#')
    cy.get('#loginView > button').click({force : true})
    cy.get('#newUserName').type('Username 1')
    cy.get('#tab-users > .form-group > button').click({force : true})
    cy.get('#newUserName').type('Username 2')
    cy.get('#tab-users > .form-group > button').click({force : true})
    cy.get('#newUserName').type('Username 3')
    cy.get('#tab-users > .form-group > button').click({force : true})
    cy.get('.tabs button').eq(1).click()
    cy.get('#newRoleName').type('Rol 1')
    cy.get('#tab-roles > .form-group > button').click({force : true})
    cy.get('#newRoleName').type('Rol 2')
    cy.get('#tab-roles > .form-group > button').click({force : true})
    cy.get('#newRoleName').type('Rol 3')
    cy.get('#tab-roles > .form-group > button').click({force : true})
    cy.get('.tabs button').eq(0).click()
    cy.get(':nth-child(6) > button').click({force : true})
    cy.get('#roleSelect').select(1)
    cy.get(':nth-child(6) > button').click({force : true})
    cy.get('#userSelect').select(1)
    cy.get(':nth-child(6) > button').click({force : true})
    cy.get('#userSelect').select(2)
    cy.get('#roleSelect').select(1)
    cy.get(':nth-child(6) > button').click({force : true})
    cy.get('#roleSelect').select(2)
    cy.get(':nth-child(6) > button').click({force : true})
  })
})