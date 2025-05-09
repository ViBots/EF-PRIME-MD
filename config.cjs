// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "your session id here",EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lGNU83cU5pSFhucGFuWHdPVDVQTTRxVFdvV1pOT2RERWZnKzErcjEyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWx2WDdNZ3NtSy8xSHRiMmdpTGQ0UHpmV3kzaWJtell3Zm1nci9Gd2QxWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSnM5a3FhaWFQa3VQUXBUOC9hYVYwenV5akw3Si9zM3Z4eDV3QzNqZ0UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQRnZ6c2pXbTcrV2VWc2VzNXNsSzhpcGQwTUlxbUNwZjVISVpqSVlBRFRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGa0FVTDNNUWhkb2hWUnZkNHd6cFZSazhtV1RMVTF2VmJVOXhReTB3RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxiTVB1bVcxOUp3aVoreThYUEk3NUZidEo0MEdLU3MzOTJUR1B5RXZUMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NYbVpndDgxN1JHL0MrTDVNZEdZWGZLTzc4UDVEejQwTndvSitkeHFsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTlicVBQaGZsRitrWURzbHoraU9Kays4Ly9OYW9YTVQ4VGdxNDVHam5qaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZERmFYZVlURTZiZS93YlpwOTNYYldUNXQvRjBORW5aOWFabEgxZDFSalBZaTBBbVNpZG9OWUlYSS9YNzhrRlVaS2F3WEhJNzREQlRkekJDZjZ4bWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiIxN2dEMzBabXhSc0t1dnh6aTN3QXdLMDBFVVZFczdFbkZuSVQxbWFVSEt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNzIxNDQ5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjQ5Q0VGQzVGNUIwQTg0QzM4N0EzOUZDMjhBNEIyMkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0Njc4MjY3M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3MjE0NDk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCQ0NBN0EyMzg2M0Q0MzBGRDJDRDkwOUQ0ODQ2MkQ4RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2NzgyNjgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwLU52Y1g1dVEyS2x5RXctTG9uQjRRIiwicGhvbmVJZCI6IjI0MmNmZTM1LWU3NjctNGJhNy1iM2YwLWM3ODZiZWI4Mjc2NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqVlFycXp2dDg3QXBRaFI5VjJRZ21FdnErYVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVncybUZqZE5HNmRKMlJxTngwSGdRNmU0SDVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFXODVTTVFXIiwibWUiOnsiaWQiOiIyMzQ5MDcyMTQ0OTQzOjc5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlb/wnZWz8J2VsCAg8J2VrzPiiJrwnZW08J2VtyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGlPeEE4UXdKUDN3QVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3JyQXNjSk5EdS80blo4RURBeEpyVXdaczVPbjIweHEyVG5Qb3dXNWszQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUURhRXNFRC9rV1oyay9SdTdGY1daWk13eTAybk9PT0ZwM0RJeVVuTkNBdjNYMCs1TTc1N09oK20vNVBoNU1QaXA2WjcrcGwzdTh0SUZKYlcyR3FuQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBWL0NFWWtPMFVvMVdjdVdNaDlzSTI0Nk1rSUY4d3IzNVpFMGZxZ2x6YXNTNWNFZkRWNFhRWXovWVluTkF4VEhNSFhidVVYSDZwMnNvbURsaHNkMGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3MjE0NDk0Mzo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVcTZ3TEhDVFE3ditKMmZCQXdNU2ExTUdiT1RwOXRNYXRrNXo2TUZ1Wk53In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2NzgyNjY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1jWCJ9
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
  OWNER_NAME: process.env.OWNER_NAME || "Frank kaumba",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "265993702468",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
