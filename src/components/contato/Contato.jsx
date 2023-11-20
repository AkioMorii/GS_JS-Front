import React, { Component } from 'react'
import './Contato.css'

export default class Contact extends Component {
    render() {
        return (
            
            <div className="contatoBody">

                    <div>
                        <h2 className='contatoString'>Contato</h2>
                        <p className='fdcString'>Formas de contatos</p>
                        <p className='fdcStyle'>WhatsApp para contato</p>
                        <p className="fdcValor">(11) 96827-8906</p>
                        <p className='fdcStyle'>Telefone</p>
                        <p className="fdcValor">(11) 96827-8906</p>
                        <p className='fdcStyle'>E-mail</p>
                        <p className="fdcValor">HealSphere@gmail.com</p>
                    </div>

            </div>
            
        )
    }
}
