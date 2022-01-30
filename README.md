# Grandpa's Faucet UI/UX
## _The fully functional web application of grandpa's faucet_

# Project Details
Grandpa's Faucet is project that was assigned to me by [Isaac Mubiru](https://github.com/zac-09), my role was to implement the UI from the Xd mockup. 
The application is built in Reactjs,Redux, React Router v6 and material icons

## Client's Requirements
The tasks are as follows:

1. Responsive and cross-browser page background and footer
2. Login by Button to connect to Metamask Wallet via Polygon(matic.js) library
3. OTP form and verification if member
4. Redirection link to https://whiteboardcrypto.com/ after login if not a member
5. FAQs accordion
6. Localization (English only)
7. Form
 - Amount Input field + Captcha
 - "Select with dummy data (will be loaded from DB)
  Options: MATIC, FTM, ETH, AVAX, ONE, ETH, NEAR, CELO, BNB, FTM"
 - Request button disabled till wallet address/IP is AJAX-verified from backend as not blacklisted with valid amount
8. Transaction Status / Blacklisted user components
9. Display last 5 successful transactions below input section just before FAQ accordion(updated every second).
10. Connect frontend to backend
10. Testing and Debugging
11. Documentation (Readme)

After the first design, other requirements recieved were
Also please rename the routes:
- otp-confirm to confirm-otp
- whiteboard to sign-up 
- meta-mask to connect-metamask
Also remove the Captcha from the confirm page as it is only accessible to logged in users so they must have verified the OTP.
Lastly, please redirect all unknown pages to the sign-in page.
Remember to create a base module for API connections to the backend that will get credentials from a .env file.
It could be of the form
apiRequest(method, url, payload) {
try {
// adios, request, fetch or anything you use here.
}
catch(error){
// format general errors from API here for localization 
}
}

# Features
> Mobie Responsiveness: 
 We had a task of making sure that the web pages are made responsive on different device widths

> Semantic tags:
 Use of the know semantic tags was also a checkpoint during the project, making sure that we used only tags that were neccessary.

> Beautiful UI and UX ✨:
 Bringing out the webpages as they appear in the mockup was the major goal of this task.

> Adding Logic and Making API Calls: 
After the UI implementation, i had to add logic to the UIs making different calls and storing data in redux and passing it on to the different components where it had to be displayed. It was such an awesome experience getting to learn how to connect to metamask extension and capturing the account address to use it when making calls for different transactions.

##### DEMO:    
![](src/assets/UI/Web1920–2.png?raw=true "Sign In")
![](src/assets/UI/Web1920–3.png?raw=true "Confirm Otp")
![](src/assets/UI/Web1920–4.png?raw=true "Connect to WhiteBoard Crypto")
![](src/assets/UI/Web1920–5.png?raw=true "Connect to MetaMask")
![](src/assets/UI/Web1920–6.png?raw=true "Transactions")
![](src/assets/UI/Web1920–7.png?raw=true "Transaction Success")
![](src/assets/UI/Web1920–8.png?raw=true "Transaction Failed")
![](src/assets/UI/Web1920–9.png?raw=true "Transaction Black List")


