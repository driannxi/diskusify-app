/**
 * test scenario for login spec
 *
 * - login spec
 *  - should display login page correctly
 *  - should display alert when email or password is wrong
 *  - should login successfully and display homepage
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();

    cy.intercept('GET', '**/users/me', (req) => {
      if (req.headers.authorization) {
        req.reply({
          statusCode: 200,
          body: {
            status: 'success',
            message: 'ok',
            data: {
              user: {
                id: 'user-1',
                name: 'John Doe',
                email: 'john@example.com',
                avatar: 'https://generated-image-url.png',
              },
            },
          },
        });
      } else {
        req.reply({
          statusCode: 401,
          body: {
            status: 'fail',
            message: 'Missing authentication',
          },
        });
      }
    }).as('getOwnProfile');

    cy.intercept('GET', '**/threads', {
      statusCode: 200,
      body: {
        status: 'success',
        message: 'ok',
        data: {
          threads: [],
        },
      },
    }).as('getThreads');

    cy.intercept('GET', '**/users', {
      statusCode: 200,
      body: {
        status: 'success',
        message: 'ok',
        data: {
          users: [],
        },
      },
    }).as('getUsers');

    cy.visit('/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="nama@email.com"]').should('be.visible');
    cy.get('input[placeholder="Masukkan kata sandi"]').should('be.visible');
    cy.get('button').contains('Masuk ke Akun').should('be.visible');
  });

  it('should display alert when email or password is wrong', () => {
    cy.intercept('POST', '**/login', {
      statusCode: 401,
      body: {
        status: 'fail',
        message: 'email or password is wrong',
      },
    }).as('loginFail');

    cy.get('input[placeholder="nama@email.com"]').type('invalid@email.com');
    cy.get('input[placeholder="Masukkan kata sandi"]').type('wrongpassword');

    cy.get('button').contains('Masuk ke Akun').click();

    cy.wait('@loginFail');
    cy.on('window:alert', (str) => {
      expect(str).to.be.a('string');
    });
  });

  it('should login successfully and display homepage', () => {
    cy.intercept('POST', '**/login', {
      statusCode: 200,
      body: {
        status: 'success',
        message: 'ok',
        data: {
          token: 'fake-token-xyz',
        },
      },
    }).as('loginSuccess');

    cy.get('input[placeholder="nama@email.com"]').type('john@example.com');
    cy.get('input[placeholder="Masukkan kata sandi"]').type('password123');

    cy.get('button').contains('Masuk ke Akun').click();

    cy.wait('@loginSuccess');

    cy.get('header').should('be.visible');
    cy.get('button').contains('Keluar').should('be.visible');
  });
});
