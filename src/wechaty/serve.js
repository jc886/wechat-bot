import { getGptReply } from '../openai/index.js'
import { getKimiReply } from '../kimi/index.js'
import { getLingJiReply } from '../lingji/index.js'


/**
 * 获取ai服务
 * @param serviceType 服务类型 'GPT' | 'Kimi'
 * @returns {Promise<void>}
 */
export function getServe(serviceType) {
  switch (serviceType) {
    case 'ChatGPT':
      return getGptReply
    case 'Kimi':
      return getKimiReply
    case 'LingJi':
      return getLingJiReply
    default:
      return getGptReply
  }
}