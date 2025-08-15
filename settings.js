require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACSJD1uxj3UoswQAAIsIAAAKAAAAY3JlZHMuanNvbq1U25KiSBD9l3rVGEFuasREDAjaCGorXlo39qGEAotLgVUFghP++wZ298zszu5sb8TyVNQl85zMc*IrIDlmyEENGH0FBcUV5Khd8qZAYASMMgwRBV0QQA7BCPTnh8l6JopkN8V4FqDqmk+hHbn6Nsm2ht*zX*i5t9gfIbl+BvcuKMpTiv1fBHyJ4u00SEW4iWd8j*l+58xlNZfIQn26zW8zqyZwIdxW5nn+GdzbiBBTTCKrOKMMUZg6qHmGmH4M*mAM901TlGV0obmz6kTUEyVlta2JJOfG3hbitBbVSkyy5GPwL5V*MK6eGdqpV1860ersege9CuMenAwE0e*g7Hj2ndTaCq*wGY4ICuwAEY558+G626a4qutxsjvg6onMSp+vtXgxMR0rP1yWJx4RZ9opXN*fyh8DnlxW2i0YLjdXeJyKBTEN82Zd4GY5t8uzvjo5Qv8s2yQw*gz8mb5rJfkvdZ9PN4eDXPUk1avSThiHl9XwlPBBEvYObFwf5*XiNtG5u5joH4NvqfY+HJNFpd122yxbXi5HKUnzEm+G52y4JwPmDzqB63sT+Tt8yEv6K5SVZulabjGRmuxA8MLtLHep7VdL*5DWAfGxMQ15Bq0tYlMTwqnZUaImn9pVGK1Zss3cAqthtZnMndxJEJvdbj0DR58fjBLU2AEYifcuoCjCjFPIcU7aPUXqAhhUHvIp4o*qgkzBTUIMNqSn*aDZNU1H3+eL3kvt6BotSU0sf2qRcAjV*DPogoLmPmIMBU+Y8Zw2c8QYjBADo98ejWo5U5TlHM1w0LpYkbWhrMoDVZW+sE*XM+QMFsUngjjogpDm2RyBEacl6oLHA0EbmkLf0oamNTAEyRAl0zLN4VBUDUEWpUnLMHtNusEZYhxmBRiJmqL0NU2TtXv3*8GhyYowkSR9PNaHsikJA9WwTN2yxtpgbCn6v+P4vQsIqvmrjNviS2IXhJgyviVlkeYweNf4+yH0*bwk3GuIP24XiILRD9uIc0wi1jIrCaT+GVdo3PIAoxCmDH3rN6IoeOfyNsPGedDKUPSmL4dnzQUt9jbQT7UZ9X+uDoHtZcAITtPcT0AXpI938kASBWmoimq*L4qj*pd2+*4NcBs*QBzilIERGM+RGTNhYjnapuevplPdjvRxpIPvBN998yrMpS7teT3dNeeSXOZusX6KrcRwmv0t6qvzSklV+1IXN7ZLH8L8axAwAnTHVgvoUjEKbnuDs*QFXU9edCvc8Ggq*WMvJq5yWXMzqayXc3xB*R4s6tNsHwzx4DRf3hTtLBxraXWdJNrKqeJTOTBbk3VBgCrsox+TDUmyc5C5D6st1*svjWZk9lJ0D5PYpbIXGtt56pLtyisixYtqdS25s9RMs8nauE5uAWHCdUFXspdYHRjFyrPqxMd9fH119GOipG+THL+ZDT9+Q4weg*GtR**WylfcreCEe*eHEG+T9h+mlbGJFiL116mfnwo1HqvbtVzPdI+lTF6Usds5Iuww6GuTIwT3VvlFCnmY06yVTXaCoAtoXrbytUmY*yLTWBdsY*XKOoWM698t8XcuU15vPdO8eILs3Crckc9PcqvvRi8Kj0P+7jCgt58dHMD9D1BLAQIUAxQAAAgIACSJD1uxj3UoswQAAIsIAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAANsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254794648663',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'jethro-tech-ctrl',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  no
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
