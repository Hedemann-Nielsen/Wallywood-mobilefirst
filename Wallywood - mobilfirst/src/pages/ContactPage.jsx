import { useForm } from "react-hook-form";
import style from "../style/GlobalStyle.module.scss";
import { FaStarOfLife } from "react-icons/fa";

export const ContactPage = () => {
  const { register, handleSubmit, formState: {errors}, reset} = useForm()

  const submitform = data => {
    console.log(data)
    reset(); 
  }
  return (
<>
  <div>
    <h2 className="text-3xl pl-5 ">Kontakt os</h2>
    <div className="formContainer">

    <form onSubmit={handleSubmit(submitform)} className={style.form}>
      <div>
        <label htmlFor="name">Dit navn: <FaStarOfLife className={style.star} /></label>
        <input id="name" {...register('name', { required: true, pattern: /^[a-zA-Z\s]+$/})} />
        {errors.name && errors.name.type === 'required' && <span className={style.error}>Dette felt skal udfyldes</span>}
        {errors.name && errors.name.type === 'pattern' && <span className={style.error}>Dit navn må ikke indeholde tal.</span>}
      </div>
      <div>
        <label htmlFor="email" >Din email: <FaStarOfLife className={style.star}/></label>
        <input id="email" {...register('email', {required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
        {errors.email && errors.email.type === 'required' && <span className={style.error}>Dette felt skal udfyldes</span>}
        {errors.email && errors.email.type === 'pattern' && <span className={style.error}>Du skal indtaste en gyldig email</span>}

      </div>
      <div>
        <label htmlFor="message">Din Besked <FaStarOfLife className={style.star} /></label>
        <textarea name="message" rows="10" cols="30" {...register('message', {required: true} )}></textarea>
        {errors.message && errors.message.type === 'required' && <span className={style.error}>Indtast venligst en besked</span>}
      </div>
      <button className={style.button}>Send</button>
    </form>
    </div>
  </div>
</>
  );
}
