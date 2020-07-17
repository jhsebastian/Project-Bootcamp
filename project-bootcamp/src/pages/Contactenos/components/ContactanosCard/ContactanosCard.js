import React from 'react';
import image from '../../../../assets/logo cuadrado.jpg';
import './ContactanosCard.css';

const ContactenosImage = () => {
  return(
    <div className="contactanos-card">
      <div className="contactanos-card-title">
        <h1>CONTÁCTANOS</h1>
      </div>
      <p className="contactanos-card-p">
      <a className="datos" 
        href="https://www.google.com/maps/place/CCM+Creativos/@3.4399873,-76.5631353,13z/data=!4m18!1m12!4m11!1m3!2m2!1d-76.5203916!2d3.4399873!1m6!1m2!1s0x8e30a68b1aaaaaab:0x85241474e98ee6c!2sccm+creactivos!2m2!1d-76.5281154!2d3.4399879!3m4!1s0x8e30a68b1aaaaaab:0x85241474e98ee6c!8m2!3d3.4399879!4d-76.5281154" 
        target="_blank" > Carrera 18A 13- 37 Cali -Colombia </a> 
      </p>
      <iframe className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4736.170075716785!2d-76.52998132034351!3d3.440227640813574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a68b1aaaaaab%3A0x85241474e98ee6c!2sCCM%20Creativos!5e0!3m2!1ses!2sco!4v1594867865001!5m2!1ses!2sco" 
      width="400" 
      height="250" 
      frameborder="0"  
      allowfullscreen="" 
      aria-hidden="false" 
      tabindex="0"
      title="Mapa Google">
      </iframe>
      <p>
      <a className="datos"
        href="https://api.whatsapp.com/send?phone=573122328565&text=&source=&data=&app_absent=" 
        target="_blank" >312 232 8565 - </a>
      <a className="datos"
        href="https://api.whatsapp.com/send?phone=573122237998&text=&source=&data=&app_absent=" 
        target="_blank" >312 223 7998</a>  
        <br/>
        <a className="datos"
        href="https://www.google.com/search?client=ms-android-motorola-rev2&sxsrf=ALeKk00VyrE95q-Of4mYDvLIstDuDDmWUw:1594913228774&q=ccm+creactivos&spell=1&sa=X&ved=2ahUKEwiF-crjitLqAhXLm-AKHSOYBNEQBSgAegQIDRAC&cshid=1594913260582&biw=360&bih=512&dpr=3#" 
        target="_blank" >032 377 3737</a>
      </p>
      <p>
        <a className="datos"
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrdlQtbxJkgsMRtgsrWMkqMKRsLfDxJXcqNCKxwkfdpcvJLZnwHKBjmsKpLtMpXgjpKQTL" 
        target="_blank">mediosdigitales@ccmcreactivos.com </a>
        <br/>
        <a className="datos"
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNxNzXpzmqZNZbRxTZmFDTqNFzQlMqSJXKZkDLfqNvQXqWClqTsHLVljvmbzBjkWdqzQQq" 
        target="_blank">cotizaciones@ccmcreactivos.com</a>
      </p>
      <img className="img-fluid img-card"src={image} alt="logo"/>
    </div>
  )
};

export default ContactenosImage