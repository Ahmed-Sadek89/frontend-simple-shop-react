import Cookie from 'js-cookie'

const useSetCookie =  ( cookieName, token) => {
  return Cookie.set(
    cookieName,
    token,
    {
        expires: 3
    }
  )
}

export default useSetCookie