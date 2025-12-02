require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGMtgltj*oMqYAQAAIcHAAAKAAAAY3JlZHMuanNvbpVVXZOiOBT9L3nVGkFR0KquWvADUWxFBJGteYgQIPIVkyDqlP99Crt7eh52Z3t5Cknq3HPvOffmByhKzNAS3cDoByAUXyBHzZLfCAIjoFVRhChogxByCEZgqZr7fKW+5qmURfeiUkwhKLJ6WNx7XrA+8*6Mk04mH*JcfQGPNiDVMcPBHwD5QuZXUc5JkBzNC94YWxrHr8FCyrbxWXm9lopTTBGFJE5fwKNBhJjiIp6SBOWIwmyJbhuI6dfos6lZW2MNt4jILxtPXS+jnSsixQqWh1KPNKnTLYvbUAj0+Gv0a9snzBN6CxpPqnBpOrMCXZO77o*93qTVtWamC*31iWTO4Y0+w3GBQiNEBcf89uW6G3PEZt280jJYQyzS7lnjctpHR0enzgTfpQk62qna2RdfrHtLO6YhXMuu5uxOzjzuGHOVrKyjubvuyzwRrMV60DrPevpU*Z34hn54Jf0*dXcmImdkMGGdQVUsAts98nV4NFRPMaqNci6DuyqX4T5LhPpr9HtnsfaWRuBXXHNRTimrHR0Pz2x3He4ze2hZtm+dBGE7Xn3Sh7yif2Ipz*fDobVKzNpV95tBishRtxJuM3aOIm06MY3eJRnY8460qe7n2jnAW6bGh3152+erKJ+19kJ3rKBOvfKsq+uJB2yeTtbLM6MU3YwQjMRHG1AUY8Yp5Lgsmr2h0AYwvNgooIg*qwukznCb5HdH2B4FLapNIYSuEZBbJIhcLBQj3RGeC3Cln5QX0AaElgFiDIVzzHhJbyvEGIwRA6O*v7dBga78TbcmWk9sgwhTxp2iIlkJww9RPw5hEJRVwe1bEYybBaJgJHxuI85xEbOmjFUBaZDgCxonkDMwimDG0K8EEUUhGHFaoV9NOy7Dpu773mY+33s+aIP8qQcOwQgMJVmW+t2+JCijrvIX+1Y3qJCQbwXioA0K2FwGBc4RS2CBCYUhQgSCNsieAF1RGvSl*qAniVJXEBuQ5uDxi3sTKkQc4oyBERgbNMsG5XS6koMqSHVdNWJ1HKvgM9cPz7yJojnBZVpaQi4u0gtxA*E1PqwdxbdPTtUXOjzdoZZa9VLfFl7+AQSMAMECTifdhX+cZZHeG*iU6M6tOHT0TRcd6vu6xiftwk3ub1WNpdtidpwnp5ZpKvO7vKMe1FsivZ9TB8fBrjPO8DoQVfWliRaiCw7Q78GEW*9suSpaGeWJOcl1LwiDzUTzGPRTMw9DKe4QV1jS63VvyypVVp3uhU9Mjc+9y24YLGfI8cKpiiPi1mwTeFg*+*jdzc9uyt6nGH4arVGx+Y0weg6Fd7n+S9U33o33hEf7N4j3KfMvnapZ7ty8LqevC2775sD1XncHfZJtdKcUzSrcyP60d4lN3tcdDh6P721AMsijkubNI5AfG9PQsmqcbBRR+YdIY80wNCseN1lnkHH1szt2jRM5zAkYifJAGvSFvqy83drQkswhS5pJtR36vWFj9ZtKiM0h*2g2oDafdhyDx09QSwECFAMUAAAICABjLYJbY*6DKmAEAACHBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACIBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '94773824266',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'sovinduaovindu-ship-it',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
