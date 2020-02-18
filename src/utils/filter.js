export default function number (config) {
  if(config>=10000) return (config/10000).toFixed(1)+'万'
  return config
}