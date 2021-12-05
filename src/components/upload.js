<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.24.min.js"></script>;
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>;
<script type="text/javascript">;

Bucket Configurations
    var bucketName = BUCKET_NAME;
    var bucketRegion = BUCKET_REGION;
var IdentityPoolId = IDENTITY_POOL_ID;

 AWS.config.update({
                region: bucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: IdentityPoolId
                })
            });

            var s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {Bucket: bucketName}
        });
</script>