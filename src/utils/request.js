export default (config) => {
  const {baseUrl} = config
  return (Vue) =>{
    Vue.prototype.$http = async (params) => {
      const {url, method, data} = params;
      const res = await uni.request({
        url:baseUrl+url,
        method,
        data
      })
      return res[1].data
    }
  }
}