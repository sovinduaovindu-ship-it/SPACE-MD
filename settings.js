require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPyJeFsGKyMYYQQAAIgHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFmOYmCBEdsYgogo0oojQb+1BCCQgWdFWBlwn*fQN7enoedmd766lucfJknpP5HeC6oMhFV6B*Bw0pOshQv2XXBgEdjNvDAREwAClkEOiAn3EKWyt4j*zttMxVoeyebtLbZkZoN7k+7WJZiRsIo5GYPYP7ADTtviqS3wBaNVyay2J6HLr2JEoyTNaOZ+3FJkJLvpQjrlMn4mvMtaL1DO49IixIgTOrydEJEVi56OrDgnyN*mjSbCfOVBiu1udLvTHyJl3v5Oq6qNE8CSMx0g6tXI8lZI++Rp8NR1y4P80o2i+3Kzpu86PsKm8CPjOt3S1FxTID6RIE89vonT4tMozSeYowK9j1y3U*W7H78srtcXGrbipbpS*GyHK6mRk87aHhXqIoPajRjS+x8TXiju1t21ThQ5Uo9sGvcwFyl6VSjTDHb8zdnlH*dlFDs6zmvxL3yYdXyv9T97fxauErrIbaHpuiKq5Yqy0T8UKTC7dsZ82qcQRmJ+nEtr5G31XntinuLawQY*jaEtgetqb3tJvG62RskWtkyNFpuvSzTfJJH7KW*I7lMUfUOdktDXbrXGhZ1aW+tDY6Z0czb+rnRzL3jzX11qa2a3LcrVbh8ZAImXfs+MV5dMqmfhTkp2nuqf6sQ8nr6QqN1fMjoxJd5ynQhfsAEJQVlBHIiho*7hR+AGDaBSghiD3KC9zMmvjGy7WV18uLZu6dZhf75qmI40xDw6mjcsEGTlx10cjPYAAaUieIUpTaBWU1ub4gSmGGKND**GsAMLqwd+H6cJIwAIeCUBbitqlqmH6o+vEIk6RuMQuuODH7DSJA5z+vEWMFzmhfxxZDkuRFh8wcMgr0A6wo+pkhIigFOiMt+tm1Zp32hVfdV+9FtXwwAKeHIEUKdKDJqioPxaHMj3RR+oN+O*eosGm+YcTAAGDYfwa4OCGaQ1w0BKYINRAMQPUAEAVZGcpDRZIFWeSFHqR*uP*k3odKEYNFRYEOzPm+qpTastzWKWk5mxlWZpiZAT5z*TDNuyjjMOmsesWfBKfsmm0ieNnrMhzFwTFsh*wTKzeIM1qpjAP++R9AgA6SRr25MVfvGDfXcKqdTbsyPcI8V02eRu52XOShMOfS0kcibtJOW2*rHb62Dq8YysWXqqPga7MCyaaT5ktcRrzsjc*PfbQUdUWCfg3WOjuRk87hhrnIzhyJD4c0cYWya11ZDi9bLjBbeqgsOjHXvD9kdWLdIk5W60TCbGHbC1mqpMg+HkQjJmukeXuTTox3Oz*aqfoxxoqH0XoV++OhQI+p8EOu*1L1nXfvPf4++AXix5j5l1Ydr7b24uJansOCeKFsI2*zOptU*iyshUWb+mpsSV22YMNZyMD9*tcANBVkh5qcgA7oad+bhtRt7+Q5PtS*iWSO5*PxKjP7rCtImfHZHZveiQyeGqALqiLzPK*Jo*dfPqkbG9Ic6EBaa7Gk9Va*Gk0TMMg+mg0Yj*VWgPvfUEsBAhQDFAAACAgA*Il4WwYrIxhhBAAAiAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAiQQAAAAA',
  
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
