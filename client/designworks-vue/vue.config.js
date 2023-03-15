module.exports = {
    devServer: {
        // 设置代理
        proxy: {
            "/api": { // 类似于前缀
                target: 'http://127.0.0.1:8081/', // 目标服务器地址
                wx: true, // 是否启用 websocket
                chageOrigin: true, // 开启代理：在本地会创建一个虚拟服务器，然后发送请求的数据，
                // 同时接收响应的数据，这样服务端和服务端之间进行数据交互就不会有跨域的问题
                pathRewrite: {
                    "^/api": "/"
                }
            }
        }
    }
}
