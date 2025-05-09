// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "your session id here",EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VITGNvRmROZGQzQTJRejd0MWhFOEpKUzg1VWZXS25tWk5FTDladVAwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1I1ZUZ3MWVad0RHaXZDS3VvUGVoQWNpc0FKcy9PaVZzQ0ozSEd6SWZScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSXJkQlBaWGdnMk42Ly9CN0lwVzF1Q3dwQXZidGxLTEhiMmlBZDYwNEd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtbDl3Z2R2Z3ZOUGVxUkx1aXlYMElzdk1tU0doTFpUUW0xSUlHazdPQUVFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNEMit6SFFrdUNCUG1McHoxY3l4czk1SnJIRDkxMWhvTmI2MmduN2tmRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik80L1RmYTU2M1FmcXZYL3ZmTHlqMDBCanF3Z3ZZYzdRRDlZUXVqUnE4em89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9qd1hqdmlNQlRrcldoK29sdjZRWUxQUy95UFhvZEtuRFE0elhscDNtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnJpd0FHakRMTm00Qk1pN3orKzNIUlNGYjY4aWswMGlzRzNwSDVpYjMyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJzOWRlTDRsT0NxVTBqQzlrTGVVMVhtTEdkNWtjd2tzbzdTUmpYQ2RrQ01rQjZRL2p6ZkFXRW1yK0ZrVTkzQWQxU0RYSUQxaFpTOVZaQ01kKzFCbGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiIyUFdoZkYxblQ0eWMrTWRZam9EOHpxTnBMVGMyWitqeTNHTWI2OTFQYUpJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzIxNDQ5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUI3NjFGNUI3QjYxMTMwMzVENjE4OUQxN0YzMzM2RkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjgwMjM5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3MjE0NDk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QTUwNjIyMkM5OURBQTc5OEEyRjUwQTA0QzY0NzVDOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2ODAyNDAzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMbWZXd1RyMFExNjJleDdJZlA2YTF3IiwicGhvbmVJZCI6ImY1NjYwMTQ1LTc1MDctNGM4NS04YTBiLWVlZDUxOWQ2OWE5YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqeGRlTXdZWktEQU02UGtmRUNlS01vYUJuZnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1YrSC9pUGY4MTZpSEdEWkJzczl4d0J5R1owPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldNM1YyUzdMIiwibWUiOnsiaWQiOiIyMzQ5MDcyMTQ0OTQzOjgzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMeU94QThReUszNHdBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTcnJBc2NKTkR1LzRuWjhFREF4SnJVd1pzNU9uMjB4cTJUblBvd1c1azNBPSIsImFjY291bnRTaWduYXR1cmUiOiJMajhNTlQ0VGVndEY1RkRVL2NMMDlCcWJZMG84YitCZFRKRCs4cE5JMmJOR0I1Mlg5alpKVEhkZ1V2OVR6V1RLM3NiSEtKd3p6UldRV0M3N001UHpDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZFhHZHpHTXRqdmVIRUs3YmNTak9yZDU1eURKSFZGQkRsR2ZoYVMvbTBlbWIvUUVFUnp4QnhYbDMxeUsyUGd4YjFDN2E2NDlOcm5zdmY3cW1WNDJSZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDcyMTQ0OTQzOjgzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVxNndMSENUUTd2K0oyZkJBd01TYTFNR2JPVHA5dE1hdGs1ejZNRnVaTncifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY4MDIzODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWNnIn0=
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "VICTOR",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2349072144943",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
