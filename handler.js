const AWS = require("aws-sdk");
const cloudfront = new AWS.CloudFront();

module.exports.invalidateCache = async (event, context) => {
  const params = {
    DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID || "E21ZVQWBQYPKC6",
    InvalidationBatch: {
      CallerReference: `${Date.now()}`,
      Paths: {
        Quantity: 1,
        Items: ["/*"],
      },
    },
  };

  try {
    const data = await cloudfront.createInvalidation(params).promise();
    console.log("Invalidation created successfully:", data);
  } catch (error) {
    console.error("Error creating invalidation:", error);
  }
};
