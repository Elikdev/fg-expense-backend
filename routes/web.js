var express = require('express');
var router = express.Router();
//require all web controllers
var projectsController = require('../controllers/web/projectsController');
var paymentReportController = require('../controllers/web/paymentReportController');
var referenceController = require('../controllers/web/referenceController');
var mdaController = require('../controllers/web/mdaController');
var companyController = require('../controllers/web/companyController');
var expenseController = require('../controllers/web/expenseController');
var budgetController = require('../controllers/web/budgetController');
var sectorController = require('../controllers/web/sectorController');

//demo data
var userController = require('../controllers/userController');

// demo route
router.post('/users', userController.newUser);
module.exports = router;

/**
 * add routes for projects controller directly under here
 */

/**
 * add routes for expenseController directly under here
 */

/**
 * add routes for payementReportController directly under here
 */

/**
 * add routes for sectorController directly under here
 */

/**
 * add routes for companyController directly under here
 */

/**
 * add routes for referenceController directly under here
 */

/**
 * add routes for mdaController directly under here
 */

/**
 * add routes for budgetController directly under here
 */
