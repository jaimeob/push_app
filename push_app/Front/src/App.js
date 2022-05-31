import "./App.css";
import React, { useState, useEffect } from "react";
import { publicKey, messaging } from "./firebaseInit";
import { getToken } from "firebase/messaging";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function App() {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "", url_imagen: "" });
  const [dataObj, setData] = useState({
    titulo: "",
    mensaje: "",
    token: "",
    url_imagen: ""
  })


  useEffect(() => {

    getToken(messaging, { vapidKey: publicKey }).then((currentToken) => {
      if (currentToken) {
        let data = Array.from(dataObj)
        data.token = currentToken

        console.log(currentToken,"EL TOKEN -------")

        setData(data)
        localStorage.setItem('token',currentToken)
        console.log(localStorage,"localStorage")
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }, [])

  const handleChange = (e) => {
    setData({
      ...dataObj,
      [e.target.name]: e.target.value
    })
  }




  const test = () => {
    console.log(dataObj, "Calando pa");
    // KRAKEN URL FIREBASE https://app-coppel.firebaseio.com/
    axios.post('http://localhost:3000/tarea/send', dataObj)
      .then((resp) => {
        console.log(resp, "resp ---")
      })
      .catch((err) => {
        console.log(err);
      });
  }



  return (
    <div className="App">
      <>
        <Grid item xs={12} style={{ marginTop: '20px', marginLeft: '10px', }} >
          <Grid container spacing={0} justifyContent="center"
          >
            {/* <Grid item xs={6} style={{ marginTop: '20px', marginLeft: '10px' }} >
              <Grid container spacing={2}>
                <Grid item xs={6} >
                  <TextField id="outlined-basic" label="Titulo" name='titulo' onChange={handleChange}  value={dataObj.titulo} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} >
                  <TextField id="outlined-basic" label="Topic" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} >
                  <TextField id="outlined-basic" label="Mensaje" name='mensaje' onChange={handleChange}  value={dataObj.mensaje} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} >
                  <TextField id="outlined-basic" label="Url" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} >
                  <TextField id="outlined-basic" label="Url imagen" onChange={handleChange} name='url_imagen'  value={dataObj.url_imagen} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} >
                  <TextField id="outlined-basic" label="Campaña" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={3} >
                  <TextField id="outlined-basic" label="Fuente" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={3} >
                  <TextField id="outlined-basic" label="Medio" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} >
                  <TextField id="outlined-basic" label="Fecha programada" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={6} >
                  <TextField id="outlined-basic" label="Fecha enviada" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={8} >
                  <TextField id="outlined-basic" label="Token" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={2} style={{ marginTop: '18px' }}>
                  <Button variant="outlined" onClick={test}>TEST</Button>
                </Grid>
              </Grid>
            </Grid> */}
            <Grid item xs={4} style={{ marginTop: '20px', marginLeft: '10px', }} >
              <h4>Push Notification</h4>
              <Grid container spacing={3}>
                <Grid item xs></Grid>

                <Grid item xs={10} style={{ marginTop: '18px' }}>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                      component="img"
                      height="230"
                      image={dataObj.url_imagen}
                      alt="imagen"
                      width="500"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {dataObj.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {dataObj.mensaje}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Open</Button>
                      <Button size="small">Share</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div>

          {/* <ReactNotifications
            onRef={ref => (this.n = ref)} // Required
            title="Hey There!" // Required
            body="This is the body"
            icon="icon.png"
            tag="abcdef"
            timeout="2000"
            onClick={event => this.handleClick(event)}
        />

        <button onClick={showNotifications}>
            Notify Me!
        </button> */}

        </div>
      </>
    </div>
  );
}

export default App;