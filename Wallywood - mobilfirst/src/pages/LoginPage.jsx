import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useSupabase } from "../Providers/SupabaseProvider"
import { useEffect, useState } from "react"
import style from "../style/GlobalStyle.module.scss"


export const LoginPage = () => {
const { supabase } = useSupabase()
const [ session, setSession ] = useState(null)




useEffect(() => {
  supabase?.auth?.getSession().then(({ data: session }) => {
    setSession(session)
  })

  if(supabase && supabase.auth) {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }
}, [supabase])

if(!session) {
    return (
    <>
      <h2 className="text-3xl ml-5 md:w-1/2 ">Login</h2>
      <div className="m-auto justify-center w-1/2">
        {supabase && (
          <Auth className={style.form}
          supabaseClient={supabase} 
          // appearance={{ extend: false }} //fjerne alt styling på login formularen
          appearance={{ theme: ThemeSupa, style: {
            button: { background: '#d97852', color: '#524641' },
          }}}
          // appearance={{
          //   style: {
          //     button: { background: '#d97852', color: '#524641' },
          //     anchor: { color: 'blue' },
          //     input: { border: '1px solid #83838300', backgroundColor: 'white'},
          //     Ind
          //   },
          // }}
          providers={[]}
          />
          )}
        </div>
    </>
  )
} else {
  return (
    <>
      <h3>Login</h3>
      <p>Du er logget ind med Email: {session?.user?.email} </p>
      <button onClick={() => supabase.auth.signOut()}>Log ud</button>
    </>
  )
}


}
