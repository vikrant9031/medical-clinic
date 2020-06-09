import React from 'react';
import './about.css';
import Vash4 from './vash4.jpg';
import Vash3 from './vash3.jpg';

function About(){
	return(
		<div>
   <div class="aboutHead"><p>About us</p></div>

     <div class="container">
  <div class="jumbotron">
  <img src={Vash4}/>  
    
  </div>
  <p class="faculty">Dr. Madhukar Vashistha M.B.B.S M.S (K.G.M.U), CIA:NABH (Ex. Asst. Professor Govt. Medical College Kannauj) 
E.N.T & Head and Neck Surgeon.</p>
     
</div>

<div class="alert alert-info">
 <p class="about">The principle of ENT surgery are:<strong>Otology </strong>- Treatment of infection, disease and damage to the ear to improve hearing and balance. 
 Neurotologists deal with conditions deep in the middle and inner ear where conditions are more closely linked to the brain.
<strong>Rhinology </strong>- Treatment of sinus and nasal disorders, including allergy, to relieve pain, ease breathing and improve nasal 
function.<strong>Laryngology</strong> - Treatment of infections of the throat and larynx to ease speech and swallowing.Head and neck surgery - 
away from the main ENT systems, specializing in surgery on cysts, glands such as lymph, salivary, thyroid and parathyroid glands, and head and neck cancers.
<strong>Facial plastics</strong> - this can include aesthetic procedures such as rhinoplasty ('nose job'), pinnaplasty (bat ears), face lifts o
r reconstructive such as re-setting the jaw. There is a big cross-over here with the work of plastic and oral and maxillofacial surgeons.
<strong>Paediatrics</strong> - there are many ENT conditions, often congenital, that require treatment at a very young age. These include airway problems,
 infections of adenoids or tonsils that require their removal, and grommets for 'glue ear'.
<strong>Otorhinolaryngology</strong>, head and neck surgery, or ENT as it is more popularly known, is a fascinating and diverse specialty.
 ENT has more separate surgical procedures than most other surgical disciplines put together and is a cradle to grave specialty.
  An ENT surgeon may be involved with a neonate's breathing problem, an infant's hearing loss and this involvement may continue right through to the hearing loss and loss of faculties of old age.
</p>
</div>
  <div id="ent" class="container">
  <div class="jumbotron">
    <img src={Vash3}></img>   
    
  </div>
</div>
<div class="alert alert-info">
<p class="ent">

<strong>ENT</strong> surgeons are involved in communication disorders and should themselves be good communicators. Although it is a surgical specialty, it has a very large outpatient medical base. 
Emergency work tends not to be very heavy, although it tends to be dramatic. ENT is a surgical discipline which is ideally suited to flexible working.Otolaryngology is a medical specialty that treats conditions of the ears, nose, and throat. Specialists in this field have training in surgery as well as medicine.

Because <strong>otolaryngology</strong> involves the ears, nose, and throat, these specialists are known as <strong>ear, nose, and throat (ENT)</strong> doctors.

For an ENT physician, the ear, nose, throat, larynx, and the sinuses are in the scope of treatment areas.

Unlike physicians who can only medically treat conditions involving these areas and structures, ENT doctors can treat and also perform surgery on the structures involved, if necessary.

Surgery will be necessary when non-invasive treatments and medications cannot improve the condition in question.

ENT surgery may also be harnessed to address injuries and deformities.
</p>
</div>

</div>

		);
}
export default About;