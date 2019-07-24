/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// SSL sertificates must be in www/certificates folder, see https://www.npmjs.com/package/cordova-plugin-advanced-http docs

// Set your SSL secured host here 
var YOUR_SSL_SECURED_HOST = ''

var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    // enable SSL pinning
    var parentElement = document.getElementById('deviceready');
    var receivedElement = parentElement.querySelector('.received');

    setTimeout(function () {
      cordova.plugin.http.setServerTrustMode('pinned', function () {
        console.log('success!');
        receivedElement.innerHTML = 'Trusted mode';

        setTimeout(function () {
          const options = {
            method: 'get',
          };
          cordova.plugin.http.sendRequest(YOUR_SSL_SECURED_HOST, options, function (response) {
            // prints 200
            console.log(response.status);
            receivedElement.innerHTML = 'SSL pinned! ' + response.status;
          }, function (response) {
            // prints 403
            console.log(response.status);
            receivedElement.innerHTML = response.status + ', ' + response.error;
            // prints Permission denied
            console.log(response.error);
          });
        }, 2000);
      }, function () {
        console.log('error :(');
        receivedElement.innerHTML = 'error :(';
      });
    }, 2000);
  },
};

app.initialize();