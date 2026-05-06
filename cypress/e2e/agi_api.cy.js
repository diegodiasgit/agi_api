/// <reference types="cypress" />

  describe('Breeds', () => {

    context('GET - /breeds/list/all', () => {

      it('Deve validar status [200]', () => {
        cy.request({
          method: 'GET',
          url: 'https://dog.ceo/api/breeds/list/all',

          failOnStatusCode: false

        }).then(response => {

          cy.log(`Status: ${response.status}`)        
          cy.log(`Message: ${JSON.stringify(response.body.message)}`)

          expect(response.status).to.eql(200)

          const data = response.body.message
          expect(data).to.be.an('object')
          expect(data).to.have.property('african')
          expect(data.african).to.include('wild')
        })
      })

      it('Deve validar status [404] - URL invalido', () => {
        cy.request({
          method: 'GET',
          url: 'https://dog.ceo/api/breeds/list/allteste',

          failOnStatusCode: false

        }).then(response => {
          
          cy.log(`Status: ${response.status}`)
          cy.log(`Message: ${JSON.stringify(response.body.message)}`)

          expect(response.status).to.eql(404)
          expect(response.body.message).contain('No route found for "GET')
        })
      })
    })

    context('GET - /breed/{breed}/images', () => {

      it('Deve validar status [200]', () => {
        cy.request({
          method: 'GET',
          url: 'https://dog.ceo/api/breed/akita/images',

          failOnStatusCode: false

        }).then(response => {

          cy.log(`Status: ${response.status}`)        
          cy.log(`Message: ${JSON.stringify(response.body.message)}`)

          expect(response.status).to.eql(200)
        })
      })

      it('Deve validar status [404] - Registro não encontrado', () => {
        cy.request({
          method: 'GET',
          url: 'https://dog.ceo/api/breed/teste/images',

          failOnStatusCode: false

        }).then(response => {

          cy.log(`Status: ${response.status}`)        
          cy.log(`Message: ${JSON.stringify(response.body.message)}`)

          expect(response.status).to.eql(404)
          expect(response.body.message).contain('Breed not found (main breed does not exist)')
        })
      })
    })

    context('GET - /breeds/image/random', () => {

      it('Deve validar status [200]', () => {
        cy.request({
          method: 'GET',
          url: 'https://dog.ceo/api/breeds/image/random',

          failOnStatusCode: false

        }).then(response => {

          cy.log(`Status: ${response.status}`)        
          cy.log(`Message: ${JSON.stringify(response.body.message)}`)

          expect(response.status).to.eql(200)
        })
      })
    })
  })
  