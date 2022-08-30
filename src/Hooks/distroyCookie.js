import Cookie from 'js-cookie'

const distroyCookie = ( cookieName) => {
  return Cookie.remove(
    cookieName
  )
}

export default distroyCookie