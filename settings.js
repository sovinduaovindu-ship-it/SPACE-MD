require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'SPACE-MD:~UEsDBBQAAAgIADgYjVsGeBy9YQQAAIQHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGEFA1IiOGEAUFGjAuxvzUEABhdwsCgUn*PcN7O7pedid7eWpSIrMk+eczJ8gL3CFVqgF05+gJPgKKeqOtC0RmAK5DkNEQB8EkEIwBZElJF6klhs5MsMRGsvaILqPA6aKQrKdDNtKq1Bm4HuobV*Aow*K2kux*4eEMSk2oe1T25+vihtsk9obCiHJx2Nnc10m4lwMmQU3VP2h9AIeXUaICc4jtYxRhghMV6i1ISZfg29aqHSppvfWu9HikkiFyN+XQqyZiFUTZIuuLs+zVNfc+fFr8Dl5xmXFopfVHsqw5NqWNqm3zlrZ11V0CLRsdOc2yi7EC*MNfoWjHAV6gHKKaftl3l*NlSLrPc7eG8ZxW0BT2YUn3FiH22KwxU1zmLXjnpXejbP5NeCsuy0afcZXjjtyHIKcRXtWBm4Gr3OP6HKz3RYHQ740YSP9DtwmH145*x*eWztl6*TkmN5u1oqlw5+O4*1pc7xlJNDZ*XrN3hT+GJuCqn8N*ippB2e3bpZDpMOr+grLoT1jLcPakN06FFTTpXpEmkPC3j7hQ1qTP6GcpPPTpQkvATOwigPUdt5AO53kV3GkKAt510rL5piwhDpYHtm45212hm7Pt7Yhcpk4cVQ8Znm3DMTgNhMHioNvc8+MnZdnR2fU6gGYso8+ICjCFSWQ4iLvYrzQBzC4rpFPEH2yC8KVOrcuZ8pu12ooq2fZTLmcKVSNjlAlaaelkUvjarayW*8F9EFJCh9VFQo0XNGCtCaqKhihCkz*+tEHOWrom25dNY7tgxCTim7zukwLGHyI+vER+n5R53Td5r7SHRABU+YzjCjFeVR1NNY5JH6Mr0iJIa3ANIRphX41iAgKwJSSGv0aWqUIOt73y9nmcGQnoA+ypx446NjnxRE*5sXRZDTlvlffbl1SWJbfckRBH+SwuwtynKEqhjkuCQwQKiHog*T5*3DIjRmRZQR2wk4Ebsp97+KPX8i7QgGiEKcVmALFGipJfZurS1iPx+fFQlIjSYkk8Nnph2PeJJGq3il3vSSML76Z7GLhzvhnVW9izvWxdcXCBEaktoxlzr*8Q5KuwVFSm0upOlrY3yi7wWz1WgqjFjbuObUU1M7HBVMeufGuVXiYlcqkiIVCMJyhwO+kRPOFoyaoq7ISuPui2V+lI5*bkvTSVQvQFfvo92KvVJc87yoJZQZZ16BuOjSotlsaDuPkempcsdhKJ2feptu4HJppfNn7RTN7rWtBmk3OjnJW7lJ78S6N1CSyf1WlNMbRm5efs5S+7zD8tFmnYfcaYvRcCe9q*Yemb7A74zGP*m8Z3lfMv4yp7Bh2dmL2PMfDfKazR+RPtKWsmMeAOeiJx9fhvliJybo99cDj8aMPyhTSsCAZmIIq8zrLkKLubKznYfGHSopk6moULbumU1hR6XM0Np0PKcxKMGXFkSBM+Akzertlk6LUYBV3W3bFxxrf+byVynJNIf2YNCB1jyUx4PE3UEsBAhQDFAAACAgAOBiNWwZ4HL1hBAAAhAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAiQQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
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
