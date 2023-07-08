import React from 'react'
import {Grid,Button,TextField} from '@mui/material'
import {useState} from 'react'
export default function New() {
    const[rate,setRate]=useState("");
    const[quantity,setQuantity]=useState("");
    const[discountrate,setDiscountRate]=useState("");
    const[amount,setAmount]=useState("");
    const[netAmount,setNetAmount]=useState("");
    function handleClick()
    {
        var amt=rate*quantity
        var dis=amt*discountrate/100
        var netamt=amt - dis
        setAmount(amt)
        setNetAmount(netamt)
    }

  return (
<>
<div style={{display:'flex', justifyContent:'center',alignItems:'center',padding:20}}>
<div style={{width:'40%',padding:10,borderRadius:10,background:'#f2f2f2'}}>
        <Grid container spacing={2}>
        <Grid xs={12} item>
                <h3 style={{textAlign:"center",color:"blue"}}>Sale Calculator</h3>
            </Grid>
            <Grid xs={12} item>
                <TextField onChange={(event)=>setRate(event.target.value)} fullWidth label="Rate"/>
            </Grid>
            <Grid xs={12} item>
                <TextField onChange={(event)=>setQuantity(event.target.value)} fullWidth label="Quantity"/>
            </Grid>
            <Grid xs={12} item>
                <TextField onChange={(event)=>setDiscountRate(event.target.value)} fullWidth label="Discount Rate"/>
            </Grid>
            <Grid xs={12} item>
                <Button onClick={handleClick} variant='contained' color='secondary' fullWidth>Get Amount</Button>
            </Grid>
            <Grid xs={12} item>
                {netAmount!='' ? <h5 style={{textAlign:"center"}}>Amount is {amount} Net Amount is {netAmount}</h5>:<></>}
                
            </Grid>

        </Grid>
          </div>
    </div>
</>
  )
}
