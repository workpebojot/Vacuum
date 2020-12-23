# The Vacuum Project
[![Build Status](https://travis-ci.com/workpebojot/Vacuum.svg?branch=master)](https://travis-ci.com/workpebojot/Vacuum) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The proposed **Vacuum Cleaner** project is to develop the Household Chores Service Platform for everyone where they can deliver jobs and services from or to those who have jobs or have lost their job due to pandemic. The Android program allows everyone to provide work and services.

The pandemic was widely disruptive to the economy, with most sectors and workforces adversely affected. The COVID-19 pandemic has had far-reaching economic consequences beyond the spread of the disease itself and efforts to quarantine it. As the SARS-CoV-2 virus has spread around the globe, concerns have shifted from supply-side manufacturing issues to decreased business in the services sector. The pandemic caused the largest global recession in history, with more than a third of the global population at the time being placed on lockdown.

## Motivation (Origination)
---
The **Vacuum Cleaner** project is searching for a way to solve the economic crisis by supplying everyone with the opportunity to provide jobs and services. The Vacuum Cleaner for Android Platform can build employment and services and encourage close cooperation.

-	To foster nationalism among the everyone as being responsible for its own resources
-	Support the unemployed people to reduce the transportation cost of seeking a career
-	Include the correct searched job
-	Organize and combine the different workers and jobless people in terms of geographical position
-	Support the health of employees
-	Aid for displaced employees and their families
-	Promote cooperation between workers

## Screenshot
---

<p>
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956721-a3384080-4513-11eb-9fd2-fda8b70fbaf7.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956726-a5020400-4513-11eb-86f4-f131b6089dd6.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956727-a59a9a80-4513-11eb-9173-c29b3f598e7f.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956729-a6cbc780-4513-11eb-8e75-7314b038d302.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956730-a7645e00-4513-11eb-90bb-12c6e6416753.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956734-a8958b00-4513-11eb-9b4f-29a58e4d8184.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956737-a92e2180-4513-11eb-9dd9-768015b40494.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956740-a9c6b800-4513-11eb-965f-1a5ff378529f.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956741-aa5f4e80-4513-11eb-8b32-dcca9a024c35.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956743-ab907b80-4513-11eb-9211-14bd18017e1f.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956745-ac291200-4513-11eb-9e3b-358a692ac412.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956747-acc1a880-4513-11eb-93b8-90bca63d4b7a.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956752-adf2d580-4513-11eb-9d9a-132bfe542b59.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956753-ae8b6c00-4513-11eb-9482-4fb83e1959ef.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956755-af240280-4513-11eb-8c2b-fef19e0fb330.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956758-afbc9900-4513-11eb-9cd6-76c61c92581b.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956760-b0edc600-4513-11eb-96ce-09741b4511f5.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956763-b1865c80-4513-11eb-9914-8f56076171db.png" />
    <img width="110" height="200" src="https://user-images.githubusercontent.com/38276345/102956765-b21ef300-4513-11eb-8f2f-0ad0e43e7103.png" />
</p>

## Technology and Framework used
---

- React Native Framework
- Java, JavaScript, Objective-C and GitHub CLI
- NPM, NPM Scripts, Nativebase, Android Native Library

## Code Example
---

In `src/abstract files`, you can add your any dependencies there needed by your application. In short, we can illustrate it in simple graph:

<img width="400" height="300" src="https://user-images.githubusercontent.com/38276345/102958422-c4029500-4517-11eb-81e3-cbb9b0f668c4.png" />

And we can then express them in code:
```javascript
// Dependencies
export default class Dependency extends React.Components {
    onSubmit() {
        console.log("Success!");
    }
}
```
```javascript
// Abstract
export { default as Dependency } from './helper/method/dependency';

// Or you can also write it like this to avoid bugs:

import Dependency from './helper/method/dependecy';
export { Dependency };
```
Learn more at [MDN Mozilla Export Guideline](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

```javascript
// Component
import * as Abstract from './src/abstract';

export default class Dependecies extends React.Components {
    Abstract.onSubmit() // Output "Success!"
}
```

## Installation
---

1. git clone https://github.com/workpebojot/Vacuum.git
2. cd Vacuum
3. git init
4. npm install

## How to use
---

In order to use this app, you have two options, you can use either use AVD or ADB support. To setup AVD, you can head to AVD Manual Guide at Android Developer Website: [Create New AVD](https://developer.android.com/studio/run/managing-avds.html). To setup ADB, plug in your devices and run `react-native run-android`. However, since this app is still new, I'm not still sure if `react-native run-ios` will run correctly. But it will sure it can be configured for right patching.

## Contribute
---
I would like to invite everyone interested to expand on this simple project. If you are interested, kindly hit [here](https://github.com/workpebojot/Vacuum/blob/master/CONTRIBUTING.md)

## License
---
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
