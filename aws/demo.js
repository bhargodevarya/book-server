const PLAT = require('aws-sdk')

PLAT.config.update({region: 'us-east-1'})

const s3 = new PLAT.S3({apiVersion: '2006-03-01'})

const bucketName = process.env.PHOTO_APP_BUCKET_NAME

s3.listObjects({Bucket: bucketName}, (err, data) => {
    if(err) {
        console.error(err)
    } else  {
        data.Contents.forEach(cont => console.log('https://'.concat(data.Name).concat('.s3.amazonaws.com/').concat(cont.Key)))
    }
})
