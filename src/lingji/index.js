import axios from 'axios'
import dotenv from 'dotenv'

const env = dotenv.config().parsed // 环境参数

const domain = 'https://dashscope.aliyuncs.com/api'
const server = {
    chat: `${domain}/v1/services/aigc/text-generation/generation`,
    image: `${domain}v1/services/aigc/text2image/image-synthesis`,
}

const configuration = {
    /*
      目前可选 qwen1.5-72b-chat, qwen1.5-14b-chat，qwen1.5-7b-chat，qwen-72b-chat, qwen-14b-chat或qwen-7b-chat
    */
    model: "qwen-72b-chat",

}

const image = {
    /*
      目前可选 qwen1.5-72b-chat, qwen1.5-14b-chat，qwen1.5-7b-chat，qwen-72b-chat, qwen-14b-chat或qwen-7b-chat
    */
    model: "wanx-v1",
    parameters: {
        style: "<chinese painting>",
        "size": "1024*1024",
        "n":1,
        "seed":42
    }

}

export async function getLingJiReply(prompt) {
    console.log(prompt);
    try {
        const res = await axios.post(server.chat, Object.assign(configuration, {

            input: {
                prompt: prompt,
                // messages:[
                //     {
                //         role: "user",
                //         content: prompt
                //     }
                // ]
            },

        }), {
            timeout: 100000,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${env.LINGJI_API_KEY}`
            },
        })


        console.info(res.data);
        const data = res.data;

        console.info(data.output.text);
        return data.output.text;
    } catch (error) {
        console.error(error.code);
        console.error(error.message);
    }
}




