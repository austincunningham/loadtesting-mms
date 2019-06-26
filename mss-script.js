/** 
 * Log onto the terminal for the DB pod
 * open postgres 'psql'
 * connect to db '/connect mobile-security-service'
 * Add the record
 * INSERT INTO app(id, app_id, app_name, deleted_at) VALUES ('a2895cc1-28d7-4283-932d-8bcab9e1b566', 'appid.example.com', 'Foobar', NULL);
 * 
*/


export let options = { maxRedirects: 4, iterations: "5000" };


import http from "k6/http";
export default function() {
  

    var address="https://address-goes-here"
    var payload='{\n\t"deviceId": "a2895cc1-28d7-4283-932d-8bcab9e1b566",\n\t"deviceVersion": "3.6",\n\t"version": "12",\n\t"deviceType": "Android",\n\t"appId": "appid.example.com"\n}'
    var params= { 
      headers: {
        "Content-Type": "application/json"
      }
    }
  
  http.post(address,payload, params)

}
