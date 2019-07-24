# cordova-ssl-pinning-sample-app
Use SSL pinning in Cordova / Phonegap applications with cordova-plugin-advanced-http plugin

# 1 step
Get your SSL sertificate from your web server (create free SSL certificate on https://letsencrypt.org/)

# 2 step 
Convert certificate from .cer to .pem then .der format. Attention (!) rename certificate ext. from .der to .cer ext.

# 3 step 
Include converted .cer certificate into www/certificates folder. See docs https://www.npmjs.com/package/cordova-plugin-advanced-http. 
Now, you have 2 similar certificates at web server and your client mobile app.

# 4 step 
Set your SSL secured host into const. app (see index.js file)

# 5 step
Build and run app.