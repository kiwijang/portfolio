# 2023 portfolio

## 標準字設計

![image](https://user-images.githubusercontent.com/21300139/230926258-eb53c1f4-7ec0-4016-8a29-dc6df2014cb5.png)

## 動畫使用 AE 輸出成逐格 jpg 並用 canvas 呈現

## 鼠標特效，使用 sketch.js

https://github.com/soulwire/sketch.js

## 技術

- goolefont
- 使用 rollup 打包 js (terser 壓縮和打亂、babel、nodeResolve、commonjs)

babel 設定:
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}

```
