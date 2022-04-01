const { getErpConfig } = require('b2b-aws-configs');

const getErpConfiguration = async () => {
  const awsConfig = { region: process.env.AWS_REGION };
  const configTable = `${process.env.ENVIRONMENT.toLowerCase()}Configs`;
  const { configuration, secret } = await getErpConfig(configTable, process.env.AWS_LAMBDA_FUNCTION_NAME, awsConfig);

  return {
    authenticationType: configuration.Item.config.authenticationType,
    endpointUrl: configuration.Item.config.URL_SAP,
    username: secret.User,
    password: secret.Password,
  };

};

module.exports = getErpConfiguration;