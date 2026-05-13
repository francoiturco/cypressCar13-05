class CartPage {

    elements = {
        appLogo: () => cy.get('.app_logo'),
        swagLabsText: 'Swag Labs',
        productName: '[data-test="inventory-item-name"]',
        productParent: '[data-test="inventory-item-description"]',
        addToCartButtonLabel: 'Add to cart',
        removeFromCartButtonLabel: 'Remove',
        removeButton: () => cy.get('[data-test="remove-sauce-labs-fleece-jacket"]'),
        shoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
        cartIcon: () => cy.get('.shopping_cart_link'),
        productDescription: '[class="inventory_item_desc"]',
        productPrice: '[class="inventory_item_price"]',
        inventoryItemNameString: '.inventory_item_name ',
        cartItemByProductName: (productName) => cy.contains('.cart_item', productName),
        cartTitle: () => cy.get('.title'),
        yourCartText: 'Your Cart',
        cartQuantity: () => cy.get('.cart_quantity'),
        inventoryItemName: () => cy.get('.inventory_item_name'),
        cartItemPrice: () => cy.get('.inventory_item_price'),
        cartItemDescription: () => cy.get('.inventory_item_desc'),
        continueShoppingButton: () => cy.get('#continue-shopping'),
    }

    verifyAppLogo () {
        this.elements.appLogo().should('be.visible').and('have.text', this.elements.swagLabsText)
    }

    addProductToCart (productName, index = "") {
        cy.contains(this.elements.productName, productName).parents(this.elements.productParent).find('button').should('be.visible').and('contain.text', this.elements.addToCartButtonLabel).click()

        cy.contains(this.elements.inventoryItemNameString, productName).closest('.inventory_item_description').find('.inventory_item_name ').then(($text) => {
            cy.saveText($text.text(), `addedProductName${index}`)
        })

        cy.contains(this.elements.inventoryItemNameString, productName).closest('.inventory_item_description').find('.inventory_item_desc').then(($text) => {
            cy.saveText($text.text(), `addedProductDescription${index}`)
        })

        cy.contains(this.elements.inventoryItemNameString, productName).closest('.inventory_item_description').find('.inventory_item_price').then(($text) => {
            cy.saveText($text.text(), `addedProductPrice${index}`)
        })
    }

    verifyRemoveButton (productName) {
        cy.contains(this.elements.productName, productName).parents(this.elements.productParent).find('button').should('contain.text', this.elements.removeFromCartButtonLabel).and('be.visible')
    }

    verifyCartBadge (quantity) {
        this.elements.shoppingCartBadge().should('be.visible').and('contain.text', quantity)
    }

    clickCartIcon () {
        this.elements.cartIcon().should('be.visible').click()
        this.elements.cartTitle().should('be.visible').and('have.text', this.elements.yourCartText)
    }

    verifyProductData (...products) {

        products.forEach((product) => {

            const [
                productQuantity,
                productName,
                productPrice,
                productDescription
            ] = product

            this.elements.cartItemByProductName(productName).should('be.visible').within(() => {

                this.elements.cartQuantity().should('have.text', productQuantity)
                this.elements.inventoryItemName().should('have.text', productName)
                this.elements.cartItemPrice().should('have.text', productPrice)
                this.elements.cartItemDescription().should('have.text', productDescription)
            })
        })
    }

    clickOnContinueShoppingButton () {
        this.elements.continueShoppingButton().should('be.visible').click()
        this.verifyAppLogo(this.elements.swagLabsText)
    }

    removeProductFromListingPage (productName) {
        cy.contains(this.elements.productName, productName).parents(this.elements.productParent).find('button').should('be.visible').and('contain.text', this.elements.removeFromCartButtonLabel).click()
    }

    verifyCartWithoutBadge () {
        this.elements.cartIcon().should('be.visible').and('have.text', '')
    }

    verifyProductsNotInCart (...products) {

        products.forEach((product) => {

            const [
                productQuantity,
                productName,
                productPrice,
                productDescription
            ] = product

            this.elements.cartItemByProductName(productName).should('not.exist')
        })
    }

}

export const cartPage = new CartPage()