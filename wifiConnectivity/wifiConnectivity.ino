/* Usage
 * run http://192.168.4.1 on the local web browser
*/

/* INCLUDE LIBRARIES */
#include <WiFi.h>

/* GLOBALS */
/* WiFi */
const char* ssid = "MiniAvionics";
const char* wpa = "Aeiou12345?";

WiFiServer server(80);

/* SETUP */
void setup(){
  Serial.begin(115200);

  // Set up the access point
  WiFi.softAP(ssid, wpa);

  // Start the server
  server.begin();
  
  Serial.println("SoftAP started with IP: " + WiFi.softAPIP().toString());
}
w
/* LOOP */
void loop(){
  // Check if a client has connected
  WiFiClient client = server.available();
  if (client) {
    Serial.println("New client connected");

    // Read the request
    String request = client.readStringUntil('\r');
    Serial.println("Request: " + request);

    // Send a response to the client
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println("");
    client.println("<h1>Hello from ESP32!</h1>");
    client.stop();
    Serial.println("Client disconnected");
  }
}
