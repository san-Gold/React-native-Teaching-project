# React-native-project-app

Simple React Native App for demonstration

## Installation Guide For IOS App in Mac

1. brew install node
2. brew install watchman
3. Create a simulator in Xcode
4. You will also need to install the Xcode Command Line Tools
5. sudo gem install cocoapods

6. Install Pods
   from root project directory move to ios directoty and install pods
   - cd ios
   - pod install
7. Start metro from root directory: npx react-native start
8. Start ios app from root directory: npx react-native run-ios

## Project Description

App has three screens:

1.  Selector:
    Here you will be presented with tree data with one level at a time. Each selection will take you further down the tree.
    Once you reach the leaf node you can mark or unmark the leaf node.

            The code will work for any tree structure with any level of depth. Tree can be unbalanced with one branch ending at n while any other branch ending at k : k > n or k< n

    项目初始化。集成 redux、路由、tab，typeScript、react-native-elements-UI,增加网络调试，内嵌 webView 等，目前以兼容 ios android

<img src="screenshots/home.png" width="300">
<img src="screenshots/shop.png" width="300">
<img src="screenshots/my.png" width="300">

Navigation in the app happens through tab navigation
