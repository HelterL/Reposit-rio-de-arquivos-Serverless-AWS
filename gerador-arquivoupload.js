#!/usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');
const AWS = require("aws-sdk");

const awsAccessKeyId = AWS.config.credentials.accessKeyId;
const awsSecretAccessKey = AWS.config.credentials.secretAccessKey;
const bucketName = 'Nome do seu bucket';

const msPerDay = 744 * 60 * 60 * 1000;
const expiration = new Date(Date.now() + msPerDay).toISOString();
const bucketUrl = `https://${bucketName}.s3.amazonaws.com`;

const policy = {
  expiration,
  conditions: [
    ['starts-with', '$key', 'Artigos/'],
    { bucket: bucketName },
    { acl: 'public-read' },
    ['starts-with', '$Content-Type', 'Artigos/pdf'],
    { success_action_status: '201' },
  ],
};

const policyB64 = Buffer.from(JSON.stringify(policy), 'utf-8').toString('base64');

const hmac = crypto.createHmac('sha1', awsSecretAccessKey);
hmac.update(new Buffer.from(policyB64, 'utf-8'));

const signature = hmac.digest('base64');

fs.readFile('front-end/profile.template.html', 'utf8', (err, input) => {
  if (err) {
    console.log(err);
  }

  const data = input
    .replace(/%BUCKET_URL%/g, bucketUrl)
    .replace(/%AWS_ACCESS_KEY%/g, awsAccessKeyId)
    .replace(/%POLICY_BASE64%/g, policyB64)
    .replace(/%SIGNATURE%/g, signature);

  fs.writeFile('front-end/profile.html', data, 'utf8', (e) => {
    if (e) {
      console.log(e);
    }
  });
});
