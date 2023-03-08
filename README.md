# NFT Gallery using React
This is a web application for displaying and browsing non-fungible tokens (NFTs) using React. <br /> The gallery allows users to view NFTs, filtered by wallet address. <br /> Further implementation would include searching by contract address, filtering for traits, and more. This is just the very basic POC.

## Installation
To install and run the application, follow these steps:

Clone the repository to your local machine.

Open a terminal window and navigate to the root directory of the project.

Run npm install to install the necessary dependencies.

Run npm start to start the development server.

If one doesn't open automatically, open a web browser and navigate to http://localhost:3000 to view the application.

Usage

Before doing anything, you'll need to create a .env file in your project's root. This is where the Alchemy API Key is stored. You can check out this [video](https://youtu.be/tfggWxfG9o0) for how to get your first Alchemy API Key. Once you've done that, created a variable in .env, ensuring the variable name begins with the prefix: REACT_APP_[your_unique_variable_name].

Example: REACT_APP_ALCHEMY_API_KEY=[your_key]


Note: Last minute bug found after latest push - seems like VS code is having an issue processing the .env variable, while my normal IDE (Webstorm) has no such issue. The workaround for now is simply hardcoding the API key instead of "process.env.REACT_APP_ALCHEMY_KEY", on lines 32-33 of NftGallery.jsx.

When you first load the application, you will be greeted by the terminal's "AI". <br /> Once you've said your hello's, you'll be prompted to enter a wallet address. Once entered and submitted, the gallery will appear.

Clicking on an NFT card will take you to a detailed view of the NFT, which includes additional information such as its associated Etherscan and Opensea links. You can also see a larger version of the NFT image and any associated metadata / traits.

## Lore

It is the year 2223 and you are a scavenger of machine parts in MEGACITY II. It's a tough life, but it's all you've ever known. 

Today you find yourself in an abandoned computer laboratory, which appears to have been picked dry. As you scrounge through the deluge of cracked monitors, dusty keyboards and ancient computer towers, you see something, partially obscured by dusty cobwebs. 

As you approach and pick up, you notice a piece of tape on the side, reading "PROPERTY OF HAL: DO NOT TOUCH". You figure Hal is probably long gone at this point, so you proceed to brush a heavy layer of dust off the screen, which is miraculously still intact. 

You decide to try turning it on... and it works! Amazing! They really don't build 'em like they used to, do they? 

As you hear the familiar hum and as the terminal begins to warm up, Part One our adventure begins...
