// Importar Express.js const express = require ( 'express' );


// Criar um aplicativo Express const app = express ();


// Middleware para analisar corpos JSON app.use 
( express.json ( ) );

// Define a porta e o token de verificação const port = process.env.PORT || 3000 ; const verifyToken = process.env.VERIFY_TOKEN ;
 


// Rota para solicitações GET app.get 
( ' / ' , ( req , res ) = > { const { 'hub.mode' : mode , 'hub.challenge' : challenge , 'hub.verify_token' : token } = req.query ;   
       

  if ( mode === 'subscribe' && token === verifyToken ) { 
    console . log ( 'WEBHOOK VERIFICADO' ); 
    res . status ( 200 ). send ( challenge ); } else { 
    res . status ( 403 ). end (); } });    
    
  


// Rota para requisições POST 
app.post ( ' /' , ( req , res ) => { const timestamp = new Date ( ). toISOString (). replace ( 'T' , '' ) .slice ( 0 , 19 ); console.log 
  ( ` \ n \ nWebhook recebido $ { timestamp } \n` ) ; 
  console.log ( JSON.stringify ( req.body , null , 2 ) ) ; 
  res.status ( 200 ) .end ( ) ; } ) ;   
        


// Iniciar o servidor 
app.listen ( port , () => { 
  console.log ( ` \nOuvindo na porta $ { port } \ n` ); });  
