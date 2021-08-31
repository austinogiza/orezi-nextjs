export const baseURL = process.env.NODE_ENV === 'development' ? "http://127.0.0.1:8000": "https://api.thecreativemena.com"



const endpoint = `${baseURL}/api`

export const contactUrl = `${endpoint}/contact/`
export const workUrl = `${endpoint}/work/`
export const workSearchUrl = `${endpoint}/work/type/`

export const workDetailUrl = slug => `${endpoint}/work/${slug}/`
export const workProductUrl = `${endpoint}/work-product/`
export const workbrandUrl = `${endpoint}/work-brand/`
export const searchUrl = `${endpoint}/search/`
export const tagUrl=  `${endpoint}/tags/`

