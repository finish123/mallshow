module.exports = {
    configureWebpack:{
        resolve:{
            // alias 别名得意思,方便后续得文件路径使用
            alias:{
                "assets": "@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",

            }
        }
    }
}