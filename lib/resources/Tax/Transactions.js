// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Transactions = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}',
    }),
    createReversal: stripeMethod({
        method: 'POST',
        fullPath: '/v1/tax/transactions/create_reversal',
    }),
    listLineItems: stripeMethod({
        method: 'GET',
        fullPath: '/v1/tax/transactions/{transaction}/line_items',
        methodType: 'list',
    }),
});