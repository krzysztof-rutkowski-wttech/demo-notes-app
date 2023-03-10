const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51MWMliEEfT69n8yFVwCSLPvWO22shBXIquTOKWuMkIP69twK37xBL8A8PToFmGBDTOTtp2duJrgqMxL4Fyz9sev900at61mkwL",
  SENTRY_DSN: "https://afa593d80cd84f5385e9cb4652b062aa@o4504610470166528.ingest.sentry.io/4504610472787968",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
