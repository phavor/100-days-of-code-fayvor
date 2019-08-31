const bcrypt = require( 'bcryptjs' )
const jwt = require( 'jsonwebtoken' )
const { SECRET_KEY } = process.env

class Utils {

  async createToken( payload ) {
    return await jwt.sign( payload, SECRET_KEY, { expiresIn: "24h" } )
  }

  async hashPassword( password ) {
    return await bcrypt.hash( password, 10 )
  }

  async comparePassword( password, savedPassword ) {
    return await bcrypt.compare( password, savedPassword )
  }

  async getEmailVerifierToken( payload ) {
    return await jwt.sign( { payload }, SECRET_KEY, { expiresIn: '5m' } )
  }

  async getEVTTemplate( title, EVT ) {
    return await `
    <body style="display: flex; justify-content: flex-start; padding-top: 1.5rem; align-items: center; flex-direction: column; font-family: helvetica, 'sans-serif'; color: #5a5a5a;">
      <h2 style="color: #505050;">${title}</h2>
      <p>We are so glad to have you onboard our platform. 
        <br /><br />
        You can continue to your dashboard by loggin in
        <a href="https://www.google.com/${EVT}" style="background: violet; color: white; padding: 0.89rem 2rem; border-radius: 3px; display: block; text-align: center; text-decoration: none; margin-top: 2rem;">
        here
        </a>
      </p>
    </body>
    `
  }
}

module.exports = Utils