import { Grid, TextField,Button } from '@mui/material'
import React from 'react'
import {useState} from 'react'

export default function SimpleInterest() {
     const[principalamount,setPrincipalAmount]=useState("")
     const[rate,setRate]=useState("")
     const[time,setTime]=useState("")
     const[simpleinterest,setSimpleInterest]=useState("")
   function handleClick()
   {
    var SI = (principalamount*rate*time)/100;
    setSimpleInterest(SI)
   }
  return (
    <>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center',padding:20}}>
    <div style={{width:'40%',padding:10,borderRadius:10,background:'#f2f2f2'}}>
        <Grid container spacing={2}>
        <Grid xs={12} item>
                <h3 style={{textAlign:"center",color:"dark grey"}}>Simple Interest</h3>
            </Grid>
            <Grid xs={12} item>
                <TextField onChange={(event)=>setPrincipalAmount(event.target.value)} fullWidth label="Principal Amount"/>
            </Grid>
            <Grid xs={12} item>
                <TextField onChange={(event)=>setRate(event.target.value)} fullWidth label="Rate"/>
            </Grid>
            <Grid xs={12} item>
                <TextField onChange={(event)=>setTime(event.target.value)} fullWidth label="Time"/>
            </Grid>
            <Grid xs={12} item>
                <Button  fullWidth onClick={handleClick} variant ="contained" color="primary" >Get Simple Interest</Button>
            </Grid>
           
        </Grid>
        <Grid xs={12} item>
                {simpleinterest!="" ?<h5 style={{textAlign:'center'}}>Simple Interest is {simpleinterest}</h5>:<></>}
            </Grid>

          </div>
    </div>
</>
  )
}
