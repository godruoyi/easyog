<p align="center">
	<image src="https://github.com/godruoyi/og/assets/16079222/88f540bd-944f-4642-802e-c91c8105fb19" width="250" height="250"></image>
	<br />
	<h3 align="center">An open-source tool for checking OG styles of any website</h3>
</p>
<hr>

## Description

Easygoing is a browser extension that can display the OpenGraph style of any website, including localhost. Currently, it only supports displaying Twitter's OpenGraph style.

## Features

- [x] 🌰 Click once to display the OG style of any website
- [x] 🐜 Base On [wxt](https://wxt.dev/)
- [x] 🐊 Integrated Tailwind CSS and React 

## Demo



## Installation

### Install Manually

1. Download readog-chrome-extension-{version}.zip from [Latest Release](https://github.com/godruoyi/easyog/releases)
2. Unzip it
3. Open the Extension page of Chrome & Arc browsers
4. Enable `Developer mode` and click `Load unpacked` button to import Readog
5. Configure the service provider you want to save data(tg, bookmark, bear, etc.)
6. Enjoy.

### Install from source code

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the extension: `npm build`
4. Open Chrome Developer Tools and load the extension from the `output` directory

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm dev`
4. Open Chrome Developer Tools and load the extension from the `output/{chrome}` directory
5. Make changes to the code and the extension will be reloaded automatically

## License
MIT