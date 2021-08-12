export default function isFunction(virtualDMO) {
  return virtualDMO && typeof virtualDMO.type === 'function'
}