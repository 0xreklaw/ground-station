/* INCLUDE LIBRARIES */
#include <WiFi.h>
/* GLOBALS */
/* WiFi */
const char* ssid = "OLIN-DEVICES";
const char* wpa = "Engineering4Every1!";
IPAddress ip(192, 168, 0, 100);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);
/* SETUP */
void setup(){
  Serial.begin(115200);
  Serial.println();
  connectWiFi();
}
/* LOOP */
void loop(){}
/* METHODS */
void connectWiFi(){
  /* Simplified Explanation:
     STA mode connects to something (router etc),
     AP mode lets things connect to it */
  WiFi.enableSTA(true);
  /* set your devices ip information */
  WiFi.config(ip, gateway, subnet);
  /* start the connection */
  WiFi.begin(ssid, wpa);
  Serial.print("Connecting to WiFi.");
  /* Wait for the connection to be finalized */
  while((!(WiFi.status() == WL_CONNECTED))) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.println("Successfully connected to WiFi!");
}
