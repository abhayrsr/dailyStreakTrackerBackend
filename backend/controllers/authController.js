const express = require('express');
var status = require("http-status");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();
const router = express.Router();

router.post("/google-auth", async(req, res) => {
   const { credential, client_id } = req.body;
   try{
    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: client_id,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    res.status(status.OK).json({payload});
   } catch(error){
    res.status(status.BAD_REQUEST).json({error});
   }
});

module.exports = router;
