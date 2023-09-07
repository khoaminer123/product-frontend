import React from 'react'
import { ContactFooter } from './Footer/ContractFooter'
import { ListProperty } from './Footer/ListProperty'


export const Footer = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column', width:'100%', height:"800px" , backgroundColor:'#FFFFFF'}}>
        <ContactFooter/>
        <ListProperty/>
    </div>
  )
}