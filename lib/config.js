/**
 * Create and export configuration variables
 */

 // Container for all the enviroments
 var enviroments = {};


 // Staging (default) enviroment
 enviroments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging',
  'hashingSecret': 'thisIsASecret'
 };

 // Production enviroment
 enviroments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production',
  'hashingSecret': 'thisIsASecret'
 }


 // Determine which enviroment was passed as a command-line argument
 var currentEnviroment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

 // Check that the current enviroment is one of the enviroments above, it not, default to staging
 var enviromentExport = typeof(enviroments[currentEnviroment]) == 'object' ? enviroments[currentEnviroment] : enviroments.staging;

 // Export the module
 module.exports = enviromentExport;
