import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { useSupabase } from "../Providers/SupabaseProvider"
import { useEffect, useState } from "react"


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
      <h3>Login</h3>
      {supabase && (
        <Auth 
        supabaseClient={supabase} 
        // appearance={{ extend: false }} //fjerne alt styling på login formularen
        appearance={{ theme: ThemeSupa }}
        providers={[]}
      />
      )}
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
