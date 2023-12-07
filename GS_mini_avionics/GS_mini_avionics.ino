/* Usage
 * run http://192.168.4.1 on the local web browser
*/

/* INCLUDE LIBRARIES */
#include <WiFi.h>
#include "SPIFFS.h"

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

/* LOOP */
void loop(){
  // Check if a client has connected
  WiFiClient client = server.available();
  if (client) {
    Serial.println("New client connected");

    // Open the file for reading
    File file = SPIFFS.open("/4_21_2082_refactored.txt", "r");

    if (file) {
      //Read and print the content of the file
      while (file.available()) {
        Serial.write(file.read());
      }

      file.close();
    } 

    else {
      Serial.println("Failed to open file");
    }
    
    client.stop();
    Serial.println("Client disconnected");
  }
}