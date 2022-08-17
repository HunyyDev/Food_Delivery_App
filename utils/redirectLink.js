
const getRedirect = async (uri)=>{
    const response = await fetch(uri)
    const data = await response
    console.log(data.url);
    return (data.status === 200 ? data.url : '')
}
export default getRedirect;