/// <reference types="cypress" />
// PAGES IMPORTS
import {loginPage} from '../../pages/login/LoginPage'
import {cartPage} from '../../pages/cart/CartPage'

// DATA IMPORTS
import {loginPageData} from '../../fixtures/login/LoginPageData'
import {cartPageData} from '../../fixtures/cart/CartPageData'

describe('Cart Test Cases', () => {

    beforeEach(() => {
        cy.visit('/')
        loginPage.login(Cypress.env('standardUsername'), Cypress.env('password'));
        cartPage.verifyAppLogo();
    });

    it('CP-CART-001 – Agregar un producto al carrito', () => {
        cartPage.addProductToCart(cartPageData.productNames.sauceLabsFleeceJacketProductName);
        cartPage.verifyRemoveButton(cartPageData.productNames.sauceLabsFleeceJacketProductName);
        cartPage.verifyCartBadge(cartPageData.cartQuantities.oneProductInCart);
        cartPage.clickCartIcon();
        cy.returnData().then(($obj) => {
            cartPage.verifyProductData(
                [
                    cartPageData.cartQuantities.oneProductInCart,
                    $obj.addedProductName,
                    $obj.addedProductPrice,
                    $obj.addedProductDescription
                ]
            );
        });
    });

    it('CP-CART-002 – Agregar múltiples productos', () => {
        cartPage.addProductToCart(
            cartPageData.productNames.sauceLabsFleeceJacketProductName,
            1
        );
        cartPage.verifyRemoveButton(cartPageData.productNames.sauceLabsFleeceJacketProductName);
        cartPage.verifyCartBadge(cartPageData.cartQuantities.oneProductInCart);
        cartPage.addProductToCart(
            cartPageData.productNames.sauceLabsBoltTShirtProductName,
            2
        );
        cartPage.verifyRemoveButton(cartPageData.productNames.sauceLabsBoltTShirtProductName);
        cartPage.verifyCartBadge(cartPageData.cartQuantities.twoProductsInCart);
        cartPage.addProductToCart(
            cartPageData.productNames.sauceLabsBikeLightProductName,
            3
        );
        cartPage.verifyRemoveButton(cartPageData.productNames.sauceLabsBikeLightProductName);
        cartPage.verifyCartBadge(cartPageData.cartQuantities.threeProductsInCart);
        cartPage.clickCartIcon();
        cy.returnData().then(($obj) => {
            cartPage.verifyProductData(
                [
                    cartPageData.cartQuantities.oneProductInCart,
                    $obj.addedProductName1,
                    $obj.addedProductPrice1,
                    $obj.addedProductDescription1
                ],
                [
                    cartPageData.cartQuantities.oneProductInCart,
                    $obj.addedProductName2,
                    $obj.addedProductPrice2,
                    $obj.addedProductDescription2
                ],
                [
                    cartPageData.cartQuantities.oneProductInCart,
                    $obj.addedProductName3,
                    $obj.addedProductPrice3,
                    $obj.addedProductDescription3
                ]
            );
        });
    });
    
    it('CP-CART-003 – Remover producto desde el listado de productos', () => {
        cartPage.addProductToCart(cartPageData.productNames.sauceLabsFleeceJacketProductName);
        cartPage.verifyRemoveButton(cartPageData.productNames.sauceLabsFleeceJacketProductName);
        cartPage.verifyCartBadge(cartPageData.cartQuantities.oneProductInCart);
        cartPage.clickCartIcon();
        cy.returnData().then(($obj) => {
            cartPage.verifyProductData(
                [
                    cartPageData.cartQuantities.oneProductInCart,
                    $obj.addedProductName,
                    $obj.addedProductPrice,
                    $obj.addedProductDescription
                ]
            );
        });
        cartPage.clickOnContinueShoppingButton();
        cartPage.removeProductFromListingPage(cartPageData.productNames.sauceLabsFleeceJacketProductName);
        cartPage.verifyCartWithoutBadge();
        cartPage.clickCartIcon();
        cy.returnData().then(($obj) => {
            cartPage.verifyProductsNotInCart(
                [
                    cartPageData.cartQuantities.oneProductInCart,
                    $obj.addedProductName,
                    $obj.addedProductPrice,
                    $obj.addedProductDescription
                ]
            );
        });
    });

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot()
        }
        cy.writeFile('cypress/fixtures/runData/runData.json', {})
    });

})


